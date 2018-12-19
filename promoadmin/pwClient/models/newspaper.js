var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


// Newspaper Image Schema
var newspaperSchema = mongoose.Schema({
    newspaper_final_path:Array,
    newspaper_file_name:Array,
    newspaper_date: String,    
    newspaper_time: String,    
    Adtype: String,    
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
                                        { collection: 'Newspaper'});


var Newspaper = module.exports = mongoose.model('Newspaper', newspaperSchema);
module.exports.createNewspaper = function(newNewspaper, callback)
{
    
        newNewspaper.save(callback);
}
