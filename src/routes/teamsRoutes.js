import express from 'express';

import controllers from '../controllers/teamsController.js'

const router = express.Router();

router.get('/', controllers.getHome);
router.get('/all', controllers.getAll);
router.post('/getone', controllers.getOne)

export default router