
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


// stationery Image Schema
var menuSchema = mongoose.Schema({
    menu_final_path:Array,
    menu_file_name: Array,
    menu_date: String,    
    menu_time: String,    
    brandtype: String,    
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
                                        { collection: 'OngoingMenu'});

var OngoingMenu = module.exports = mongoose.model('OngoingMenu', menuSchema);
module.exports.createMenu = function(newMenu, callback)
{
    
        newMenu.save(callback);
}
