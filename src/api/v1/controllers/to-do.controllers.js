import service from '../services/to-do.service.js';
import { SuccessResponse } from '../helpers/response.js';

export const createToDo = async (req, res, next) => {
  try {
    let data = {};
    data.boardId = req.params.boardId;
    data.body = req.body.body;
    data.list = req.body.list;
    let result = await service.create(data);
    return SuccessResponse.success(res, result);
  } catch (error) {
    next(error);
  }
};

export const getToDo = async (req, res, next) => {
  try {
    let id = { _id: req.params.TodoID };
    let result = await service.getOne(id);
    return SuccessResponse.success(res, result);
  } catch (error) {
    next(error);
  }
};

export const updateToDo = async (req, res, next) => {
  try {
    let id = { _id: req.params.TodoID };
    let data = req.body;
    let result = await service.update(id, data);
    return SuccessResponse.success(res, result);
  } catch (error) {
    next(error);
  }
};

export const deleteToDo = async (req, res, next) => {
  try {
    let id = { _id: req.params.TodoID };
    let result = await service.delete(id);
    return SuccessResponse.success(res, result);
  } catch (error) {
    next(error);
  }
};

export const getAllToDo = async (req, res, next) => {
  try {
    let result = await service.getAll();
    return SuccessResponse.success(res, result);
  } catch (error) {
    next(error);
  }
};
