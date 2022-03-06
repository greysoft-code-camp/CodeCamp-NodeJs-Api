import mongoose from 'mongoose';
import constants from '../../../config/constants.js';
import config from '../../../config/config.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
      match: [
        constants.MESSAGES.EMAIL_REGEX,
        constants.MESSAGES.EMAIL_REGEX_ERROR,
      ],
    },
    fullName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
      min: [6, constants.MESSAGES.MIN_PASSWORD_ERROR],
    },
  },
  {
    timestamps: true,
  }
);
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

UserSchema.methods.comparePasswords = async function (password) {
  return await bcrypt.compare(password, this.password);
};

UserSchema.methods.getSignedToken = function () {
  return jwt.sign({ id: this._id }, config.jwt_secret, {
    expiresIn: config.jwt_timeout,
  });
};

export default mongoose.model('User', UserSchema);
