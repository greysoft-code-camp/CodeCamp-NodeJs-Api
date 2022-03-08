import express from 'express';
import {
  createToDo,
  getAllToDo,
  getToDo,
  deleteToDo,
  updateToDo,
} from '../controllers/to-do.controllers.js';

const router = express.Router();

router.post('/newtodo', createToDo);

router.get('/newtodo', getToDo);
router.get('/newtodo', getAllToDo);
router.patch('/newtodo', updateToDo);
router.delete('/newtodo');

export default router;
