const express = require("express");
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var multer = require('multer')
var upload = multer({ dest: 'uploads/' })
const passport = require('passport');

require('../config/passportConfig');

var { Blog } = require('../models/blogmodel');
var { User } = require('../models/model');

router.get('/', (req, res) => {
    // res.send('hello Worl')
    console.log('BLogs', res)
    Blog.find((err, docs) => {
        if (!err) { res.send(docs); }
        else {
            console.log("Error in retriving Blogs :" + JSON.stringify(err, undefined, 2));
        }
    });
});

router.get('/details', (req, res) => {
    console.log("gdfg", req.query.id);
    //    if(!ObjectId.isValid(req.params.id))
    //    return res.status(400).send('No record with given id : ${req.params.id}');


    Blog.findById(req.query.id, (err, docs) => {
        console.log("fpvsd", docs);
        if (!err) { res.send(docs); }
        else {
            console.log("Error in retriving Blogs :" + JSON.stringify(err, undefined, 2));
        }
    });

});

// router.put('/:id', (req, res)=>{
//     if(!ObjectId.isValid(req.params.id))
//     return res.status(400).send('No record with given id : ${eq.params.id}');

//     var blog = {
//         title : req.body.title,
//         content : req.body.content,
//         tags : req.body.tags,
//         image : req.body.image,
//     };

//     Blog.findByIdAndUpdate(req.params.id, {$set : blog}, { new : true},  (err, docs)=>{
//      if(!err){res.send(docs);}
//      else{
//          console.log("Error in retriving Blogs :" + JSON.stringify(err, undefined, 2));}
//      });

//  });

//  router.delete('/:id', (req, res)=>{
//     if(!ObjectId.isValid(req.params.id))
//     return res.status(400).send('No record with given id : ${req.params.id}');

//     Blog.findOneAndRemove(req.params.id, (err, docs)=>{
//      if(!err){res.send(docs);}
//      else{
//          console.log("Error in retriving Blogs :" + JSON.stringify(err, undefined, 2));}
//      });

//  });

router.post('/', (req, res) => {
    var blog = new Blog({
        title: req.body.title,
        content: req.body.content,
        tags: req.body.tags,
        image: req.body.image,
        date: new Date().toLocaleString("default", { month: "short", day: "2-digit", year: "numeric" })
    });

    blog.save((err, docs) => {
        if (!err) { res.send(docs); }
        else {
            console.log("Error in sending Blogs :" + JSON.stringify(err, undefined, 2));
        }
    });
    // res.send('hello Worl')

});




router.post('/register', (req, res) => {

    console.log("register request", req)
    var user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,

    });

    user.save((err, docs) => {
        if (!err) { res.send(docs); }
        else {
            console.log("Error in sending User :" + JSON.stringify(err, undefined, 2));
        }
    });


});


router.post('/login', function (req, res, next) {

    // console.log("response", req);
    passport.authenticate('local', function (err, user, info) {
        // console.log("user from routing", user);
        if (err) { return res.status(501).json(err); }
        if (!user) { return res.status(502).json(info); }
        req.logIn(user, function (err) {
            // console.log("error", err);
            if (err) { return res.status(503).json(err); }
            else return res.status(200).json({ token: "abc" });
        });
    })(req, res, next);

});

// Login With JWT TOKKEN

// router.post('/login', function (req, res, next) {

//     // console.log("response", req);
//         passport.authenticate('local', function (err, user, info){
//             console.log("user from routing", user);
//             if (err) { return res.status(501).json(err); }
//             if (!user) { return res.status(502).json(info); }
//             req.logIn(user, function (err) {
//                 // console.log("error", err);
//                 if (err) { return res.status(503).json(err); }
//                 else return res.status(200).json({message: 'login Success', status:true, "token": user.generateJwt()});
//             });
//         })(req, res, next);

// });





router.get('/logout', function (req, res, next) {

    req.logout();

    // console.log("response", req);

    return res.status(200).json({ message: 'login Success' });


});

// Blog Post Authentication

// router.post('/',isValidUser,(req, res, next) => {
//     var blog = new Blog({
//         title: req.body.title,
//         content: req.body.content,
//         tags: req.body.tags,
//         image: req.body.image,
//         date : new Date().toLocaleString("default", { month: "short" , day:"2-digit", year:"numeric" })
//     });

//     blog.save((err, docs) => {
//         if (!err) { res.send(docs); }
//         else {
//             console.log("Error in sending Blogs :" + JSON.stringify(err, undefined, 2));
//         }
//     });


// });

// Login Authenticate Function
// function isValidUser(req, res, next){
//     if(req.isAuthenticated()) next();
//     else return res.status(401).json({message: 'UnAuthorized Request'});
// }



module.exports = router;

