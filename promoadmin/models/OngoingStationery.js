
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


// stationery Image Schema
var stationerySchema = mongoose.Schema({
    stationery_final_path:Array,
    stationery_file_name: Array,
    stationery_date:String,    
    stationery_time: String,    
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
                                        { collection: 'OngoingStationery'});

var OngoingStationery = module.exports = mongoose.model('OngoingStationery', stationerySchema);
module.exports.createStationery = function(newStationery, callback)
{
    
        newStationery.save(callback);
}
