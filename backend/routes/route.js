const express = require("express");
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Blog } = require('../models/model');

router.get('/', (req, res)=>{
    // res.send('hello Worl')
    Blog.find((err, docs)=>{
        if(!err){res.send(docs);}
        else{
            console.log("Error in retriving Blogs :" + JSON.stringify(err, undefined, 2));
        }
    });
});

router.get('/details', (req, res)=>{
    console.log("gdfg",req.query.id);
//    if(!ObjectId.isValid(req.params.id))
//    return res.status(400).send('No record with given id : ${req.params.id}');

   

   Blog.findById(req.query.id, (err, docs)=>{
       console.log("fpvsd", docs);
    if(!err){res.send(docs);}
    else{
        console.log("Error in retriving Blogs :" + JSON.stringify(err, undefined, 2));}
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

router.post('/', (req, res)=>{
    var blog = new Blog({
        title : req.body.title,
        content : req.body.content,
        tags : req.body.tags,
        image : req.body.image,
    });

    blog.save((err, docs)=>{
        if(!err){res.send(docs);}
        else{
            console.log("Error in sending Blogs :" + JSON.stringify(err, undefined, 2));
        }
    });
    // res.send('hello Worl')
   
});

module.exports = router;


// const app = express();
// const cors = require("cors");
// const mongoose = require("mongoose");

// app.use(cors());
// app.use(express.json());

// mongoose.connect("mongodb+srv://abubakar:mongo123456@mongodb.ldzrw.mongodb.net/nodeMongoDB");

// app.listen(2200, function(){
    
// console.log("Express server is running");
// })