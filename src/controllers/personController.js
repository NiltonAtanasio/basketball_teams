import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import personSevice from '../service/person.sevice.js'

const getAll = async (req, res) =>  {
  try {
    let allUsers = await personSevice.findAllPerson()

    if(allUsers.length === 0) {
      res.status(400).send({message: "There are no registered users"})
    }

    res.status(200).send({ message: allUsers})

  } catch (error) {
    res.status(500).send({
      message: error.message
    })
  }
}

const createPerson = async (req, res) => {
  try {
    const { name, email, password } = req.body
    
    if(!name || !email || !password){
      res.status(400).send({
        message:"Submit all fields for registration"
      })
    }
    
    const person = await personSevice.createService(req.body)

    if(!person){
      res.status(400).send({message: "Error creating user"})
    }
    res.status(201).send({message: "User created successfully!",
    person: {
      id: person._id,
      name,
      email
    }
  })

    
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
  /* try {
    let salt = bcrypt.genSaltSync()
    let reqPassword = req.body.password
    let password = bcrypt.hashSync(reqPassword, salt)

    const newPerson = new PersonSchema({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      email: req.body.email,
      password: password,
      createdAt: new Date(),
      salt: salt
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
  } */
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

const login = async (req, res) => {
 try {
  let credentials = req.body
  
  if(credentials.email && credentials.password){
    let person = await PersonSchema.findOne({email: credentials.email})
    
    if(person){
    let checkPassword = bcrypt.hashSync(credentials.password, person.salt)
    
      if(checkPassword == person.password && credentials.email == person.email){
        res.status(200).json({
          message: `login realizado, seja bem vindo ${person.name}`
          
        })
      }else {
        res.status(400).json({
          message: "email ou senha inválida"
        })
      }
    }else {
      res.status(400).json({
        message: "email ou senha inválida"
      })
  }
  }else {
    res.status(400).json({
      message: "preencha todos os campos"
    })
  }
 } catch (error) {
  
 }
}

export default {
  getAll,
  createPerson,
  login,
  deletePerson,
  updatePerson,
}