var express = require('express');
var User = require('../models/user');
var jwt = require('jsonwebtoken');
var router = express.Router();
var secret = require('../config').secret;

// register
router.post('/signup', function(req, res){

	var user = new User({
		keresztnev: req.body.keresztnev,
		vezeteknev: req.body.vezeteknev,
		sajatemail: req.body.sajatemail,
		tapasztalat: req.body.tapasztalat,
		felhasznalonev: req.body.felhasznalonev,
		szuldatum: req.body.szuldatum,
		varos: req.body.varos,
		sajattelefon: req.body.sajattelefon,
		skooltapasztalat: req.body.skooltapasztalat,
		email: req.body.email,
		password: req.body.password
	})

	user.save(function (err) {
	  if (err && err.code===11000) {
	    return res.json({
	    	message: "Something went wrong"
	    });
	  }
	  if (err) {
	    return res.json(err);
	  }
	  res.json(user);
	});
});

// login
router.post('/login', function(req, res){
	if(!req.body.email){
		return res.json({
			err: "Email is required"
		})
	}

	if(!req.body.password){
		return res.json({
			err: "Password is required"
		})
	}

	User.findOne({email: req.body.email}, function(err, user){
		if (err) {
	    return res.json(err);
	  }

	  if (!user) {
	  	return res.json({
	  		message: "Wrong username or password"
	  	});
	  }

	  if (user.password!== req.body.password) {
	  	return res.json({
	  		message: "Wrong username or password"
	  	});
	  }

	  var payload = {
	  	_id: user._id,
	  	name: user.name,
	  	regDate: user.created_at
	  };

	  var token = jwt.sign(payload, secret, {
	  	expiresIn: '1d'
	  });

	  res.json({
	  	token: token,
	  	payload: payload
	  })
	});
});

module.exports = router;
