
const myMovies = require('../models');

const controller =  {};

controller.index = (req, res) => {
  const cookie = req.cookies;
      res.clearCookie("The Matrix")
      res.render('index', {movies: cookie});
}



module.exports = controller;
