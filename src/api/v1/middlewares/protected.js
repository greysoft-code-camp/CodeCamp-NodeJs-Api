import jwt from 'jsonwebtoken';
import User from '../models/User.model.js';
import { ErrorResponse } from '../helpers/response.js';
import config from '../../../config/config.js';

export default async (req, res, next) => {
  let token =
    req.headers.authorization &&
    req.headers.authorization.split(' ')[0] === 'Bearer'
      ? req.headers.authorization.split(' ')[1]
      : null;

  if (!token) {
    return next(new ErrorResponse('Not Authorized', 401));
  }

  try {
    const decoded = jwt.verify(token, config.jwt_secret);
    const user = await User.findById(decoded.id);
    if (!user) {
      return next(new ErrorResponse('User not found', 404));
    }
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};
