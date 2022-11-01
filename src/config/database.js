const mongoose = require('mongoose');
const uri = process.env.MONGODB_URL

const connect = async () => {
   try {
     await mongoose.connect(uri, {
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