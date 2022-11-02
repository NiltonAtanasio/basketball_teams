const express = require('express');
const router = express.Router();

const controllers = require('../controllers/teamsController');

router.get('/', controllers.getHome);
router.get('/all', controllers.getAll);
router.post('/getone', controllers.getOne)
module.exports = router