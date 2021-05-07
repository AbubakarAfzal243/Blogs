const mongoose = require('mongoose');

const nodeSchema = {
    title: String,
    content : String,
    tags : String,
    image : String,
}

const Note = mongoose.model("Note", nodeSchema);

module.exports = Note;