import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import db from './src/config/db.js';
import { errorHandler } from './src/api/v1/middlewares/error.js';
import _protected from './src/api/v1/middlewares/protected.js';
import Swagger from './src/api/v1/helpers/swagger.js';
import auth from './src/api/v1/routes/auth.route.js';
import todo from './src/api/v1/routes/to-do.route.js';
import board from './src/api/v1/routes/board.route.js';
import config from './src/config/config.js';
import constants from './src/config/constants.js';

const app = express();
const corsOptions = {
  origin: '*',
};
const swagger = Swagger();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(morgan('dev'));

// Routes
app.use('/api/auth', auth);
app.use('/api/board', board);
app.use('/api/todo', todo);
app.use('/api-docs', swagger);
app.use('*', (req, res) => {
  res.status(500).json({
    message: constants.MESSAGES.ROUTE_DOES_NOT_EXIST,
  });
});
app.use(errorHandler);

// database connection
db();

app.listen(config.port, () =>
  console.log(`${constants.MESSAGES.SERVER_STARTED} ${config.port}`)
);
