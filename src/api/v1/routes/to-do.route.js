import express from 'express';
import { validator } from '../middlewares/validator.js';
import {
  createToDo,
  getAllToDo,
  getToDo,
  deleteToDo,
  updateToDo,
} from '../controllers/to-do.controllers.js';
import { create, update } from '../validators/to-do.validator.js';

const router = express.Router();

router.post('/todo/:boardId', create, validator, createToDo);

router.get('/:TodoID', getToDo);

router.get('/', getAllToDo);

router.patch('/:TodoID', update, validator, updateToDo);

router.delete('/:TodoID', deleteToDo);

export default router;
