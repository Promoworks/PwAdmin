var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


// ThreedCommentsSection Image Schema
var ThreedCommentsSectionSchema = mongoose.Schema({
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
    threed_id : String,
    Companylogo_final_path: String


},	
     { collection: 'ThreedCommentsSection'});



var ThreedCommentsSection = module.exports = mongoose.model('ThreedCommentsSection', ThreedCommentsSectionSchema);
//module.exports.createCommentsSection = function(newCommentsSection, callback)
//{
//    
//        newCommentsSection.save(callback);
//}