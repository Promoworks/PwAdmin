var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


// ShopCommentsSection Image Schema
var NewspaperCommentsSectionSchema = mongoose.Schema({
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
    newspaper_id : String,
    Companylogo_final_path: String


},	
     { collection: 'NewspaperCommentsSection'});



var NewspaperCommentsSection = module.exports = mongoose.model('NewspaperCommentsSection', NewspaperCommentsSectionSchema);
module.exports.createNewspaperCommentsSection = function(newNewspaperCommentsSection, callback)
{
    
        newNewspaperCommentsSection.save(callback);
}