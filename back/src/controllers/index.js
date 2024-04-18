const movieService = require("../services/movie.service");

const testController = async (req, res) => {
    try {
        const movies = await movieService.getMovies();
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    testController,
};
