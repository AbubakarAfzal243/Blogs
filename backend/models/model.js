const mongoose = require('mongoose');

const nodeSchema = {
    title: String,
    content : String,
    tags : Array,
    image : String,
}

const Blog = mongoose.model("Blog", nodeSchema);

module.exports = { Blog };