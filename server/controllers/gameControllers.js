const Game = require("../models/game");
const user = require("../models/User");

const gameControllers = {
  addGame: async (req, res) => {
    const newGame = new Game({ ...req.body });
    try {
      await newGame.save();
      return res.status(200).json({
        message: "Game added succesfully",
        res: newGame,
      });
    } catch (err) {
      return res.status(400).json({
        message: "failed request ",
        res: err.message,
      });
    }
  },
  getGame: async (req, res) => {
    try {
      let game = await Game.findById(req.params.id);
      res.json({ res: game });
    } catch (err) {
      return res.status(400).json({
        message: "cannot fetch the game",
        res: err.message,
      });
    }
  },
  getAllGame: async (req, res) => {
    try {
      let games = await Game.find();
      res.json({ success:true, res: games });
    } catch (err) {
      return res.status(400).json({
        message: "cannot fetch the games",
        res: err.message,
      });
    }
  },
  getGameByGenre: async (req, res) => {
    try {
      let game = await Game.find({ "genres.name" : req.params.genre});
      res.json({ res: game });
    } catch (err) {
      return res.status(400).json({
        message: "cannot fetch user",
        res: err.message,
      });
    }
  }, 
  getGamesByName: async (req, res) => {
    console.log(req.params.name)
    try {
      let game = await Game.find({ slug: {$regex : "^" + req.params.name}});
      res.json({ res: game });
    } catch (err) {
      return res.status(400).json({
        message: "cannot fetch user",
        res: err.message,
      });
    }
  }, 
  updateGame: async (req, res) => {
      
      const {body} = req.body
      

      const {screenshot} = body

      if(screenshot){
        Game.findOneAndUpdate(
        { _id: req.params.id },
        { $push:{screenshot:{url:screenshot}}},
        { new: true }
        ).then((response) => res.json({ success: true, respuesta: response }))
        .catch((error) =>
          res.json({ success: false, response: error.message })
        );
      }else{
        Game.findOneAndUpdate(
          { _id: req.params.id },
          { ...body },
          { new: true }
        )
          .then((response) => res.json({ success: true, respuesta: response }))
          .catch((error) =>
            res.json({ success: false, response: error.message })
          );
      }
  },
  deleteGame: async (req, res) => {
    try {
      let game = await Game.findOneAndDelete({ _id: req.params.id });
      res.json({ res: game });
    } catch (err) {
      return res.status(400).json({
        message: "cannot fetch user",
        res: err.message,
      });
    }
  },
  addComment:async (req, res) => {
    
    const id = req.params.id
    try{
      const addComment = await Game.findOneAndUpdate(
        {_id:id},
        {
          $push:{comments:{ 
            comment : req.body.comment, 
            idUser : req.user._id,
            imageUser : req.user.image,
            nameUser : req.user.userName,
          }
        }            
        }, 
        {new:true}
      )
      if(addComment){
        res.json({success:true, response: addComment, error:false })
      }else{
        res.json({success:false, response: [{message:'error'}], error:true })
      }
    }catch(err){
      console.log(err)}
  },
  deleteComment:async (req, res) => {
    const idComment = req.body.idComment
    const id = req.params.id
    console.log(idComment);
    try{
      const game = await Game.findOneAndUpdate(
        {_id : id},
        {
          $pull: {
            comments:{
              _id: idComment
             }
          }
        },{new:true}
        )
      if(game){
        res.json({success:true, response:game, error:false })
      }else{
        res.json({success:false, response:[{message:'error'}], error:true })
      }
    }catch(err){
      console.log(err)}
  },
  updateComment:async (req, res) => {
    const idComment = req.body.idComment
    const update = req.body.update
    try{
      const game = await Game.findOneAndUpdate(

        {'comments._id' : idComment},
        { $set: { "comments.$.comment": update} },
        {new:true}
        )

       if(game){
        res.json({success:true, response:game, error:false })
       }else{
        res.json({success:false, response:[{message:'error'}], error:true })
      }
    }catch(err){
      console.log(err)}

  },

};

module.exports = gameControllers;
