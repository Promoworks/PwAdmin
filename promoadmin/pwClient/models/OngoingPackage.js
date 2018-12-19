
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


// package Image Schema
var packageSchema = mongoose.Schema({
    package_final_path:Array,
    package_file_name: Array,
    package_date:String,    
    package_time: String,    
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
                                        { collection: 'OngoingPackage'});

var OngoingPackage = module.exports = mongoose.model('OngoingPackage', packageSchema);
module.exports.createPackage = function(newPackage, callback)
{
    
        newPackage.save(callback);
}
