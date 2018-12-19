
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


// shop Image Schema
var shopSchema = mongoose.Schema({
    shop_final_path:Array,
    shop_file_name: Array,
    shop_date:String,
    shop_time: String,    
    brandtype:String,    
    toWhom: String,
    delStatus:String,
    owner:String,
    Enable:String,
    Disable:String,
    Ongoing:String,
    Completed:String,
    Seen:String,
    Downloaded:String
},
                                        { collection: 'OngoingShop'});

var OngoingShop = module.exports = mongoose.model('OngoingShop', shopSchema);
module.exports.createShop = function(newShop, callback)
{
    
        newShop.save(callback);
}
