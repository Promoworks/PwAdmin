var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


// PackageCommentsSection Image Schema
var PackageCommentsSectionSchema = mongoose.Schema({
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
    package_id : String,
    Companylogo_final_path: String


},	
     { collection: 'PackageCommentsSection'});



var PackageCommentsSection = module.exports = mongoose.model('PackageCommentsSection', PackageCommentsSectionSchema);
//module.exports.createCommentsSection = function(newCommentsSection, callback)
//{
//    
//        newCommentsSection.save(callback);
//}