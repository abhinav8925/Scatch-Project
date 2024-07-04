const mongoose = require('mongoose');
const ownermodel = new mongoose.Schema({
    fullname: {
        type: String,
        minlength: 3,
        trim: true
    },
    email: String,
    password: String,
    products: {
        type: Array,
        default: []
    },
    
    picture: String,
    gstin: String
})

module.exports = mongoose.Schema("owner", ownermodel);

