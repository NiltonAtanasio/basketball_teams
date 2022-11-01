const mongoose = require('mongoose');
const MONGODB_URL = "mongodb+srv://atanazzio:m4st3rk3y@cluster0.q2frexl.mongodb.net/?retryWrites=true&w=majority";

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