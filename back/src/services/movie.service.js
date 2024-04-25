const Movie = require("../models/Movie");

const funMovie = async () => {
    const searchII = await Movie.find();
    return searchII;
};

module.exports = { funMovie };