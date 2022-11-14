import mongoose from 'mongoose';
import bcrypt from 'bcrypt'

const personSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    require: true, 
    select: false,
  },
  createdAt: {
    type: Date,
    default: new Date()
  },
})

personSchema.pre('save', async function (next){
  this.password = await bcrypt.hash(this.password, 10)
  next()
})

export default mongoose.model('person', personSchema, 'person')