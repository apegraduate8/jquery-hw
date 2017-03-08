const myMovies = require('../../models');

const controller =  {};

controller.create = (req, res) => {
     const title = req.body.Title;
     const year = req.body.Year;
     const rating = req.body.Rated;
     const release = req.body.Released;
     const runtime = req.body.Runtime;
myMovies
      .create(title, year, rating, release,runtime)
      .then(data => {})

}



module.exports = controller;
