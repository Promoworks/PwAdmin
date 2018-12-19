
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


// shop Image Schema
var threedSchema = mongoose.Schema({
    threed_final_path:Array,
    threed_file_name:Array,
    threed_date:String,    
    threed_time: String,    
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
                               { collection: 'OngoingThreeD'});

var OngoingThreeD = module.exports = mongoose.model('OngoingThreeD', threedSchema);
module.exports.createThreeD = function(newThreeD, callback)
{
    
        newThreeD.save(callback);
}
