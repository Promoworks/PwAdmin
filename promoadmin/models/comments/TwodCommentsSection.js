var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


// TwodCommentsSection Image Schema
var TwodCommentsSectionSchema = mongoose.Schema({
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
    twod_id : String,
    Companylogo_final_path: String


},	
     { collection: 'TwodCommentsSection'});



var TwodCommentsSection = module.exports = mongoose.model('TwodCommentsSection', TwodCommentsSectionSchema);
//module.exports.createCommentsSection = function(newCommentsSection, callback)
//{
//    
//        newCommentsSection.save(callback);
//}