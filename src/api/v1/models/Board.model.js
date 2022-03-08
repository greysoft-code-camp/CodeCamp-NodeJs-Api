import mongoose from 'mongoose';

const BoardModel = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'The board title is required'],
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model('Board', BoardModel);
