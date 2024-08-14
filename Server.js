import express from 'express';
import bodyParser from 'body-parser';
import bcrypt from 'bcryptjs';
import cors from 'cors';
import pg from 'pg';

const { Client } = pg;
const client = new Client({
  connectionString: "postgresql://pranjalee30:mv33ghYKcRkKVO9L9RAp3w@cake-creations-5809.7s5.aws-ap-south-1.cockroachlabs.cloud:26257/cake_creations_db?sslmode=verify-full",
  ssl: {
    rejectUnauthorized: false,
  },
});

client.connect(err => {
  if (err) {
    console.error('Failed to connect to database:', err.stack);
  } else {
    console.log('Connected to database');
  }
});

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:3000', 
}));

// Signup route
app.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await client.query('INSERT INTO users (username, password) VALUES ($1, $2)', [username, hashedPassword]);
    res.json({ status: 'success', message: 'User registered successfully' });
  } catch (err) {
    console.error('Signup error:', err.message);
    res.status(500).json({ status: 'error', message: 'An error occurred during signup' });
  }
});

// Login route
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const userQuery = await client.query('SELECT * FROM users WHERE username = $1', [username]);
    
    if (userQuery.rows.length > 0) {
      const validPassword = await bcrypt.compare(password, userQuery.rows[0].password);
      
      if (validPassword) {
        res.json({ status: 'success', message: 'Login successful' });
      } else {
        res.json({ status: 'error', message: 'Invalid credentials' });
      }
    } else {
      res.json({ status: 'error', message: 'User does not exist' });
    }
  } catch (err) {
    console.error('Login error:', err.message);
    res.status(500).json({ status: 'error', message: 'An error occurred during login' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
