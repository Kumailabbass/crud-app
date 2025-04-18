
// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const { Pool } = require('pg');

// const app = express();
// const port = 3000;

// const pool = new Pool({
//   user: 'postgres',          
//   host: 'db',
//   database: 'crud-app2',       
//   password: '.kumailskar.',  
//   port: 5432,
// });

// app.use(cors());
// app.use(bodyParser.json());
// app.use(express.static('public'));



// // TEST ROUTE
// app.get('/', (req, res) => {
//   res.send('CRUD API is working!');
// });

// // CREATE
// app.post('/users', async (req, res) => {
//   const { name, email } = req.body;
//   const result = await pool.query(
//     'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
//     [name, email]
//   );
//   res.json(result.rows[0]);
// });

// // READ ALL
// app.get('/users', async (req, res) => {
//   const result = await pool.query('SELECT * FROM users');
//   res.json(result.rows);
// });

// // READ ONE
// app.get('/users/:id', async (req, res) => {
//   const result = await pool.query('SELECT * FROM users WHERE id = $1', [req.params.id]);
//   res.json(result.rows[0]);
// });

// // UPDATE
// app.put('/users/:id', async (req, res) => {
//   const { name, email } = req.body;
//   const result = await pool.query(
//     'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *',
//     [name, email, req.params.id]
//   );
//   res.json(result.rows[0]);
// });

// // DELETE
// app.delete('/users/:id', async (req, res) => {
//   await pool.query('DELETE FROM users WHERE id = $1', [req.params.id]);
//   res.send('User deleted');
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
