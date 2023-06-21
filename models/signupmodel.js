const mongoose = require("mongoose");
const signupSchema = mongoose.Schema({
    
    "email": {
        type: String,
        require: true
    },
    "password": {
        type: String,
        require: true
    },

})
const Signp = mongoose.model("signup", signupSchema);
module.exports = Signp;