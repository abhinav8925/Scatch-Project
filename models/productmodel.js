const mongoose = require('mongooose');

const productModel = mongoose.Schema({
    image: String,
    name : String,
    price: Number,
    discount : {
        type: Number,
        default: 0
    },
    bgcolor: String,
    panelcolor: String,
    textcolor: String
})

module.exports = mongoose.Schema("products", productModel);

