class Movie {
    constructor(title, year, director, duration, genre, rate, poster) {
        if (!title || !poster || !director) {
            throw new Error('Faltan datos.');
        }
        this.title = title;
        this.year = year;
        this.director = director;
        this.duration = duration;
        this.genre = genre;
        this.rate = rate;
        this.poster = poster;
    }
}

const moviesData = [
    new Movie(
        "Guardians of the Galaxy Vol. 2",
        2017,
        "James Gunn",
        "2h 16min",
        ["Action", "Adventure", "Comedy"],
        7.7,
        "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"
    ),
    new Movie(
        "Star Wars: Episode IV - A New Hope",
        1977,
        "George Lucas",
        "2h 1min",
        ["Action", "Adventure", "Fantasy", "Sci-Fi"],
        8.7,
        "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg"
    ),
    new Movie(
        "The Lord of the Rings: The Fellowship of the Ring",
        2001,
        "Peter Jackson",
        "2h 58min",
        ["Action", "Adventure", "Drama", "Fantasy"],
        8.8,
        "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
    ),
];


const getMovies = () => {
    return moviesData;
};

module.exports = {
    getMovies,
    Movie,
};