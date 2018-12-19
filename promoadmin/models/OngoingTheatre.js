var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


// Theatre Image Schema
var theatreSchema = mongoose.Schema({
    theatre_final_path: Array,
    theatre_file_name: Array,
    theatre_date: String,    
    theatre_time: String,    
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
                                        { collection: 'OngoingTheatre'});
var OngoingTheatre = module.exports = mongoose.model('OngoingTheatre', theatreSchema);
module.exports.createTheatre = function(newTheatre, callback)
{
    
        newTheatre.save(callback);
}
