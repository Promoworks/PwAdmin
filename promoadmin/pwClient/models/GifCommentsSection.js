var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


// GifCommentsSection Image Schema
var GifCommentsSectionSchema = mongoose.Schema({
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
    gif_id : String,
    Companylogo_final_path: String


},	
     { collection: 'GifCommentsSection'});



var GifCommentsSection = module.exports = mongoose.model('GifCommentsSection', GifCommentsSectionSchema);
module.exports.createGifCommentsSection = function(newGifCommentsSection, callback)
{
    
        newGifCommentsSection.save(callback);
}