var mongoose = require('mongoose');
var Promise = require('bluebird') ;

var User = mongoose.model('Staff', {
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	nickName: {
		type: String,
		required: true,
		index: {
			unique: true
		}
	},
	email: {
		type: String,
		required: true,
		index: {
			unique: true
		}
	},
	city: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	events: { //azon események id-jait tartalmazza amelyre jelentkezett
		type: Array,
		default: []
	},
	state: { //onkentes v dolgozo v admin
		type: String,
		required: true
	},
	created_at: {
		type: Date,
		default: Date.now
	}
});

module.exports = User;
