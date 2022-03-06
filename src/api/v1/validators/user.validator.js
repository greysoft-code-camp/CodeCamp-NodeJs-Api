import { body } from 'express-validator';
import constants from '../../../config/constants';

export const userRegistrationSchema = [
  body(constants.FIELD.EMAIL).isEmail(),
  body(constants.FIELD.PASSWORD).length({ min: 6 }),
  body(constants.FIELD.FULLNAME).notEmpty({ checkfalsey: true }),
];

export const userLoginSchema = [
  body(constants.FIELD.EMAIL).isEmail(),
  body(constants.FIELD.PASSWORD).length({ min: 6 }),
];
