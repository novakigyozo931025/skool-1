var express = require('express');
var User = require('../models/user');
var jwt = require('jsonwebtoken');
var router = express.Router();
var secret = require('../config').secret;
var Blog = require('../models/blog');
var log = require('../logger');

//blog lekérése
router.get('/getblog',function(req,res){
  Blog.find({},function(err ,blo){
    if (err){
      return res.json(err);
    }
    res.json(blo);
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

module.exports = router;
