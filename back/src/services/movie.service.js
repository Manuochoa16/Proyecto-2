// movie.service.js
const Movie = require("../models/Movie"); // Importamos el modelo Movie

const getMovies = async () => {
    try {
        // Utilizamos el método find() del modelo Movie para obtener todas las películas de la base de datos
        const movies = await Movie.find();
        return movies;
    } catch (error) {
        throw new Error("Error al obtener las películas de la base de datos: " + error.message);
    }
};

module.exports = {
    getMovies
};
