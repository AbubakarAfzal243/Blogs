const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
require('./config/passportConfig');


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

app.use((err, req, res, next)=> {
    if(err.name === 'ValidationError'){
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
            res.status(422).send(valErrors)
       
    }
});

app.use(passport.initialize());
// app.use(passport.session());

app.listen(3000, ()=> console.log("server run "));

app.use('/', router);




