var express = require('express');
var User = require('../models/user');
var jwt = require('jsonwebtoken');
var router = express.Router();
var secret = require('../config').secret;



module.exports = router;
