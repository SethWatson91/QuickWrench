import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import pool from './config/db.js';



const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get('/api/quickwrench/health', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ message: 'QuickWrench API is live!', time: result.rows[0].now });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database connection failed' });
  }
});

app.listen(PORT, () => {
  console.log(`🚗 QuickWrench server running on http://localhost:${PORT}`);
});
