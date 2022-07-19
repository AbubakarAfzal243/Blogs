const express = require("express");
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var multer = require('multer')
var upload = multer({ dest: 'uploads/' })
const passport = require('passport');
var LocalStorage = require('node-localstorage').LocalStorage,
    localStorage = new LocalStorage('./scratch');

require('../config/passportConfig');

var Blog = require('../models/blogmodel');
var User = require('../models/model');

router.get('/', (req, res) => {

    Blog.find((err, docs) => {
        if (!err) { res.send(docs); }
        else {
            console.log("Error in retriving Blogs :" + JSON.stringify(err, undefined, 2));
        }
    });
});


// get blog details
router.get('/details', (req, res) => {


    Blog.findById(req.query.id, (err, docs) => {
        // console.log("aaaaaaaaaaa", docs.uid);
        // let userid = docs.uid;
        if (!err) { res.send(docs); }
        else {
            console.log("Error in retriving Blogs :" + JSON.stringify(err, undefined, 2));
        }

    });

});


// update blog details
router.put('/:id', (req, res) => {


    var blog = {
        title: req.body.title,
        content: req.body.content,
        category: req.body.category,
        tags: req.body.tags,
        image: req.body.image,
        date: new Date().toLocaleString("default", { month: "short", day: "2-digit", year: "numeric", weekday: 'long', }),
        uname: localStorage.getItem('User_Name')
    };

    Blog.findByIdAndUpdate(req.params.id, { $set: blog }, { new: true }, (err, docs) => {
        if (!err) { res.send(docs); }
        else {
            console.log("Error in retriving Blogs :" + JSON.stringify(err, undefined, 2));
        }
    });

});

router.delete('/:id', (req, res) => {

    Blog.findOneAndRemove({ "_id": ObjectId(req.params.id) }, (err, docs) => {
        if (!err) { res.send(docs); }
        else {
            console.log("Error in retriving Blogs :" + JSON.stringify(err, undefined, 2));
        }
    });

});

router.post('/', (req, res) => {
    var blog = new Blog({
        title: req.body.title,
        content: req.body.content,
        category: req.body.category,
        tags: req.body.tags,
        image: req.body.image,
        date: new Date().toLocaleString("default", { month: "short", day: "2-digit", year: "numeric", weekday: 'long', }),
        uname: localStorage.getItem('User_Name'),
        valid: true

    });

    blog.save((err, docs) => {
        if (!err) { res.send(docs); }
        else {
            console.log("Error in sending Blogs :" + JSON.stringify(err, undefined, 2));
        }
    });
    // res.send('hello Worl')

});



// get user Registration
router.post('/register', (req, res) => {

    // console.log("register request", req)
    var user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,

    });

    user.save((err, docs) => {
        if (!err) { res.send(docs); }
        else {
            // console.log("Error in sending User :" + JSON.stringify(err, undefined, 2));
            if (err.code == 11000)
                res.status(422).send(['Duplicate email address found']);
            else
                return next(err)
        }
    });

});

// get user Login
router.post('/login', function (req, res, next) {

    // console.log("response", req);
    passport.authenticate('local', function (err, user, info) {
        // console.log("user from routing", user._id);
        localStorage.setItem('User_Name', user.name);
        console.log("user id from Node Local Storage", localStorage.getItem('User_Name'));

        if (err) { return res.status(501).json(err); }
        if (!user) { return res.status(502).json(info); }
        req.logIn(user, function (err) {
            // console.log("error", err);
            if (err) { return res.status(503).json(err); }
            else return res.status(200).json({ username: user.name });
        });
    })(req, res, next);

});

// get user Logout

router.get('/logout', function (req, res, next) {

    req.logout();
    localStorage.removeItem('User_Name');
    localStorage.clear();

    // console.log("response", req);
    return res.status(200).json({ message: 'logout Success' });

});

module.exports = router;

