
const express = require("express");
const router = express.Router();
var Clientuser = require('../models/clientuser');
var msg91 = require("msg91")("217817A7GCYaZrZEq5b0fc359", "PWORKS", "4" );
var moment = require('moment');
var path = require('path');
var fs = require('fs');
var multer  = require('multer');
var User = require('../models/user');
var Scripts = require('../models/Scripts');

router.get('/view-Completed-scripts', function(req, res){
                if(!req.user){
            res.redirect('/');
}
    else
    {
        

                            
            Scripts.find({}).sort({script_date: -1, script_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-Completed-scripts',{Scripts : docs});
        
        });
        
        
        
        
    }
    
    
});


   
//Once submit has been hit
router.post('/CompletedScripts/:id', function(req, res){
    
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var userid = req.body.userid;
    console.log(userid);
    var username = req.body.username;
    console.log(username);  
    var message = req.body.message;
    var image = req.body.image;
    console.log(image);
	CompletedScripts.update({_id: req.params.id},
	                   {
                        scripts_final_path : req.body.image,
                        owner : req.body.owner,
                        toWhom : req.body.toWhom
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/CompletedScripts/view-Completed-scripts');
				}
		 });
    }
    	 });


//Delete scripts
router.post('/CompletedScripts/', function(req, res){
    
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
        var path = req.body.path;
	Scripts.findByIdAndRemove({_id: path}, 
	   function(err){
		if(err) throw err;
		else    res.redirect('/CompletedScripts/view-Completed-scripts');
	});
        
        
    }
    
});



//Upload scripts

router.get('/upload-Completed-scripts', function(req,res){
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
        
    Clientuser.find({}, function(err, docs){
        if(err) throw err;
        else res.render('upload-Completed-scripts',{Clientuser:docs});
    }); 
        
    }
    
});



var CompletedScriptsstorage = multer.diskStorage({
    destination : './pwClient/vendor/upload/Completed/Scripts',

    filename : function(req, file, cb)
    {
//        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
        cb(null, file.originalname);

    }
});






var CompletedScripts_upload = multer({storage: CompletedScriptsstorage}).array('file', 25);






router.post('/upload-Completed-scripts', (req, res, next) =>{        
        if(!req.user){
            res.redirect('/');
}
    
        else{
        
        
           CompletedScripts_upload(req, res, (err) => {
        console.log(req.files);


       for (var i = 0; i < req.files.length; i++)
           {
//            console.log(req.files[i].path);
            var ScriptsFileName = req.files[i].filename;
            var removeScripts = req.files[i].path;
             var removefinalScripts =   removeScripts.substr(15);
//               console.log(removefinal);
               
               
         
        
                    let body = '';
            var Scripttype = req.body.Scripttype;
            var toWhom = req.body.toWhom;
            var Adtype = req.body.Adtype;
            var owner = "Promoworks";


                var newScripts = new Scripts({

                    script_final_path: removefinalScripts,
                    script_file_name: ScriptsFileName,
                    script_date: moment().format('MMMM Do YYYY'),
                    script_time: moment().format('LTS'),
                    Scripttype: Scripttype,
                    owner: owner,
                    toWhom: toWhom,
                    Enable : "Enable",
                    Ongoing : "",
                    Completed : "Completed",
                    Seen : "",
                    Downloaded : ""

                });
                console.log(newScripts);

                Scripts.createScripts(newScripts, function (err, Scripts) {
                    if (err) throw err;
                });
        
                          }

            var msg = "Work has been uploaded \r";
            var msg2 = "URL : http://works.promo.works \r";
            var msg3 = "Sitemap : username -> password -> menu -> Completed -> Scripts";
            var send = msg + msg2 + msg3;
                        var message = send;
                        Clientuser.findOne({ username: toWhom }, function(err, user) {
                         var mobile = user.mobile;
                    msg91.send(mobile, message, function(err, response){
                    console.log(err);
                    console.log(response); 
                        
                   res.redirect('/CompletedScripts/view-Completed-scripts');
                        });
                     });
        
      
                        

        
//        res.end("File is uploaded");
    
    });
      }
});






//scripts Design-Upload Page
router.post('/scripts', (req, res, next) => {
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var disable = req.body.disable;
    var enable = req.body.enable;
    console.log(disable);
    console.log(enable);
    if(req.body.disable == "Disable")
        {
	CompletedScripts.update({_id: req.body.yd},
	                   {
                        Enable : "",
                        Disable : "Disable"
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/CompletedScripts/view-Completed-scripts');
				}
		 });
            
        }
      if(req.body.enable == "Enable")
        {
          
            	CompletedScripts.update({_id: req.body.yd},
	                   {
                        Enable : "Enable",
                        Disable : ""
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/CompletedScripts/view-Completed-scripts');
				}
		 });
            
        }
    
    }

});



module.exports = router;