const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jwt = require('jsonwebtoken');

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
    password: String,
})



//  const User = mongoose.model("User", usersSchema);

// usersSchema.methods.verifyPassword = function(password){
//     return compareSync(password, this.password);
// };

usersSchema.methods.generateJwt = function(){
    return jwt.sign({ _id: this._id},
        process.env.JWT_SECRET);

}

// module.exports = Blog = mongoose.model("BLog", nodeSchema);
module.exports = User = mongoose.model("User", usersSchema);
// module.exports = {User};
