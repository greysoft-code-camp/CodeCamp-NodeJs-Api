import mongoose from 'mongoose';
import constants from '../../../config/constants.js';

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      match: [
        constants.MESSAGES.EMAIL_REGEX,
        constants.MESSAGES.EMAIL_REGEX_ERROR,
      ],
    },
    fullName: {
      type: String,
    },
    password: {
      type: String,
      min: [6, constants.MESSAGES.MIN_PASSWORD_ERROR],
      select: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('User', UserSchema);
