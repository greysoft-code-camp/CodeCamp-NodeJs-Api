import express from 'express';
const router = express.Router();
import * as boardController from '../controllers/board.controller.js';

router.post('/', (req, res) => {
  boardController.create(req, res);
});

router.get('/', (req, res) => {
  boardController.getAll(req, res);
});

router.put('/:boardId', (req, res) => {
  boardController.update(req, res);
});

router.get('/:boardId', (req, res) => {
  boardController.getById(req, res);
});

router.delete('/:boardId', (req, res) => {
  boardController.del(req, res);
});

export default router;
