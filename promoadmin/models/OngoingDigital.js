var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


// Theatre Image Schema
var digitalSchema = mongoose.Schema({
    digital_final_path:Array,
    digital_file_name:Array,
    digital_date:String,    
    digital_time: String,    
    Adtype:String,    
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
                               { collection: 'OngoingDigital'});

var OngoingDigital = module.exports = mongoose.model('OngoingDigital', digitalSchema);
module.exports.createDigital = function(newDigital, callback)
{
    
        newDigital.save(callback);
}
