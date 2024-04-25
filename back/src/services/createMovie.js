const Movie = require('../models/Movie');

async function crearmovie(data) {
    try {
        const newMovie = await Movie.create(data);
        return newMovie;
    } catch (error) {
        throw new Error('No se pudo subir la película');
    }
}

module.exports = { crearmovie };