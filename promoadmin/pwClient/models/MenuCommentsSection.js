var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


// MenuCommentsSection Image Schema
var MenuCommentsSectionSchema = mongoose.Schema({
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
    menu_id : String,
    Companylogo_final_path: String


},	
     { collection: 'MenuCommentsSection'});



var MenuCommentsSection = module.exports = mongoose.model('MenuCommentsSection', MenuCommentsSectionSchema);
module.exports.createMenuCommentsSection = function(newMenuCommentsSection, callback)
{
    
        newMenuCommentsSection.save(callback);
}