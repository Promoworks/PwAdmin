const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Sequelize = require('sequelize');
const autoIncrement = require("mongodb-autoincrement");



// User Schema
const AllocatersSchema = mongoose.Schema({
    allocaters: String,
    mobile: String,
    password: String,	
    del_status: [{
		type: Number,
        ref: 'Clientuser'
	}]
},{ collection: 'Allocaters'});

var Allocaters = module.exports = mongoose.model('Allocaters', AllocatersSchema);



module.exports.createAllocateuser = function(allocaters, callback){
	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(allocaters.password, salt, function(err, hash) {
	        allocaters.password = hash;
	        allocaters.save(callback);
	    });
	});
}

