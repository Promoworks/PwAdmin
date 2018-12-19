var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


// BannerCommentsSection Image Schema
var MiscellaneousCommentsSectionSchema = mongoose.Schema({
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
    miscellaneous_id : String,
    Companylogo_final_path: String


},	
     { collection: 'MiscellaneousCommentsSection'});



var MiscellaneousCommentsSection = module.exports = mongoose.model('MiscellaneousCommentsSection', MiscellaneousCommentsSectionSchema);
module.exports.createMiscellaneousCommentsSection = function(newMiscellaneousCommentsSection, callback)
{
    
        newMiscellaneousCommentsSection.save(callback);
}