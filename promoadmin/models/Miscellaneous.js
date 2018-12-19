
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


// shop Image Schema
var MiscellaneousSchema = mongoose.Schema({
    Miscellaneous_final_path:Array,
    Miscellaneous_file_name:Array,
    Miscellaneous_date: String,    
    Miscellaneous_time: String,    
    brandtype: String,
    Image: String,
    pdf: String,
    videos: String,
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
                                        { collection: 'Miscellaneous'});


var Miscellaneous = module.exports = mongoose.model('Miscellaneous', MiscellaneousSchema);
module.exports.createMiscellaneous = function(newMiscellaneous, callback)
{
    
        newMiscellaneous.save(callback);
}
