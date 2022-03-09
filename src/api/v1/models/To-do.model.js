import mongoose from 'mongoose';
import constants from '../../../config/constants.js';

const ToDoModel = new mongoose.Schema(
  {
    boardId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    assignedTo: {
      type: mongoose.Types.ObjectId,
      required: false,
    },
    body: {
      type: String,
      required: true,
    },

    list: {
      type: String,
      default: constants.ENUM.TODO[0],
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model('ToDo', ToDoModel);
