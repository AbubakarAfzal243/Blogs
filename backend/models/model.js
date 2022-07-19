const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jwt = require('jsonwebtoken');
// var bcrypt = require('bcrypt');
const { functions } = require('lodash');

require('../config/config.json');


var usersSchema = new Schema ({
    name: {
        type: String,
        required: 'Name Field is Empty'
    },
    email: {
        type: String,
        required: 'Email Field is Empty',
        unique: true
    },
    password: {
        type: String,
        required: 'Passwrod Field is Empty',
    },
})

usersSchema.methods.verifyPassword = function(password){
    return compareSync(password, this.password);
};

// module.exports = Blog = mongoose.model("BLog", nodeSchema);
module.exports = User = mongoose.model("User", usersSchema);
// module.exports = {User};
