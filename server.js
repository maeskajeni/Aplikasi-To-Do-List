const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // Your MySQL password
    database: 'employees' // Your database name
});

// Connect to MySQL
db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Get all employees
app.get('/employees', (req, res) => {
    db.query('SELECT * FROM employees', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

// Add a new employee
app.post('/employees', (req, res) => {
    const { NIK, FullName, Age, BirthDate, Gender, Address, Country } = req.body;
    const query = 'INSERT INTO employees (NIK, FullName, Age, BirthDate, Gender, Address, Country) VALUES (?, ?, ?, ?, ?, ?, ?)';
    db.query(query, [NIK, FullName, Age, BirthDate, Gender, Address, Country], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: results.insertId, NIK, FullName, Age, BirthDate, Gender, Address, Country });
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});