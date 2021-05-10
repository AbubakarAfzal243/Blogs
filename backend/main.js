const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

const { mongoose } = require('./db.js');
var router = require('./routes/route.js');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(3000, ()=> console.log("server run "));

app.use('/', router);


// var application = app()
// var cors = require('cors');
// var mongoose = require('mongoose');
// const { bodyParser } = require('json-server');

// application.use(cors())
// application.use(app.json())

// mongoose.connect('mongodb+srv://abubakar:mongo123456@mongodb.ldzrw.mongodb.net/nodeMongoDB',{
//     useUnifiedTopology: true,
//     useNewUrlParser: true 

// }, console.log("connection ok"));

// application.get('/', (req, res)=>{
//     res.send('hello Worl')
// });

