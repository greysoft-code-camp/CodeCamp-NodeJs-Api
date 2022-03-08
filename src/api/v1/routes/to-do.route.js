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

router.post('/newtodo/:boardId', create, validator, createToDo);

router.get('/getTodo/:TodoID', getToDo);

router.get('/getAllTodo', getAllToDo);

router.patch('/updatetodo/:TodoID', update, validator, updateToDo);

router.delete('/removetodo/:TodoID', deleteToDo);

export default router;
