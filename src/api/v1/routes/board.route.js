import express from 'express';
const router = express.Router();
import * as boardController from '../controllers/board.controller.js';
import { body } from 'express-validator';
import { validator } from '../middlewares/validator.js';

router.post('/', (req, res) => {
  boardController.create(req, res);
});

router.get('/', (req, res) => {
  boardController.getAll(req, res);
});

router.patch('/:boardId', (req, res) => {
  boardController.update(req, res);
});

router.get('/:boardId', (req, res) => {
  boardController.getById(req, res);
});

router.delete('/:boardId', (req, res) => {
  boardController.del(req, res);
});

router.post(
  '/:boardId/list',
  [body('listName').notEmpty({ checkfalsey: true })],
  validator,
  (req, res) => {
    boardController.addList(req, res);
  }
);

router.delete(
  '/:boardId/list',
  [body('listName').notEmpty({ checkfalsey: true })],
  validator,
  (req, res) => {
    boardController.removeList(req, res);
  }
);

export default router;
