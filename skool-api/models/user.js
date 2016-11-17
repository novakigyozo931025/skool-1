var mongoose = require('mongoose');

var User = mongoose.model('User', {
	keresztnev: {
		type: String,
		required: true
	},
	vezeteknev: {
		type: String,
		required: true
	},
	sajatemail: {
		type: Boolean
	},
	sajattelefon: {
		type: Boolean
	},
	tapasztalat: {
		type: Boolean,
		required: true
	},
	skooltapasztalat: {
		type: Boolean,
		required: true
	},
	felhasznalonev: {
		type: String,
		required: true,
		index: {
			unique: true
		}
	},
	szuldatum: {
		type: Date,
		required: true,
	},
	email: {
		type: String,
		required: true,
		index: {
			unique: true
		}
	},
	varos: {
		type: String,
		required: true
	},
	jelszo: {
		type: String,
		required: true
	},
	created_at: {
		type: Date,
		default: Date.now
	}
});

module.exports = User;
