var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


// BannerCommentsSection Image Schema
var ScriptsCommentsSectionSchema = mongoose.Schema({
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
    scripts_id : String,
    Companylogo_final_path: String


},	
     { collection: 'ScriptsCommentsSection'});



var ScriptsCommentsSection = module.exports = mongoose.model('ScriptsCommentsSection', ScriptsCommentsSectionSchema);
module.exports.createScriptsCommentsSection = function(newScriptsCommentsSection, callback)
{
    
        newScriptsCommentsSection.save(callback);
}