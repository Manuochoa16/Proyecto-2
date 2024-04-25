const { Router } = require("express");
const movieController = require("../controllers/movie.controller");
const { newmovie } = require("../controllers/createMovies");

const router = Router();

router.get("/movies", movieController);
router.post("/movies", newmovie);

module.exports = router;