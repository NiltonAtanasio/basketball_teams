const { default: mongoose } = require('mongoose')
const PersonSchema = require('../model/person')

const getAll = async (req, res) =>  {
  try {
    let allUsers = await PersonSchema.find()
    res.status(200).json(allUsers)
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

const createPerson = async (req, res) => {
  try {
    const newPerson = new PersonSchema({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      email: req.body.email,
      createdAt: new Date()
    })

    const savedPerson = await newPerson.save()

    res.status(200).json({
      message: "user adicionado com sucesso", 
      savedPerson
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}
module.exports = {
  getAll,
  createPerson,

}