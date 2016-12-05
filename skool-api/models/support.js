var mongoose = require('mongoose');
var Promise = require('bluebird');

var User = mongoose.model('Support',{

  firstName:{
    type: String ,
    required : true
  },

  lastName:{
    type: String,
    required:true
  },

  supportEmail:{
  type: String,
  requried : true
              },

  zipCode:{
   type: Number ,
   required :true
          },

  supportAddress:{
   type:String,
   requried : true ,
                 }

  });
