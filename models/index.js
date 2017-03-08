const pgp = require('pg-promise')();

const db = pgp(process.env.DATABASE_URL || 'postgres://student_22@localhost:5432/my_movies');

// const fetch = require('node-fetch'); ////makes api calls from the back-end

const Movies = {};

Movies.create = (title, year, rating, release, runtime, poster) => {
    return db.one('INSERT INTO movies(title, year, rating, release, runtime, poster) VALUES ($1, $2, $3, $4, $5) returning *', [title, year, rating, release, runtime, poster])
};



module.exports = Movies;
