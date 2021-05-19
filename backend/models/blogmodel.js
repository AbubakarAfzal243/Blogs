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
    tags: Array,
    image: String,
}

const Blog = mongoose.model("Blog", nodeSchema);

module.exports = { Blog };