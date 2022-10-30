const mongoose = require('mongoose');

const MONGODB_URL = 'mongodb://localhost:27017/tera'

const connect = async () => {
  try {
    await mongoose.connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    
    console.log("DataBase connection sucessful")
  } catch (error) {
    console.error('Erro', error.message)
  }
}

module.exports = {
  connect
}