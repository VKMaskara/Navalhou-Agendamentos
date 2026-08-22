import express from 'express';
import 'dotenv/config';
import cors from 'cors';

import authRoute from './src/routes/auth.routes.js';


const app = express();

app.use(express.json());
app.use(cors());


// ─── Rotas públicas ───────────────────────────────────────────────────────────
app.get('/', (req, res) => {
    res.send('Bem-vindo ao NAVALHOU Rodando com Express.js');
});

// ─── Rota login ──────────────────────────────────────────────────────────
app.use('/api/auth', authRoute);


export default app;