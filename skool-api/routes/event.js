var express = require('express');
var User = require('../models/user');
var jwt = require('jsonwebtoken');
var router = express.Router();
var secret = require('../config').secret;
var Event = require('../models/event');

//foglalkozások lekérése
router.get('/events', function(req, res){
	Event.find({}, function(err, fogl){
		if(err){
			return res.json(err);
		}
		res.json(fogl);
	})
});

// foglalkozás hozzáadása
router.post('/addevent', function(req, res) {
	var event = new Event({
		title: req.body.title,
		city: req.body.city,
		street: req.body.street,
		houseNumber: req.body.houseNumber,
		postCode: req.body.postCode,
		age: req.body.age,
		date: req.body.date,
		type: req.body.type,
		syllabus: req.body.syllabus,
		text: req.body.text,
		price: req.body.price,
		freeSpaces: req.body.freeSpaces,
		teachers: req.body.teachers
	})

	event.save(function (err) {
	  if (err) {
	    return res.json(err);
	  }
	  res.json(todo);
	});
})

// foglalkozásra jelentkezés - user
router.put('/addparticipant', function(req, res){
	Event.findById(req.body.eventId, function(err, event) {
		if (err) {
			return console.log(err);
		}
		event.participants.push(req.body.userId)

		event.save(function (err) {
		  if (err) {
		    return res.json(err);
		  }
		  res.json(event);
		});
	})
	User.findById(req.body.userId, function(err, user) {
		if (err) {
			return console.log(err);
		}
		user.foglalkozasok.push(req.body.eventId)
		user.save(function (err) {
		  if (err) {
		    return res.json(err);
		  }
		  res.json(user);
		});
		console.log("Added");
	})
})

// foglalkozás lemondása - user
router.put('/delparticipant', function(req, res){
	Event.findById(req.body.eventId, function(err, event) {
		if (err) {
			return console.log(err);
		}

		var index = event.participants.indexOf(req.body.userId);
		delete event.participants[index]

		event.save(function (err) {
		  if (err) {
		    return res.json(err);
		  }
		  res.json(event);
		});
	})
	User.findById(req.body.userId, function(err, user) {
		if (err) {
			return console.log(err);
		}

		if (user.events.indexOf(req.body.eventId) !== -1) {
			var index = user.events.indexOf(req.body.eventId);
			delete user.events[index];
		}
		else if (user.events.indexOf(req.body.eventId) !== -1) {
			var index = user.events.indexOf(req.body.eventId);
			delete user.events[index];
		}
		else {
			res.json({
				message: "Nem voltál a jelentkezettek között"
			})
		}


		user.save(function (err) {
		  if (err) {
		    return res.json(err);
		  }
		  res.json(user);
		});
		console.log("Added");
	})
})

module.exports = router;
