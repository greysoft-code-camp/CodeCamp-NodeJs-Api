import ToDoModel from '../models/To-do.model.js';

export default {
  create: async ({ boardId, body }) => {
    try {
      let todo = new ToDoModel({ boardId, body });
      let result = await todo.save();
      return result;
    } catch (error) {
      throw new ErrorResponse(error.message);
    }
  },
  delete: async (id) => {
    try {
      let result = await ToDoModel.deleteOne({ _id: id });
      return result;
    } catch (error) {
      throw new ErrorResponse(error.message);
    }
  },
  update: async (data) => {
    try {
      let result = await ToDoModel.updateOne(data);
      return result;
    } catch (error) {
      throw new ErrorResponse(error.message);
    }
  },
  getOne: async (data) => {
    try {
      let result = await ToDoModel.findOne(data);
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
