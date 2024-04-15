const { cargarPeliculas } = require('./peliculas');
const { controlarScroll } = require('./scroll');
const axios = require("axios");

document.addEventListener('DOMContentLoaded', function() {
  cargarPeliculas();
  controlarScroll();
});
