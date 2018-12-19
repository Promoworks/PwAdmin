var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


// HoardingCommentsSection Image Schema
var HoardingCommentsSectionSchema = mongoose.Schema({
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
    hoarding_id : String,
    Companylogo_final_path: String


},	
     { collection: 'HoardingCommentsSection'});



var HoardingCommentsSection = module.exports = mongoose.model('HoardingCommentsSection', HoardingCommentsSectionSchema);
module.exports.createHoardingCommentsSection = function(newHoardingCommentsSection, callback)
{
    
        newHoardingCommentsSection.save(callback);
}