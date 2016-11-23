var express = require('express');
var User = require('../models/user');
var Staff = require('../models/staff');
var jwt = require('jsonwebtoken');
var router = express.Router();
var secret = require('../config').secret;

// register - user
router.post('/signup', function(req, res){

	var user = new User({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		isOwnEmail: req.body.isOwnEmail,
		ownEmail: req.body.ownEmail,
		isOwnPhone: req.body.isOwnPhone,
		ownPhone: req.body.ownPhone,
		experience: req.body.experience,
		exampleExperience: req.body.exampleExperience,
		nickName: req.body.nickName,
		birthDate: req.body.birthDate,
		city: req.body.city,
		skoolExperience: req.body.skoolExperience,
		exampleSkoolExperience: req.body.exampleSkoolExperience,
		email: req.body.email,
		password: req.body.password,
		sni: req.body.sni,
		foodSens: req.body.foodSens
	})

	user.save(function (err) {
	  if (err && err.code===11000) {
	    return res.json({
	    	message: err
	    });
	  }
	  if (err) {
	    return res.json(err);
	  }
		console.log("Jejjj");
	  res.json(user);
	});
});

// register - staff
router.post('/signupstaff', function(req, res){

	var staff = new Staff({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		nickName: req.body.nickName,
		city: req.body.city,
		email: req.body.email,
		password: req.body.password,
		state: req.body.state
	});

	staff.save(function (err) {
	  if (err && err.code===11000) {
	    return res.json({
	    	message: err
	    });
	  }
	  if (err) {
	    return res.json(err);
	  }
		console.log("Jejjj");
	  res.json(staff);
	});
});

// login
router.post('/login', function(req, res){
	if(!req.body.email){
		return res.json({
			err: "Email is required"
		});
	}

	if(!req.body.password){
		return res.json({
			err: "Password is required"
		});
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

	  if (user.password !== req.body.password) {
	  	return res.json({
	  		message: "Wrong username or password"
	  	});
	  }

	  var payload = {
	  	_id: user._id,
	  	regDate: user.created_at
	  };

	  var token = jwt.sign(payload, secret, {
	  	expiresIn: '1d'
	  });

	  res.json({
	  	token: token,
	  	payload: payload
	  });
	});
});

// users listing
router.get('/list', function(req, res){
	User.find({}, function(err, users){
		if(err){
			return res.json(err);
		}
		res.json(users);
	});
});

// staff listing
router.get('/stafflist', function(req, res){
	Staff.find({}, function(err, users){
		if(err){
			return res.json(err);
		}
		res.json(users);
	});
});

// önkéntes delete
router.delete('')
module.exports = router;
