var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


// ExplainerCommentsSection Image Schema
var ExplainerCommentsSectionSchema = mongoose.Schema({
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
    explainer_id : String,
    Companylogo_final_path: String


},	
     { collection: 'ExplainerCommentsSection'});



var ExplainerCommentsSection = module.exports = mongoose.model('ExplainerCommentsSection', ExplainerCommentsSectionSchema);
module.exports.createExplainerCommentsSection = function(newExplainerCommentsSection, callback)
{
    
        newExplainerCommentsSection.save(callback);
}