import express from 'express';
import { validator } from '../middlewares/validator.js';
import {
  createToDo,
  getAllToDo,
  getToDo,
  deleteToDo,
  updateToDo,
} from '../controllers/to-do.controllers.js';

const router = express.Router();

router.post('/newtodo', validator, createToDo);

router.get('/getTodo', validator, getToDo);
router.get('/getAllTodo', validator, getAllToDo);
router.patch('/updatetodo', validator, updateToDo);
router.delete('/removetodo', validator, deleteToDo);

export default router;
