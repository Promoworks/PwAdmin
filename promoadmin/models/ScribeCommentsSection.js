var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


// PromotionalCommentsSection Image Schema
var ScribeCommentsSectionSchema = mongoose.Schema({
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
    scribe_id : String,
    Companylogo_final_path: String


},	
     { collection: 'ScribeCommentsSection'});



var ScribeCommentsSection = module.exports = mongoose.model('ScribeCommentsSection', ScribeCommentsSectionSchema);
module.exports.createScribeCommentsSection = function(newScribeCommentsSection, callback)
{
    
        newScribeCommentsSection.save(callback);
}