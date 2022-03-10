import { body, check } from 'express-validator';
import constants from '../../../config/constants.js';

export const create = [
  body(constants.FIELD.TODO_BODY).notEmpty({ checkfalsey: true }),
  body(constants.FIELD.TODO_LIST).notEmpty({ checkfalsey: true }),
];

export const update = [
  body(constants.FIELD.TODO_BODY).notEmpty({ checkfalsey: true }),
  check(constants.FIELD.TODO_LIST).isIn(constants.ENUM.TODO).optional(),
];
