var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


// LandingCommentsSection Image Schema
var LandingCommentsSectionSchema = mongoose.Schema({
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
    landing_id : String,
    Companylogo_final_path: String


},	
     { collection: 'LandingCommentsSection'});



var LandingCommentsSection = module.exports = mongoose.model('LandingCommentsSection', LandingCommentsSectionSchema);
module.exports.createLandingCommentsSection = function(newLandingCommentsSection, callback)
{
    
        newLandingCommentsSection.save(callback);
}