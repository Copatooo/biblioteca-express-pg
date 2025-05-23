
const express = require('express');
const { Pool } = require('pg');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false // necessário para o Render
  }
});
app.get('/', (req, res) => {
  res.send('API de Biblioteca com PostgreSQL e Express!');
});
app.get('/categorias', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM categoria');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao buscar categorias');
  }
});
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
ATABASE_URL=postgres://admin:senha123@dpg-c1b2h4g1f1234k8r1ps0-a.oregon-postgres.render.com:5432/biblioteca_pg

