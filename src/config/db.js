import mongoose from 'mongoose';
import config from './config.js';
import constants from './constants.js';

export default () => {
  mongoose
    .connect(config.mongodb_uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log(constants.MESSAGES.MONGODB_CONNECTED))
    .catch((err) => console.log(err));
};
