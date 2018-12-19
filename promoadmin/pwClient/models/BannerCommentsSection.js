var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


// BannerCommentsSection Image Schema
var BannerCommentsSectionSchema = mongoose.Schema({
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
    banner_id : String,
    Companylogo_final_path: String


},	
     { collection: 'BannerCommentsSection'});



var BannerCommentsSection = module.exports = mongoose.model('BannerCommentsSection', BannerCommentsSectionSchema);
module.exports.createBannerCommentsSection = function(newBannerCommentsSection, callback)
{
    
        newBannerCommentsSection.save(callback);
}