var mongoose = require('mongoose');

var Event = mongoose.model('Event', {
	cim: {
		type: String,
		required: true
	},
	varos: {
		type: String,
		required: true
	},
	szint: {
		type: String,
		required: true
	},
	eletkor: {
		type: Number,
		required: true
	},
	datum: {
		type: Date,
		required: true,
	},
	tipus: {
		type: String,
		required: true
	},
	tananyag: {
		type: String,
		required: true
	},
	ar: {
		type: Number,
		required: true
	},
	helyek: {
		type: Number,
		required: true
	},
	ertekeles: {
		type: Number,
		required: true
	},
	created_at: {
		type: Date,
		default: Date.now
	}
});

module.exports = Event;
