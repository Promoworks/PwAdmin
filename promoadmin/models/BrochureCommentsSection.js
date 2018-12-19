var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


// BrochureCommentsSection Image Schema
var BrochureCommentsSectionSchema = mongoose.Schema({
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
    brochure_id : String,
    Companylogo_final_path: String


},	
     { collection: 'BrochureCommentsSection'});



var BrochureCommentsSection = module.exports = mongoose.model('BrochureCommentsSection', BrochureCommentsSectionSchema);
//module.exports.createCommentsSection = function(newCommentsSection, callback)
//{
//    
//        newCommentsSection.save(callback);
//}