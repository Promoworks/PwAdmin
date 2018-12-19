var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


// Banner Image Schema
var CommentsSectionSchema = mongoose.Schema({
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
    logo_id : String,
    Companylogo_final_path: String


},	
     { collection: 'CommentsSection'});



var CommentsSection = module.exports = mongoose.model('CommentsSection', CommentsSectionSchema);
module.exports.createCommentsSection = function(newCommentsSection, callback)
{
    
        newCommentsSection.save(callback);
}