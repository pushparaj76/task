const mongoose = require("mongoose");
const blogSchema = mongoose.Schema({
   
    "description": {
        type: String,
        require: true
    },
   
    
})
const Blog = mongoose.model("blog", blogSchema);
module.exports = Blog;