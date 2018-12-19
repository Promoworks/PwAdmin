var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


// Newspaper Image Schema
var twodSchema = mongoose.Schema({
    twod_final_path:Array,
    twod_file_name:Array,
    twod_date:String,    
    twod_time: String,    
    videotype:String,    
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
                               { collection: 'Twod'});
var Twod = module.exports = mongoose.model('Twod', twodSchema);
module.exports.createTwod = function(newTwod, callback)
{
    
        newTwod.save(callback);
}
