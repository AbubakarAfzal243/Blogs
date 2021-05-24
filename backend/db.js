const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://abubakar:mongo123456@mongodb.ldzrw.mongodb.net/nodeMongoDB', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false

}, (err) => {
    if (!err)
        console.log("connection okay");
    else
        console.log("error : " + JSON.stringify(err, undefined, 2));
}
);

module.exports = mongoose;
