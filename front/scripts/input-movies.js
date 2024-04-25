const container = document.getElementById("contMovies");

const renderCard = (movies) => {
    const mapear =  movies.map((movie) => {
        const card = document.createElement('div');
        const pelicula = document.createElement('div');
        const imagen = document.createElement('img');
        const detalle = document.createElement('div');
        const h2 = document.createElement('h2');
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');
        const p4 = document.createElement('p');
        const p5 = document.createElement('p');

        pelicula.classList.add("pelicula");
        detalle.classList.add("detalle");

        imagen.src = movie.poster;
        h2.innerHTML = movie.title;
        p1.innerHTML = `Director: ${movie.director}`;
        p2.innerHTML = `Año: ${movie.year}`;
        p3.innerHTML = `Duración: ${movie.duration}`;
        p4.innerHTML = `Género: ${movie.genre}`;
        p5.innerHTML = `Calificación: ${movie.rate}`;

        detalle.appendChild(h2);
        detalle.appendChild(p1);
        detalle.appendChild(p2);
        detalle.appendChild(p3);
        detalle.appendChild(p4);
        detalle.appendChild(p5);

        pelicula.appendChild(imagen);
        pelicula.appendChild(detalle);

        card.appendChild(pelicula);

        return card;    
    });

    mapear.forEach(element => {
        container.appendChild(element);
    });
};

module.exports = renderCard;
