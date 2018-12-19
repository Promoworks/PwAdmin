
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


// shop Image Schema
var promotionalSchema = mongoose.Schema({
    promotional_final_path:Array,
    promotional_file_name:Array,
    promotional_date:String,    
    promotional_time: String,    
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
                               { collection: 'OngoingPromotional'});

var OngoingPromotional = module.exports = mongoose.model('OngoingPromotional', promotionalSchema);
module.exports.createPromotional = function(newPromotional, callback)
{
    
        newPromotional.save(callback);
}
