
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


// shop Image Schema
var explainerSchema = mongoose.Schema({
    explainer_final_path:Array,
    explainer_file_name:Array,
    explainer_date:String,    
    explainer_time: String,    
    videotype:String,    
    toWhom:String,    
    delStatus:String,
    owner:String,
    Enable:String,
    Disable:String, 
    Ongoing:String,
    Completed:String,
    Seen:String,
    Downloaded:String
},
                               { collection: 'OngoingExplainer'});

var OngoingExplainer = module.exports = mongoose.model('OngoingExplainer', explainerSchema);
module.exports.createExplainer = function(newExplainer, callback)
{
    
        newExplainer.save(callback);
}
