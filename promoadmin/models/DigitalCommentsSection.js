var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


// DigitalCommentsSection Image Schema
var DigitalCommentsSectionSchema = mongoose.Schema({
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
    digital_id : String,
    Companylogo_final_path: String


},	
     { collection: 'DigitalCommentsSection'});



var DigitalCommentsSection = module.exports = mongoose.model('DigitalCommentsSection', DigitalCommentsSectionSchema);
module.exports.createDigitalCommentsSection = function(newDigitalCommentsSection, callback)
{
    
        newDigitalCommentsSection.save(callback);
}