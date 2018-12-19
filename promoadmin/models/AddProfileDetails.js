var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// Add Profile Schema
var AddProfileDetailsSchema = mongoose.Schema({
    username:String,
    site_address:String,
    loc_address:String,    
    Bio: String

},
                               { collection: 'AddProfileDetails'});

var AddProfileDetails = module.exports = mongoose.model('AddProfileDetails', AddProfileDetailsSchema);
module.exports.createProfileDetails = function(AddProfileDetails, callback)
{
    
        AddProfileDetails.save(callback);
}
