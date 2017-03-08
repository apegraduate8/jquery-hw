const myMovies = require('../../models');

const controller =  {};

controller.create = (req, res) => {
     const title = req.body.Title;
     const year = req.body.Year;
     const rating = req.body.Rated;
     const release = req.body.Released;
     const runtime = req.body.Runtime;
     const poster = req.body.Poster;
myMovies
      .create(title, year, rating, release,runtime, poster)
      .then(data => res.json(data))
      .catch(err => console.log(err));

}



module.exports = controller;
