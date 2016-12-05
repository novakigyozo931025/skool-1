var mongoose = require('mongoose');
var Promise = require('bluebird');

var Blog = mongoose.model('Blog', {
  title: {
    type: String,
    require: true
  },
  intro: {
    type:String,
    require:true
  },
  html: {
    type: String,
    require: true
  },
	created_at: {
		type: Date,
		default: Date.now
	}
});

module.exports = Blog;
