
const express = require("express");
const router = express.Router();
var Clientuser = require('../models/clientuser');
var msg91 = require("msg91")("217817A7GCYaZrZEq5b0fc359", "PWORKS", "4" );
var moment = require('moment');
var User = require('../models/user');
var path = require('path');
var fs = require('fs');
var multer  = require('multer');
var Scripts = require('../models/Scripts');

router.get('/view-Ongoing-scripts', function(req, res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
    
    Scripts.find({}).sort({script_date: -1, script_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-Ongoing-scripts',{Scripts : docs});
        
        });
        
        
        
    }
    
});

   
//Once submit has been hit
router.post('/Scripts/:id', function(req, res){
        
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
	Scripts.update({_id: req.params.id},
	                   {
                        scripts_final_path : req.body.image,
                        owner : req.body.owner,
                        toWhom : req.body.toWhom
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/Scripts/view-Ongoing-scripts');
				}
		 });
    }

    	 });


//Delete scripts
router.post('/ScriptsHandler/', function(req, res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        var path = req.body.path;
	Scripts.findByIdAndRemove({_id: path}, 
	   function(err){
		if(err) throw err;
		else    res.redirect('/Scripts/view-Ongoing-scripts');
	});
        
    }
});



//Upload scripts

router.get('/upload-Ongoing-scripts', function(req,res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
    Clientuser.find({}, function(err, docs){
        if(err) throw err;
        else res.render('upload-Ongoing-scripts',{Clientuser:docs});
    }); 
        
    }
    
});



var Scriptsstorage = multer.diskStorage({
    destination : './pwClient/vendor/upload/Ongoing/Scripts',

    filename : function(req, file, cb)
    {
//        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
        cb(null, file.originalname);

    }
});






var Scripts_upload = multer({storage: Scriptsstorage}).array('file', 25);









router.post('/upload-Ongoing-scripts', (req, res, next) =>{
        
        if(!req.user){
            res.redirect('/');
}
    
        else{
        
        
           Scripts_upload(req, res, (err) => {
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
                    Ongoing : "Ongoing",
                    Completed : "",
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
            var msg3 = "Sitemap : username -> password -> menu -> work-in-progress -> Scripts";
            var send = msg + msg2 + msg3;
                        var message = send;
                        Clientuser.findOne({ username: toWhom }, function(err, user) {
                         var mobile = user.mobile;
                    msg91.send(mobile, message, function(err, response){
                    console.log(err);
                    console.log(response); 
                        
                   res.redirect('/Scripts/view-Ongoing-scripts');
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
	Scripts.update({_id: req.body.yd},
	                   {
                        Enable : "",
                        Disable : "Disable"
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/Scripts/view-Ongoing-scripts');
				}
		 });
            
        }
      if(req.body.enable == "Enable")
        {
          
            	Scripts.update({_id: req.body.yd},
	                   {
                        Enable : "Enable",
                        Disable : ""
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/Scripts/view-Ongoing-scripts');
				}
		 });
            
        }
    }


});


//Move Scripts Page
router.post('/MoveScripts', (req, res, next) => {
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        

    if(req.body.Ongoing == "Ongoing")
        {
	Scripts.update({_id: req.body.path},
	                   {
                        Completed : "Completed",
                        Ongoing : ""
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
                    
                    console.log(Scripts);
                    
                    
				   res.redirect('/Scripts/view-Ongoing-scripts');
				}
		 });
            
        }

    
    }

});



module.exports = router;