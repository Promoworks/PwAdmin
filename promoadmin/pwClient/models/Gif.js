var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


// gif Image Schema
var gifSchema = mongoose.Schema({
    gif_final_path: Array,
    gif_file_name: Array,
	gif_date: String,
	gif_time: String,
    gif: String,	
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
     { collection: 'Gif'});



var Gif = module.exports = mongoose.model('Gif', gifSchema);
module.exports.createGif = function(newGif, callback)
{
        newGif.save(callback);
}

