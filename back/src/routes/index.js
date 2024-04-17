const { Router } = require("express");
const { testController } = require("../controllers");

const router = Router()


router.get("/movies", testController)

module.exports = router