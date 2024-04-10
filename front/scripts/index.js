const filmsSection = document.getElementById('contMovies');

$.get('https://students-api.up.railway.app/movies', function(data) {
  if (data && Array.isArray(data)) {
    data.forEach(function(movie) {
      const movieElement = document.createElement('article');

      movieElement.classList.add('pelicula');

      movieElement.addEventListener('mouseover', function() {
        movieElement.classList.add('flipped');
      });

      movieElement.addEventListener('mouseout', function() {
        movieElement.classList.remove('flipped');
      });

      movieElement.innerHTML = `
        <div class="front-face">
          <img src="${movie.poster}" alt="${movie.title}">
        </div>
        <div class="back-face">
          <h3>${movie.title} - (${movie.year})</h3> 
          <p><strong> Director: </strong> ${movie.director}</p>
          <p><strong> Duracion: </strong> ${movie.duration}</p>
          <p><strong> Género: </strong> ${movie.genre.join(', ')}</p>
          <p><strong> Puntaje: </strong> ${movie.rate}</p>
        </div>
      `;

      filmsSection.appendChild(movieElement);
    });
  } else {
    alert('Error al obtener las películas');
  }
});

window.addEventListener('scroll', function() {
  var header = document.getElementById('barNav');
  var scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    header.classList.add('header-dark');
    header.classList.remove('header-transparent');
  } else {
    header.classList.remove('header-dark');
    header.classList.add('header-transparent');
  }
});
