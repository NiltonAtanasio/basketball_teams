const express = require('express');
const router = express.Router();

const controller = require('../controllers/personController');

router.get('/all', controller.getAll);
router.post('/create', controller.createPerson);

module.exports = router