import service from '../services/to-do.service.js';
import { SuccessResponse } from '../helpers/response.js';

export const createToDo = async (req, res, next) => {
  try {
    let data = req.body;
    let result = await service.create(data);
    return SuccessResponse.success(res, result);
  } catch (error) {
    next(error);
  }
};

export const getToDo = async (req, res, next) => {
  try {
    let data = req.body;
    let result = await service.getOne(data);
    return SuccessResponse.success(res, result);
  } catch (error) {
    next(error);
  }
};

export const updateToDo = async (req, res, next) => {
  try {
    let data = req.body;
    let result = await service.update(data);
    return SuccessResponse.success(res, result);
  } catch (error) {
    next(error);
  }
};

export const deleteToDo = async (req, res, next) => {
  try {
    let data = req.body;
    let result = await service.delete(data);
    return SuccessResponse.success(res, result);
  } catch (error) {
    next(error);
  }
};

export const getAllToDo = async (req, res, next) => {
  try {
    let data = req.body;
    let result = await service.getAll(data);
    return SuccessResponse.success(res, result);
  } catch (error) {
    next(error);
  }
};
