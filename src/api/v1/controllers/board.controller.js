import Board from "../models/Board.model";

   export const create = async(req,res) =>{
        //this.clear();
        let boardData = req.body;
        let newBoard = new Board(boardData);
        newBoard.save().then(board=>{
            res.status(201).send({msg:"board created successfully",data:board})
        }).catch(error=>{
            console.log(error)
            res.status(201).send({msg:"Unable to save board",data:error})
        })
        
    }
    export const update = async (req,res)=>{
        Board.findOneAndUpdate({_id: req.params.boardId},req.body,{new: true}).then(board => {
            if(!board) {
                return res.status(404).send({
                    message: "board not found with id " + req.params.boardId
                });
            }
            else{
                    res.status(200).send({msg:"Board Updated Successfully",data:board});
            }
        }).catch(err => {
            console.log(err)
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "board not found with id " + req.params.boardId
                });                
            }
            return res.status(500).send({
                message: "Error updating board with id " + req.params.boardId
            });
        });
    },

   
   
    export const getById = async(req,res)=>{
        Board.findOne({_id:req.params.boardId}).then(board=>{
            if(board)
               res.status(200).send({msg: "Board Fetched Successfully", data:board});
            else
               res.status(404).send({msg: "Board Not Found", data:board});

        }).catch(error=>{
            res.status(400).send({msg: "Unable to fetch boards", data:error});
        });
    }


    export const getAll = async(req,res)=>{
        Board.find().then(boards=>{
            res.status(200).send({msg: "Boards Fetched Successfully", data:boards});
        }).catch(error=>{
            res.status(400).send({msg: "Unable to fetch boards", data:error});
        });
    }

    export const del = async(req,res)=>{
        Board.findOneAndDelete({_id:req.params.boardId}).then(boards=>{
            res.status(200).send({msg: "Boards Fetched Successfully", data:boards});
        }).catch(error=>{
            res.status(400).send({msg: "Unable to fetch boards", data:error});
        });
    }

   


