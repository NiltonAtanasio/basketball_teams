import mongoose from 'mongoose';

const personSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  createdAt: {
    type: Date,
    default: new Date()
  },
  salt: {
    type: String
  }
})

export default mongoose.model('person', personSchema, 'person')