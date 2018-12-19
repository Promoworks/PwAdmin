
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


// shop Image Schema
var scribeSchema = mongoose.Schema({
    scribe_final_path:Array,
    scribe_file_name:Array,
    scribe_date:String,    
    scribe_time: String,    
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
                               { collection: 'OngoingScribe'});

var OngoingScribe = module.exports = mongoose.model('OngoingScribe', scribeSchema);
module.exports.createScribe = function(newScribe, callback)
{
    
        newScribe.save(callback);
}
