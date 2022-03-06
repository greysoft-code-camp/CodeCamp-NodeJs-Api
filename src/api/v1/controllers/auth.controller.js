import { SuccessResponse } from '../helpers/response.js';
import service from '../services/auth.services.js';

export const login = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await service.login(data);
    return SuccessResponse.success(res, result);
  } catch (error) {
    next(error);
  }
};

export const registration = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await service.registration(data);
    return SuccessResponse.success(res, result);
  } catch (error) {
    next(error);
  }
};
