import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import db from './src/config/db.js';
import { errorHandler } from './src/api/v1/middlewares/error.js';
import _protected from './src/api/v1/middlewares/protected.js';
import swagger from './src/api/v1/helpers/swagger.js';
import user from './src/api/v1/routes/user.route.js';
import auth from './src/api/v1/routes/auth.route.js';
import config from './src/config/config.js';

const app = express();
const corsOptions = {
  origin: '*',
};

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(morgan('dev'));

// Routes
app.use('/api/auth', auth);
app.use('/api/user', _protected, user);
app.use('/api-docs', swagger);
app.use('*', (req, res) => {
  res.status(500).json({
    message: 'Sorry Route does not exists',
  });
});
app.use(errorHandler);

// database connection
db();

app.listen(config.port, () =>
  console.log(`Server running on port ${config.port}`)
);
