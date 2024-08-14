CREATE TABLE users (
    id SERIAL PRIMARY KEY,                 -- Auto-incrementing primary key
    username VARCHAR(100) NOT NULL UNIQUE, -- Username, must be unique
    password VARCHAR(255) NOT NULL,        -- Password, stored as a hashed string
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Timestamp of when the user was created
);