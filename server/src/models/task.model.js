import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String, 
    enum: ['pending', 'completed', 'in-progress'],
    default: 'pending'
  },
  img: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});


taskSchema.method('toJSON', function () {
  const { __v, _id, ...object } = this.toObject()
  object.uid = _id
  return object
})

export default mongoose.model('Task', taskSchema)