const mongoose = require("mongoose");

const dbCon = async () => {
    await mongoose.connect(
        "mongodb+srv://ManuOchoa:Jf9zy0QyTCqTea1D@prueba.vz0wlgw.mongodb.net/"
    );
};

module.exports = dbCon;