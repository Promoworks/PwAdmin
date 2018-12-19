var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


// ShopCommentsSection Image Schema
var ShopCommentsSectionSchema = mongoose.Schema({
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
    shop_id : String,
    Companylogo_final_path: String


},	
     { collection: 'ShopCommentsSection'});



var ShopCommentsSection = module.exports = mongoose.model('ShopCommentsSection', ShopCommentsSectionSchema);
module.exports.createShopCommentsSection = function(newShopCommentsSection, callback)
{
    
        newShopCommentsSection.save(callback);
}