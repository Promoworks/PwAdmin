var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


// TvCommentsSection Image Schema
var TvCommentsSectionSchema = mongoose.Schema({
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
    tv_id : String,
    Companylogo_final_path: String


},	
     { collection: 'TvCommentsSection'});



var TvCommentsSection = module.exports = mongoose.model('TvCommentsSection', TvCommentsSectionSchema);
//module.exports.createCommentsSection = function(newCommentsSection, callback)
//{
//    
//        newCommentsSection.save(callback);
//}