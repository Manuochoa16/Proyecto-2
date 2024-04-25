const axios = require('axios');

const clear = () => {
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input)=>{
        input.value = ""
    });
};

async function submit(event) {
    try {
        event.preventDefault();
        const inputs = document.querySelectorAll('input');

        let formComplete = true;
        inputs.forEach(input => {
            if (!input.value) {
                formComplete = false;
            }
        });

        if (formComplete) {
            const title = document.getElementById('titulo').value;
            const year = document.getElementById('año').value;
            const director = document.getElementById('director').value;
            const duration = document.getElementById('duracion').value;
            const genre = document.getElementById('genero').value;
            const rate = document.getElementById('puntaje').value;
            const poster = document.getElementById('enlace').value;

            const respuesta = await axios.post('http://localhost:3000/movies', {
                title,
                year,
                director,
                duration,
                genre,
                rate,
                poster
            });

            console.log('Se ha cargado con éxito', respuesta.data);
            alert('La película se ha cargado con éxito');
        } else {
            console.log('Formulario Incompleto');
            alert('Formulario, Incompleto');
        }
    } catch (error) {
        console.error('No se cargó correctamente:', error);
        alert('Error al cargar la pelicula, intentelo nuevamente.');
    }
}

module.exports = {
    clear,
    submit,
};
