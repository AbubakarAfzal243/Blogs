var app = require('express')
var application = app()
var cors = require('cors');
var mongoose = require('mongoose');
const { bodyParser } = require('json-server');

application.use(cors())
application.use(app.json())

mongoose.connect('mongodb+srv://abubakar:mongo123456@mongodb.ldzrw.mongodb.net/nodeMongoDB',{
    useUnifiedTopology: true,
    useNewUrlParser: true 

}, console.log("connection ok"));

application.get('/', (req, res)=>{
    res.send('hello Worl')
});

application.listen(1100);