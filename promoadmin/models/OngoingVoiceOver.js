var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


// shop Image Schema
var voiceSchema = mongoose.Schema({
    voice_final_path:Array,
    voice_file_name:Array,
    voice_date:String,    
    voice_time: String,    
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
                               { collection: 'OngoingVoiceOver'});

var OngoingVoiceOver = module.exports = mongoose.model('OngoingVoiceOver', voiceSchema);
module.exports.createVoiceOver = function(newVoiceOver, callback)
{
    
        newVoiceOver.save(callback);
}
