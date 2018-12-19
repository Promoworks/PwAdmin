const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Sequelize = require('sequelize');


// User Schema
const ClientUserSchema = mongoose.Schema({
    Companylogo_final_path: String,
    clientName: String,
    username: String,
	clientType: String,
	clientOffice: String,
    mobile: String,	
    password:String,
    joining:String,
    email:String,
    status:String,
    Disable:String,
    Enable:String, 
    DisableOTP:String,
    EnableOTP:String,
    resetPasswordToken: String,
    resetPasswordExpires: Date
},	
     { collection: 'Clientuser'});

var Clientuser = module.exports = mongoose.model('Clientuser', ClientUserSchema);

module.exports.createclientuser = function(clientuser, callback){
	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(clientuser.password, salt, function(err, hash) {
	        clientuser.password = hash;
	        clientuser.save(callback);
	    });
	});
}

