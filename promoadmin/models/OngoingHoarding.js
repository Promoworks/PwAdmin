
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


// shop Image Schema
var hoardingSchema = mongoose.Schema({
    hoarding_final_path:Array,
    hoarding_file_name: Array,
    hoarding_date:String,
    hoarding_time: String,    
    brandtype:String,    
    toWhom: String,
    delStatus:String,
    owner:String,
    Enable:String,
    Disable:String,
    Ongoing:String,
    Completed:String,
    Seen:String,
    Downloaded:String
},
                                        { collection: 'OngoingHoarding'});

var OngoingHoarding = module.exports = mongoose.model('OngoingHoarding', hoardingSchema);
module.exports.createHoarding = function(newHoarding, callback)
{
    
        newHoarding.save(callback);
}
