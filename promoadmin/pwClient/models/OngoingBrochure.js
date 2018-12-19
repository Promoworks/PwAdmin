
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


// stationery Image Schema
var brochureSchema = mongoose.Schema({
    brochure_final_path:Array,
    brochure_file_name: Array,
    brochure_date: String,    
    brochure_time: String,    
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
                                        { collection: 'OngoingBrochure'});

var OngoingBrochure = module.exports = mongoose.model('OngoingBrochure', brochureSchema);
module.exports.createBrochure = function(newBrochure, callback)
{
    
        newBrochure.save(callback);
}
