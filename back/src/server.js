const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// Rutas
app.use(router);

module.exports = app;
