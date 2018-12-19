var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


// Theatre Image Schema
var tvSchema = mongoose.Schema({
    tv_final_path:Array,
    tv_file_name:Array,
    tv_date:String,    
    tv_time: String,    
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
                               { collection: 'OngoingTv'});
var OngoingTv = module.exports = mongoose.model('OngoingTv', tvSchema);
module.exports.createTv = function(newTv, callback)
{
    
        newTv.save(callback);
}
