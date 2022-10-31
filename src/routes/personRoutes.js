const express = require('express');
const router = express.Router();

const controller = require('../controllers/personController');

router.get('/all', controller.getAll);
router.post('/create', controller.createPerson);
router.delete('/delete', controller.deletePerson)
router.put('/update', controller.updatePerson)

module.exports = router