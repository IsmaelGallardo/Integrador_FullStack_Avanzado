const mongoose = require("mongoose");

const ventasSchema = new mongoose.Schema({
    producto: String,
    precio_un: Number,
});

module.exports = mongoose.models('ventas', ventasSchema);

