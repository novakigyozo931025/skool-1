var express = require('express');
var User = require('../models/user');
var jwt = require('jsonwebtoken');
var router = express.Router();
var secret = require('../config').secret;
var Event = require('../models/event');

router.get('/events', function(req, res){
	Event.find({}, function(err, fogl){
		if(err){
			return res.json(err);
		}
		res.json(fogl);
	})
});

router.post('/addevent', function(req, res) {
	var event = new Event({
		cim: req.body.cim,
		varos: req.body.varos,
		szint: req.body.szint,
		eletkor: req.body.eletkor,
		datum: req.body.datum,
		tipus: req.body.tipus,
		tananyag: req.body.tananyag,
		ar: req.body.ar,
		helyek: req.body.helyek,
		
	})

	todo.save(function (err) {
	  if (err) {
	    return res.json(err);
	  }

	  res.json(todo);
	});
})

router.put('/addresztvevo', function(req, res){
	Event.findById(req.body.eventId, function(err, event) {
		if (err) {
			return console.log(err);
		}
		event.resztvevok.push(req.body.userId)
	})
	User.findById(req.body.userId, function(err, user) {
		if (err) {
			return console.log(err);
		}
		user.foglalkozasok.push(req.body.eventId)
		console.log("Added");
	})
})

module.exports = router;
