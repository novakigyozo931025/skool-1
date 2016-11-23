var mongoose = require('mongoose');
var Promise = require('bluebird')

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
		type: String,
		required: true
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
	sni: {
		type: String,
		default: "nem"
	},
	foodSens: {
		type: String,
		default: "nem"
	},
	events: { //azon események id-jait tartalmazza amelyre jelentkezett
		type: Array,
		default: []
	},
	inWaiting: { //azon események id-jait tartalmazza amelyeknél várólistán van a user
		type: Array,
		default: []
	},
	created_at: {
		type: Date,
		default: Date.now
	}
});

module.exports = User;
