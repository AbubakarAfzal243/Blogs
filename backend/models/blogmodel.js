const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jwt = require('jsonwebtoken');

require('../config/config.json');


const nodeSchema = {
    title: {
        type: String,
        required: 'Title Field is Empty'
    },
    content: String,
    category: String,
    tags: Array,
    image: String,
    date: String,
    uname: String
}

const Blog = mongoose.model("Blog", nodeSchema);

module.exports = { Blog };