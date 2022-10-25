const express = require('express');
const router = express.Router();

const controllers = require('../controllers/teamsController');

router.get('/all', controllers);

module.exports = router