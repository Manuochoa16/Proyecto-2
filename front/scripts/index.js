const renderCard = require('./input-movies');
const axios = require("axios");
const { clear, submit } = require("./peliculas");
const { controlarScroll } = require("./scroll");

controlarScroll()

const funcion = async ()  => {
    try {
        const { data } = await axios.get("http://localhost:3000/movies");
        renderCard(data);
        console.log(data);
    } catch (error) {
        console.log(error);
    }    
};
funcion();

document.addEventListener('DOMContentLoaded', function() {
    const botonclear = document.getElementById('botonclear');
    botonclear.addEventListener('click', clear);

    const botonsubmit = document.getElementById('formulario');
    botonsubmit.addEventListener('submit', submit);
});