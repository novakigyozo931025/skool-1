var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var userRouter = require('./routes/user');
var eventRouter = require('./routes/event');
var expressJwt = require('express-jwt');
var secret = require('./config').secret;

// mongoose
var mongoose = require('mongoose');
var db = process.env.MONGODB_URI || 'mongodb://localhost/skool';
mongoose.connect(db);

// promise lib
var Promise = require('bluebird')
mongoose.Promise = Promise
Promise.promisifyAll(mongoose);

// express middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// event routes
app.use('/api/events', eventRouter);

// auth routes
app.use('/api/user', userRouter);

// err
app.use(function(err, req, res, next){
	res.status(400).json(err)
})

// bad map
app.use('/*',function(req, res){
	res.send("Page not found")
});

// app listener
app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on port 3000!');
});
