const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// User Schema
const SeenSchema = mongoose.Schema({
    username: String,
    seen_date: String,
    seen_time: String
},	
     { collection: 'Seen'});
var Seen = module.exports = mongoose.model('Seen', SeenSchema);


module.exports.createSeen = function(seenStatus, callback){
	        seenStatus.save(callback);
	};

