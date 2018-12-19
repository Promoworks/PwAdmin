var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


// ShirtCommentsSection Image Schema
var ShirtCommentsSectionSchema = mongoose.Schema({
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
    shirt_id : String,
    Companylogo_final_path: String


},	
     { collection: 'ShirtCommentsSection'});



var ShirtCommentsSection = module.exports = mongoose.model('ShirtCommentsSection', ShirtCommentsSectionSchema);
//module.exports.createCommentsSection = function(newCommentsSection, callback)
//{
//    
//        newCommentsSection.save(callback);
//}