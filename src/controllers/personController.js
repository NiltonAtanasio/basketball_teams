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
      message: "person adicionado com sucesso", 
      savedPerson
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

const deletePerson = async (req, res) => {
  try {
    let reqName = req.body.name
    let reqEmail = req.body.email
    
    let deletePerson = await PersonSchema.findOne({name: reqName, email: reqEmail})

    if(deletePerson) {
      await PersonSchema.deleteOne(deletePerson)
      res.status(200).json({
        message: "person deletado com sucesso",
        "name": reqName,
        "email": reqEmail
      })
    }else {
      res.status(400).json({
        message: "person não encontrado, digite corretamente name e email ",
        "name": reqName,
        "email": reqEmail
      })
    }
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
   }
}

const updatePerson = async (req, res) => {
  try {
    let reqName = req.body.name
    let reqEmail = req.body.email
    let updateName = req.body.updateName
    let updateEmail = req.body.updateEmail
    
    let findPerson = await PersonSchema.findOne({name: reqName, email: reqEmail})
    
    if(findPerson){
      await PersonSchema.updateOne({name: reqName, email: reqEmail}, {name: updateName, email: updateEmail})
      res.status(200).json({
        message: "person atualizado com sucesso",
        "name": updateName,
        "email": updateEmail
      })
    }else {
      res.status(400).json({
        message: "person não encontrado, digite corretamente name e email",
        reqName,
        reqEmail
      })
    }
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

module.exports = {
  getAll,
  createPerson,
  deletePerson,
  updatePerson,

}