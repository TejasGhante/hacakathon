const mongoose = require("mongoose");
 
var categorySchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        maxlength: 32,
        require: true
    }
}{timestamps:true});