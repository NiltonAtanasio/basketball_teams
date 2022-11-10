import express from 'express'

import cors from 'cors'

import db from './config/database.js'

import teamsRoutes from './routes/teamsRoutes.js'
import personRoutes from './routes/personRoutes.js'

const app = express(); 

db()
app.use(cors());
app.use(express.json())

app.use('/teams', teamsRoutes);
app.use('/person', personRoutes);

export default app