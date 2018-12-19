var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


// StationeryCommentsSection Image Schema
var StationeryCommentsSectionSchema = mongoose.Schema({
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
    stationery_id : String,
    Companylogo_final_path: String


},	
     { collection: 'StationeryCommentsSection'});



var StationeryCommentsSection = module.exports = mongoose.model('StationeryCommentsSection', StationeryCommentsSectionSchema);
module.exports.createStationeryCommentsSection = function(newStationeryCommentsSection, callback)
{
    
        newStationeryCommentsSection.save(callback);
}