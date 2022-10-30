const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./config/database');

const teamsRoutes = require('./routes/teamsRoutes');
const personRoutes = require('./routes/personRoutes');

db.connect()
app.use(cors());
app.use(express.json())

app.use('/teams', teamsRoutes);
app.use('/person', personRoutes);

module.exports = app