import ToDoModel from '../models/To-do.model.js';

export default {
  create: async (data) => {
    try {
      let todo = new ToDoModel(data);
      let result = await todo.save();
      return result;
    } catch (error) {
      throw new ErrorResponse(error.message);
    }
  },
  delete: async (id) => {
    try {
      let result = await ToDoModel.deleteOne(id, { new: true });
      return result;
    } catch (error) {
      throw new ErrorResponse(error.message);
    }
  },
  update: async (id, data) => {
    try {
      let result = await ToDoModel.findByIdAndUpdate(id, data, { new: true });
      return result;
    } catch (error) {
      throw new ErrorResponse(error.message);
    }
  },
  getOne: async (id) => {
    try {
      let result = await ToDoModel.findOne(id);
      return result;
    } catch (error) {
      throw new ErrorResponse(error.message);
    }
  },
  getAll: async () => {
    try {
      let result = await ToDoModel.find();
      return result;
    } catch (error) {
      throw new ErrorResponse(error.message);
    }
  },
};
