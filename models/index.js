const db = require('../db');
const fetch = require('node-fetch'); ////makes api calls from the back-end
const Movies = {};

Movies.create = (title, year, rating, release, runtime) => {
    return db.one('INSERT INTO movies(title, year, rating, release, runtime) VALUES ($1, $2, $3, $4, $5) returning *', [text, year, rating, release, runtime])
};



module.exports = Jokes;
