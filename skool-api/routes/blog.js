var express = require('express');
var User = require('../models/user');
var jwt = require('jsonwebtoken');
var router = express.Router();
var secret = require('../config').secret;
var Blog = require('../models/blog');
var log = require('../logger');

//blog lekérése
router.get('/getblog',function(req,res){
  Blog.find({},function(err ,blog){
    if (err){
      return res.json(err);
    }
    res.json(blog);
  });
});

//blog hozzáadása
router.post('/addblog',function(req,res){
  var blog = new Blog({
    title : req.body.title,
    intro : req.body.intro,
    html : req.body.html
  });

  blog.save(function (err) {
    if (err) {
      return res.json(err);
    }
    res.json(blog);
  });

});


//blog törlése
router.delete('/delblog',function(res,req){
    Blog.findById(req.body._id , function(err,blog){
         if (err){
           return res.json(err);
         }
          blog.remove(function(err){
           if (err){
             return res.json(err);
           }

            res.json({
             message: "Blog removed"
            });
          });
    });
});

module.exports = router;
