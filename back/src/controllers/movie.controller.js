const { funMovie } = require("../services/movie.service");

const movieController = async (req, res) => {
    try {
        const cartelera = await funMovie();
        res.status(200).json(cartelera);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las películas' });
    }
};

module.exports = movieController;