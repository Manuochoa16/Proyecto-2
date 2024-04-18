const { cargarPeliculas } = require('./peliculas');
const { controlarScroll } = require('./scroll');

document.addEventListener('DOMContentLoaded', function() {
  cargarPeliculas();
  controlarScroll();
});