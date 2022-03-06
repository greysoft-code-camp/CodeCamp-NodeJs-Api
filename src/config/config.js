import "dotenv/config";

export default {
  port: process.env.PORT,
  jwt_secret: process.env.JWT_SECRET,
  jwt_timeout: process.env.JWT_TIMEOUT,
  mongodb_uri: process.env.MONGODB_URI,
};
