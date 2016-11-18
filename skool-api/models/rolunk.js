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
	szoveg: {
		type: String,
		required: true,
	},
	reszletek: {
		type: String,
		required: true,
	},
	created_at: {
		type: Date,
		default: Date.now
	}
});

module.exports = User;
