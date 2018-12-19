var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


// VoiceCommentsSection Image Schema
var VoiceCommentsSectionSchema = mongoose.Schema({
    sub_id: String,
	message: String,
	username: String,
    brand:String,
	commentDate: String,
	commentTime: String,
    delStatus : String,
    AdminName : String,
    AdminComments : String,
    AdminDate : String,
    AdminTime : String,
    voice_id : String,
    Companylogo_final_path: String


},	
     { collection: 'VoiceCommentsSection'});



var VoiceCommentsSection = module.exports = mongoose.model('VoiceCommentsSection', VoiceCommentsSectionSchema);
module.exports.createVoiceCommentsSection = function(newVoiceCommentsSection, callback)
{
    
        newVoiceCommentsSection.save(callback);
}