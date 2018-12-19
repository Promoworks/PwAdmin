var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


// ExplainerCommentsSection Image Schema
var GreetingCommentsSectionSchema = mongoose.Schema({
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
    greeting_id : String,
    Companylogo_final_path: String


},	
     { collection: 'ExplainerCommentsSection'});



var GreetingCommentsSection = module.exports = mongoose.model('GreetingCommentsSection', GreetingCommentsSectionSchema);
//module.exports.createCommentsSection = function(newCommentsSection, callback)
//{
//    
//        newCommentsSection.save(callback);
//}