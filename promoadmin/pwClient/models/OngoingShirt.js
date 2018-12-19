
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


// banner Image Schema
var shirtSchema = mongoose.Schema({
    shirt_final_path:Array,
    shirt_file_name: Array,
    shirt_date: String,    
    shirt_time:String,    
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
                                        { collection: 'OngoingShirt'});

var OngoingShirt = module.exports = mongoose.model('OngoingShirt', shirtSchema);
module.exports.createShirt = function(newShirt, callback)
{
    
        newShirt.save(callback);
}
