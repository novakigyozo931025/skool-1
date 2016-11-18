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
	tapasztalat: { //programozoi tapasztalatai
		type: Boolean,
		required: true
	},
	skooltapasztalat: { //valaha volt e már skool foglalkozáson
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
	foglalkozasok: { //azon események id-jait tartalmazza amelyre jelentkezett
		type: Array,
		default: []
	},
	varolista: { //azon események id-jait tartalmazza amelyeknél várólistán van a user
		type: Array,
		default: []
	},
	created_at: {
		type: Date,
		default: Date.now
	}
});

module.exports = User;
