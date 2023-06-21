const Blog = require('../models/blogmodel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const blogController = async (req, res) => {
    ///console.log(req.body);
    let userBlog = new Blog({description: req.body.blog_description});
    
    let blogs = await userBlog.save();
    if (blogs) {
        res.json({ message: "Blog add successfully", success: true });
    }
    else {
        res.json({ message: "Please check the error", success: false });
    }
}


const manageController = async (req, res) => {

    let blogData = await Blog.find({});
    if (blogData) {
        res.json({ blogsData: blogData, success: true });
    }
    else {
        res.json({ message: "Data not found!", success: false });
    }
}


module.exports = { blogController, manageController}