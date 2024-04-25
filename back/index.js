const app = require("./src/services/server");
const dbCon = require("./src/config/dbCon");

dbCon().then(() => {
    app.listen(3000, () => {
        console.log("Servidor escuchando en el puerto 3000");
    });
}).catch((err) => {
    console.log("Error al conectar con la base de datos:", err);
});