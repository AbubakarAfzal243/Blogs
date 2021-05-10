const mongoose = require('mongoose');

const nodeSchema = {
    title: String,
    content : String,
    tags : String,
    image : String,
}

const Blog = mongoose.model("Blog", nodeSchema);

module.exports = { Blog };