import express from 'express';
import {
  userLoginSchema,
  userRegistrationSchema,
} from '../validators/user.validator.js';
import { validator } from '../middlewares/validator.js';
import { login, registration } from '../controllers/auth.controller.js';

const router = express.Router();

/**
 * @swagger
 *
 * definitions:
 *  Error:
 *    type: object
 *    required:
 *      - code
 *      - message
 *    properties:
 *      code:
 *        type: string
 *      message:
 *        type: string
 *  NewUser:
 *    type: object
 *    required:
 *      - fullName
 *      - email
 *      - password
 *    properties:
 *      fullName:
 *        type: string
 *      email:
 *        type: string
 *        format: email
 *      password:
 *        type: string
 *        format: password
 *  User:
 *    type: object
 *    required: true
 *      - fullname
 *      - email
 *    properties:
 *      name:
 *        type: string
 *      email:
 *        type: string
 *        format: email
 *
 *  ArrayOfUsers:
 *      type: array
 *      items:
 *        $ref: '#/definitions/User'
 *
 */

/**
 * @swagger
 *
 * /api/auth/login:
 *   post:
 *     tags: [auth]
 *     description: Login to the application
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: data
 *         description: login information
 *         required: true
 *         in: body
 *         schema:
 *           type: object
 *           properties:
 *             email:
 *               type: string
 *             password:
 *               type: string
 *     responses:
 *       200:
 *         description: OK
 *         schema:
 *           $ref: '#/definitions/User'
 */

router.post('/login', userLoginSchema, validator, login);

/**
 * @swagger
 *  /api/auth/signup:
 *   post:
 *     tags: [auth]
 *     description: Creates a user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: data
 *         description: User object
 *         in:  body
 *         required: true
 *         type: string
 *         schema:
 *           $ref: '#/definitions/NewUser'
 *     responses:
 *       200:
 *         description: OK
 *         schema:
 *           $ref: '#/definitions/User'
 *       400:
 *         $ref: '#/definitions/Error'
 */
router.post('/registration', userRegistrationSchema, validator, registration);

export default router;
