var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


// shop Image Schema
var ScriptsSchema = mongoose.Schema({
    script_final_path:Array,
    script_file_name:Array,
    script_date:String,    
    script_time: String,    
    Scripttype:String,    
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
                               { collection: 'Scripts'});

var Scripts = module.exports = mongoose.model('Scripts', ScriptsSchema);
module.exports.createScripts = function(newScripts, callback)
{
    
        newScripts.save(callback);
}
