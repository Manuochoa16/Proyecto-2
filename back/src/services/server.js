const express = require("express");
const rutas = require("../routes/router");
const morgan = require("morgan");
const cors = require ("cors");


const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(rutas);

module.exports=app;