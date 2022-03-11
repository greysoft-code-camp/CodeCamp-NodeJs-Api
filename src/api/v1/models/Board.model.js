import mongoose from 'mongoose';
import constants from '../../../config/constants.js';

const BoardModel = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'The board title is required'],
    },

    user: {
      type: mongoose.Types.ObjectId,
    },
    list: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model('Board', BoardModel);
