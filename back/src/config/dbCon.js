const mongoose = require("mongoose");

const dbCon = async () => {
    try {
        await mongoose.connect("mongodb+srv://nicomanu2316:3kogyaFWqMI3Irzf@movies.kt4yfkh.mongodb.net/movies_new?retryWrites=true&w=majority&appName=Movies");
        console.log("Conexión exitosa a la base de datos");
    } catch (error) {
        console.error("Error al conectar a la base de datos:", error);
    }
};

module.exports = dbCon;
