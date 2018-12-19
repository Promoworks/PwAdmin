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
    voice_id : String,
    Companylogo_final_path: String


},	
     { collection: 'ExplainerCommentsSection'});



var VoiceCommentsSection = module.exports = mongoose.model('VoiceCommentsSection', VoiceCommentsSectionSchema);
//module.exports.createCommentsSection = function(newCommentsSection, callback)
//{
//    
//        newCommentsSection.save(callback);
//}