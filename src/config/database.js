import dotenv from 'dotenv'
import mongoose from 'mongoose';

dotenv.config()
const uri = process.env.MONGODB_URI


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

export default connect
