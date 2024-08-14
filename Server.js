import express from 'express';
import bodyParser from 'body-parser';
import bcrypt from 'bcryptjs';
import cors from 'cors';
import pg from 'pg';

const { Client } = pg;

const db = new Client({
  user: "postgres",
  host: "localhost",
  database: "cake_creations_db",
  password: "Pranjal@421",
  port: 5432,
});

const app = express();
const port = 5000;

db.connect();

app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:3000', 
}));

// Signup route
app.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await db.query('INSERT INTO users (username, password) VALUES ($1, $2)', [username, hashedPassword]);
    res.json({ status: 'success', message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message });
  }
});

// Login route
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const userQuery = await db.query('SELECT * FROM users WHERE username = $1', [username]);
    
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
    res.status(500).json({ status: 'error', message: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
