import express from 'express'

import cors from 'cors'

import connect from './config/database.js'

import teamsRoutes from './routes/teamsRoutes.js'
import personRoutes from './routes/personRoutes.js'

const app = express(); 

connect()
app.use(cors());
app.use(express.json())

app.use('/teams', teamsRoutes);
app.use('/person', personRoutes);

export default app