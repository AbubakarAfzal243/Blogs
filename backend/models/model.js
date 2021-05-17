const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

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

const usersSchema = {
    name: {
        type: String,
        required: 'Name Field is Empty'
    },
    email: {
        type: String,
        required: 'Email Field is Empty',
        unique: true
    },
    password: String,
}



const User = mongoose.model("User", usersSchema);

// usersSchema.methods.verifyPassword = function(password){
//     return compareSync(password, this.password);
// };

// usersSchema.methods.generateJwt = function(){
//     return jwt.sign({ _id: this.id});
// };

module.exports = { Blog };
// module.exports = { User };
module.exports = {

    Blog: Blog,
    User: User
};