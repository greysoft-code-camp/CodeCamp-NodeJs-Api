import mongoose from 'mongoose';

const TaskModel = new mongoose.Schema(
  {
    createdBy: {
      type: mongoose.Types.ObjectId,
    },
    assignedTo: {
      type: mongoose.Types.ObjectId,
    },
    body: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model('Task', TaskModel);
