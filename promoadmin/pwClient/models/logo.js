var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


// Banner Image Schema
var logoSchema = mongoose.Schema({
    logo_final_path: Array,
    logo_file_name: Array,
	logo_date: String,
	logo_time: String,
    brandtype: String,	
    toWhom:String,
    delStatus:String,
    owner:String,
    Enable:String,
    Disable:String,
    Ongoing:String,
    Completed:String,
    Seen:String,
    Downloaded:String
},	
     { collection: 'Logo'});



var Logo = module.exports = mongoose.model('Logo', logoSchema);
module.exports.createLogo = function(newLogo, callback)
{
        newLogo.save(callback);
}

