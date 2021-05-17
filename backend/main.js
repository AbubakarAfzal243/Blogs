const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })



const { mongoose } = require('./db.js');
var router = require('./routes/route.js');
const passport = require('passport');
var session = require('express-session');



var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json({limit: '10mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200', credentials:true }));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true, parameterLimit: 50000}));


app.use(session({
    name: 'myname.sid',
    resave: false,
    saveUninitialized: false,
    secret: 'secret',
    cookie: {
        maxAge : 36000000,
        httpOnly : false,
        secure : false
    }
}));
require('./config/passportConfig');


app.use(passport.initialize());
app.use(passport.session());

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

