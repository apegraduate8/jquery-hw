DROP TABLE IF EXISTS movies;
DROP DATABASE IF EXISTS my_movies;
CREATE DATABASE my_movies;

\c my_movies;

CREATE TABLE movies(
    id SERIAL PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    year VARCHAR(50) NOT NULL,
    rating VARCHAR(50) NOT NULL,
    release VARCHAR(50) NOT NULL,
    runtime VARCHAR(50) NOT NULL,
    poster VARCHAR(50) NOT NULL,

);


