var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


// PromotionalCommentsSection Image Schema
var PromotionalCommentsSectionSchema = mongoose.Schema({
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
    promotional_id : String,
    Companylogo_final_path: String


},	
     { collection: 'PromotionalCommentsSection'});



var PromotionalCommentsSection = module.exports = mongoose.model('PromotionalCommentsSection', PromotionalCommentsSectionSchema);
module.exports.createPromotionalCommentsSection = function(newPromotionalCommentsSection, callback)
{
    
        newPromotionalCommentsSection.save(callback);
}