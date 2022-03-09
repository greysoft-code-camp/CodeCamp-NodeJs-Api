import Board from '../models/Board.model.js';

export const create = async (req, res) => {
  let newBoard = new Board({ title: req.body.title, user: req.user._id });
  newBoard
    .save()
    .then((board) => {
      res.status(201).send({ msg: 'board created successfully', data: board });
    })
    .catch((error) => {
      res.status(201).send({ msg: 'Unable to save board', data: error });
    });
};

export const addList = async (req, res) => {
  Board.findById(req.params.boardId)
    .then((board) => {
      let name = req.body.listName.trim().toLowerCase();
      if (board.list.includes(name)) {
        res.status(201).send({ msg: 'list already exist' });
      }
      board.list.push(name);
      board
        .save()
        .then((list) => {
          res
            .status(201)
            .send({ msg: 'list created successfully', data: list.list });
        })
        .catch((err) => {
          res.status(201).send({ msg: 'Unable to save board', data: error });
        });
    })
    .catch((error) => {
      res.status(201).send({ msg: 'Unable to save board', data: error });
    });
};

export const removeList = async (req, res) => {
  Board.findById(req.params.boardId)
    .then((board) => {
      let name = req.body.listName.trim().toLowerCase();
      let array = board.list;
      let arrayCopy = [...array].map((item) => item.toLowerCase());
      let index = arrayCopy.indexOf(name);
      if (index >= 0) {
        array = array.filter((item) => item.toLowerCase() !== name);
        board.list = array;
        board
          .save()
          .then((list) => {
            res
              .status(201)
              .send({ msg: 'board removed successfully', data: list.list });
          })
          .catch((err) => {
            res
              .status(201)
              .send({ msg: 'Unable to remove board', data: error });
          });
      } else {
        res.status(201).send({ msg: 'list not found.' });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(201).send({ msg: 'Unable to save board', data: error });
    });
};

export const update = async (req, res) => {
  Board.findOneAndUpdate({ _id: req.params.boardId }, req.body.title, {
    new: true,
  })
    .then((board) => {
      if (!board) {
        return res.status(404).send({
          message: 'board not found with id ' + req.params.boardId,
        });
      } else {
        res
          .status(200)
          .send({ msg: 'Board Updated Successfully', data: board });
      }
    })
    .catch((err) => {
      console.log(err);
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'board not found with id ' + req.params.boardId,
        });
      }
      return res.status(500).send({
        message: 'Error updating board with id ' + req.params.boardId,
      });
    });
};

export const getById = async (req, res) => {
  Board.findOne({ _id: req.params.boardId })
    .then((board) => {
      if (board)
        res
          .status(200)
          .send({ msg: 'Board Fetched Successfully', data: board });
      else res.status(404).send({ msg: 'Board Not Found', data: board });
    })
    .catch((error) => {
      res.status(400).send({ msg: 'Unable to fetch boards', data: error });
    });
};

export const getAll = async (req, res) => {
  Board.find({ user: req.user._id })
    .then((boards) => {
      res
        .status(200)
        .send({ msg: 'Boards Fetched Successfully', data: boards });
    })
    .catch((error) => {
      res.status(400).send({ msg: 'Unable to fetch boards', data: error });
    });
};

export const del = async (req, res) => {
  Board.findOneAndDelete({ _id: req.params.boardId })
    .then((boards) => {
      res
        .status(200)
        .send({ msg: 'Boards Deleted Successfully', data: boards });
    })
    .catch((error) => {
      res.status(400).send({ msg: 'Unable to fetch boards', data: error });
    });
};
