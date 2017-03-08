DROP TABLE IF EXISTS movies;

CREATE DATABASE my_movies;

c\ my_movies;

CREATE TABLE movies(
    id SERIAL PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    year VARCHAR(50) NOT NULL,
    type VARCHAR(50) NOT NULL,
    poster VARCHAR(50) NOT NULL
)


INSERT INTO movies (title, year, type, poster) VALUES
(

)
