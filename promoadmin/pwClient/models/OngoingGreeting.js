
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


// shop Image Schema
var greetingSchema = mongoose.Schema({
    greeting_final_path:Array,
    greeting_file_name:Array,
    greeting_date:String,    
    greeting_time: String,    
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
                               { collection: 'OngoingGreeting'});

var OngoingGreeting = module.exports = mongoose.model('OngoingGreeting', greetingSchema);
module.exports.createGreeting = function(newGreeting, callback)
{
    
        newGreeting.save(callback);
}
