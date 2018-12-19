var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


// Newspaper Image Schema
var magazineSchema = mongoose.Schema({
    magazine_final_path:Array,
    magazine_file_name:Array,
    magazine_date: String,    
    magazine_time: String,    
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
                                        { collection: 'OngoingMagazine'});
var OngoingMagazine = module.exports = mongoose.model('OngoingMagazine', magazineSchema);
module.exports.createMagazine = function(newMagazine, callback)
{
    
        newMagazine.save(callback);
}
