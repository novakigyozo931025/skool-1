var express = require('express');
var User = require('../models/user');
var jwt = require('jsonwebtoken');
var router = express.Router();
var secret = require('../config').secret;
var Event = require('../models/event');
var log = require('../logger');



//foglalkozások lekérése
router.get('/events', function(req, res){
	Event.find({}, function(err, fogl){
		if(err){
			return res.json(err);
		}
		res.json(fogl);
	});
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
	});

	event.save(function (err) {
	  if (err) {
	    return res.json(err);
	  }
	  res.json(event);
	});
});

// foglalkozásra jelentkezés - user
router.put('/addparticipant', function(req, res){
	var freeSpaces;
	var good = true;

	Event.findById(req.body.eventId, function(err, event) {
		if (err) {
			return log.info(err);
		}

		var index = event.participants.indexOf(req.body.userId);
		if (index === -1) {
			event.participants.push(req.body.userId);
			freeSpaces = req.body.freeSpaces;
			event.save(function (err) {
			  if (err) {
			    return res.json(err);
			  }
			});
		}
		else {
			good = false;
			return res.send("already in");
		}

	});
	User.findById(req.body.userId, function(err, user) {
		if (err) {
			return log.info(err);
		}
		if (good === false) {
			return log.info("Something wet wrong!");
		}

		var indexE = user.events.indexOf(req.body.userId);
		var indexW = user.inWaiting.indexOf(req.body.userId);

		if (indexE === -1 && indexW === -1) {
			if (freeSpaces !== 0) {
				event.participants.push(req.body.userId);
			}
			else {
				event.waitingList.push(req.body.userId);
			}
			event.save(function (err) {
			  if (err) {
			    return res.json(err);
			  }
			});
		}
		else {
			return res.send("already in");
		}
		res.send("kk");
		log.info("Added");
	});
});

// foglalkozás lemondása - user
router.put('/delparticipant', function(req, res){
	Event.findById(req.body.eventId, function(err, event) {
		if (err) {
			return log.info(err);
		}

		var index = event.participants.indexOf(req.body.userId);
		if (index !== -1) {
			delete event.participants[index];

			event.save(function (err) {
			  if (err) {
			    return res.json(err);
			  }
			  res.json(event);
			});
		}
	});
	User.findById(req.body.userId, function(err, user) {
		if (err) {
			return log.info(err);
		}

		if (user.events.indexOf(req.body.eventId) !== -1) {
			var index = user.events.indexOf(req.body.eventId);
			delete user.events[index];
		}
		else if (user.inWaiting.indexOf(req.body.eventId) !== -1) {
			var index2 = user.inWaiting.indexOf(req.body.eventId);
			delete user.inWaiting[index2];
		}
		else {
			res.json({
				message: "Nem voltál a jelentkezettek között"
			});
		}


		user.save(function (err) {
		  if (err) {
		    return res.json(err);
		  }
		  res.json(user);
		});
		log.info("Added");
	});
});


//foglalkozás törlése
router.delete('/delevent',function(req,res){
				Event.findById(req.body._id,function(err,event){
					if(err){
						return res.json(err);
					}
					event.remove(function(err){
						if(err){
							return res.json(err);
						}

						res.json({
							message:"event removed"
						});
					});
				});
});

module.exports = router;
