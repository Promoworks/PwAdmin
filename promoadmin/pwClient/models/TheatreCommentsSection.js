var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


// TheatreCommentsSection Image Schema
var TheatreCommentsSectionSchema = mongoose.Schema({
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
    theatre_id : String,
    Companylogo_final_path: String


},	
     { collection: 'TheatreCommentsSection'});



var TheatreCommentsSection = module.exports = mongoose.model('TheatreCommentsSection', TheatreCommentsSectionSchema);
module.exports.createTheatreCommentsSection = function(newTheatreCommentsSection, callback)
{
    
        newTheatreCommentsSection.save(callback);
}