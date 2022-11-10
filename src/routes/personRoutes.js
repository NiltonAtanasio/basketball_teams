import express from 'express'

import controllers from  '../controllers/personController.js'
const router = express.Router();


router.get('/all', controllers.getAll)
router.post('/create', controllers.createPerson)
router.post('/login', controllers.login)
router.delete('/delete', controllers.deletePerson)
router.put('/update', controllers.updatePerson)

export default router