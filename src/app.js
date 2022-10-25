const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const teamsRoutes = require('./routes/teamsRoutes');

app.use(express.json());

app.use('/teams', teamsRoutes);

module.exports = app