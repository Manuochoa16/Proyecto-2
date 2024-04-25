const { crearmovie } = require('../services/createMovie');

async function newmovie(req, res) {
    const { title, year, director, duration, genre, rate, poster } = req.body;
    
    try {
        const newPeli = await crearmovie({ title, year, director, duration, genre, rate, poster });
        res.status(201).json({ message: 'Se cargó exitosamente', Movie: newPeli });
    } catch (error) {
        res.status(500).json({ message: 'No se cargó la película' });
    }
}

module.exports = { newmovie };