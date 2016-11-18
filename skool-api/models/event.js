var mongoose = require('mongoose');

var Event = mongoose.model('Event', {
	title: { //az esemény címe
		type: String,
		required: true
	},
	city: { //az esemény városa
 		type: String,
		required: true
	},
	street: { //az esemény utcája
 		type: String,
		required: true
	},
	postcode: { //az esemény irányítószáma
		type: String,
		required: true
	},
	eletkor: {
		type: Number,
		required: true
	},
	datum: {
		type: String,
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
	helyek: { //a megengedett legnagyobb letszam
		type: Number,
		required: true
	},
	resztvevok: { //a resztvevo userek id-jait tartalmazza
		type: Array,
		default: []
	},
	varolista: { //a varolistas userek id-jait tartalmazza
		type: Array,
		default: []
	},
	tanarok: { //az eseményt tartó tanárok, önkéntesek id-jait tartalmazza
		type: Array,
		default: []
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
