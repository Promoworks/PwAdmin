
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


// landing Image Schema
var landingSchema = mongoose.Schema({
    landing_final_path:Array,
    landing_file_name: Array,
    landing_date:String,    
    landing_time: String,    
    brandtype:String,    
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
                                        { collection: 'OngoingLanding'});

var OngoingLanding = module.exports = mongoose.model('OngoingLanding', landingSchema);
module.exports.createLanding = function(newLanding, callback)
{
    
        newLanding.save(callback);
}
