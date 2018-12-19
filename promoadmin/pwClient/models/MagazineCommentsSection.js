var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


// MagazineCommentsSection Image Schema
var MagazineCommentsSectionSchema = mongoose.Schema({
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
    magazine_id : String,
    Companylogo_final_path: String


},	
     { collection: 'MagazineCommentsSection'});



var MagazineCommentsSection = module.exports = mongoose.model('MagazineCommentsSection', MagazineCommentsSectionSchema);
module.exports.createMagazineCommentsSection = function(newMagazineCommentsSection, callback)
{
    
        newMagazineCommentsSection.save(callback);
}