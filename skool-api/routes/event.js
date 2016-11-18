var express = require('express');
var User = require('../models/user');
var jwt = require('jsonwebtoken');
var router = express.Router();
var secret = require('../config').secret;

router.get('/foglalkozasok', function(req, res){
	Todo.find({}, function(err, fogl){
		if(err){
			return res.json(err);
		}
		res.json(fogl);
	})
});

module.exports = router;
