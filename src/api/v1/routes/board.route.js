const router = require("express").Router();
const boardController = require('../controllers/board.controller');


router.post('/', (req,res) =>{
    boardController.create(req,res);
});

router.get('/', (req,res) =>{
    boardController.getAll(req,res);
});

router.put('/:boardId', (req,res) =>{
    boardController.update(req,res);
});

router.get('/:boardId', (req,res) =>{
    boardController.getById(req,res);
});

router.delete('/:boardId', (req,res) =>{
    boardController.delete(req,res);
});


module.exports = router