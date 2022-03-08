import { ErrorResponse } from '../helpers/response.js';
import User from '../models/User.model.js';
import constants from '../../../config/constants.js';

export default {
  registration: async ({ email, fullName, password }) => {
    try {
      let user = new User({ email, fullName, password });
      let result = await user.save();
      return result;
    } catch (error) {
      throw new ErrorResponse(error.message);
    }
  },

  login: async ({ email, password }) => {
    try {
      let user = await User.findOne({ email }).select('+password');
      if (!user) {
        throw new ErrorResponse(
          constants.MESSAGES.INVALID_CREDENTIALS,
          constants.RESPONSE_STATUS_CODES.NOT_FOUND
        );
      }
      let isMatch = await user.comparePasswords(password);
      if (!isMatch) {
        throw new ErrorResponse(
          constants.MESSAGES.INVALID_CREDENTIALS,
          constants.RESPONSE_STATUS_CODES.NOT_FOUND
        );
      }
      let token = user.getSignedToken();
      let result = { user, token };

      return result;
    } catch (error) {
      throw new ErrorResponse(error.message);
    }
  },
};
