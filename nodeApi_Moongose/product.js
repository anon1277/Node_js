// load Modules
const mongoose = require('mongoose');

const ProductShema = new  mongoose.Schema({
    name : String ,
    country : String,
    model : String ,
    price : Number ,
});

 module.exports = mongoose.model('shops1' ,ProductShema);


