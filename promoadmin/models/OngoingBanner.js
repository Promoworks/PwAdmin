
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


// banner Image Schema
var bannerSchema = mongoose.Schema({
    banner_final_path:Array,
    banner_file_name: Array,
    banner_date:String,    
    banner_time: String,    
    brandtype: String,    
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
                                        { collection: 'OngoingBanner'});

var OngoingBanner = module.exports = mongoose.model('OngoingBanner', bannerSchema);
module.exports.createBanner = function(newBanner, callback)
{
    
        newBanner.save(callback);
}
