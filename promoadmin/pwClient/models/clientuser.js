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



module.exports.getUserByUsername = function(username, callback){
	const query = {username: username};
    console.log(query);
	Clientuser.findOne(query, callback);
}



module.exports.getClientuserById = function(id, callback){
    console.log(id);
	Clientuser.findById(id, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    	if(err) throw err;
       callback(null, isMatch);
	});
    
}