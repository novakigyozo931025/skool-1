var mongoose = require('mongoose');

var User = mongoose.model('User', {
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	isOwnEmail: {
		type: Boolean
	},
	ownEmail: {
		type: String
	},
	isOwnPhone: {
		type: Boolean
	},
	ownPhone: {
		type: String
	},
	experience: { //programozo tapasztalatai
		type: Boolean,
		required: true
	},
	exampleExperience: {
		type: String
	},
	skoolExperience: { //valaha volt e már skool foglalkozáson
		type: Boolean,
		required: true
	},
	exampleSkoolExperience: {
		type: String
	},
	nickName: {
		type: String,
		required: true,
		index: {
			unique: true
		}
	},
	birthDate: {
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
	inwaiting: { //azon események id-jait tartalmazza amelyeknél várólistán van a user
		type: Array,
		default: []
	},
	created_at: {
		type: Date,
		default: Date.now
	}
});

module.exports = User;
