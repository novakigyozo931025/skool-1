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
	houseNumber: { //az esemény házszáma
		type: String,
		required: true
	},
	postCode: { //az esemény irányítószáma
		type: String,
		required: true
	},
	age: { //ajánlott életkora a résztvevőknek
		type: Number,
		required: true
	},
	date: { //az eseméy megrendezésének dátuma
		type: String,
		required: true,
	},
	type: { // az esemény típusa
		type: String,
		required: true
	},
	syllabus: { //a tananyag
		type: String,
		required: true
	},
	text: { //a tananyag
		type: String,
		required: true
	},
	price: { // az esemény ára
		type: Number,
		required: true,
		default: 0
	},
	freeSpaces: { //a megengedett legnagyobb letszam
		type: Number,
		required: true
	},
	participants: { //a resztvevo userek id-jait tartalmazza
		type: Array,
		default: []
	},
	waitingList: { //a varolistas userek id-jait tartalmazza
		type: Array,
		default: []
	},
	teachers: { //az eseményt tartó tanárok, önkéntesek id-jait tartalmazza
		type: Array,
		default: []
	},
	rating: { //az esemény értékelése
		type: Number
	},
	created_at: {
		type: Date,
		default: Date.now
	}
});

module.exports = Event;
