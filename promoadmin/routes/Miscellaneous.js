const express = require("express");
const router = express.Router();
var Clientuser = require('../models/clientuser');
var moment = require('moment');
var msg91 = require("msg91")("217817A7GCYaZrZEq5b0fc359", "PWORKS", "4" );
var path = require('path');
var fs = require('fs');
var multer  = require('multer');
var User = require('../models/user');
var Miscellaneous = require('../models/Miscellaneous');




//< !-----------------------------------------------------------------------------------------Ongoing Miscellaneous--------------------------------------------------------------------------------------------- !>
//< !-----------------------------------------------------------------------------------------Ongoing Miscellaneous --------------------------------------------------------------------------------------------- !>
//< !-----------------------------------------------------------------------------------------Ongoing Miscellaneous --------------------------------------------------------------------------------------------- !>


//View miscellaneous

router.get('/view-Ongoing-miscellaneous', function(req,res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
                            Miscellaneous.find({}).sort({Miscellaneous_date: -1, Miscellaneous_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-Ongoing-miscellaneous',{Miscellaneous : docs});
        
        });
        
        
    }
    
});

//Once submit has been hit
router.post('/Miscellaneous/:id', function(req, res){
    
        
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
	Miscellaneous.update({_id: req.params.id},
	                   {
                        Miscellaneous_final_path : req.body.image,
                        owner : req.body.owner,
                        toWhom : req.body.toWhom
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/Miscellaneous/view-Ongoing-miscellaneous');
				}
		 });
    }
    	 });




//Delete miscellaneous
router.post('/MiscellaneousOthers/', function(req,res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        var path = req.body.path;
    Miscellaneous.findByIdAndRemove({_id: path}, 
	   function(err){
		if(err) throw err;
		else res.redirect('/Miscellaneous/view-Ongoing-miscellaneous');
	});
        
    }
    
});


//Upload miscellaneous

router.get('/upload-Ongoing-miscellaneous', function(req,res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
Clientuser.find({}, function(err,docs){
    if (err) throw err
    else res.render('upload-Ongoing-miscellaneous', {Clientuser:docs});
});
    }
});








var Miscellaneousstorage = multer.diskStorage({
     destination: './pwClient/vendor/upload/Ongoing/Miscellaneous',
        filename : function(req, file, cb)

    {
//        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
        cb(null, file.originalname);

    }
 });




//Init Upload

var Miscellaneous_upload = multer({storage: Miscellaneousstorage}).array('file', 25);

 



router.post('/upload-Ongoing-miscellaneous',function(req,res,next){

    
    
     //miscellaneousOver Page
   
        if(!req.user){
            res.redirect('/');
}
    
        else{
        
        
           Miscellaneous_upload(req, res, (err) => {
//        console.log(req.files);


       for (var i = 0; i < req.files.length; i++)
           {
//            console.log(req.files[i].path);
            var MiscellaneousFileName = req.files[i].filename;
            var removeMiscellaneous = req.files[i].path;
             var removefinalMiscellaneous =   removeMiscellaneous.substr(15);
//               console.log(removefinalMiscellaneous);
               
               
                    let body = '';
            var FormatType = req.body.optradio;
               console.log(FormatType);
            var toWhom = req.body.toWhom; 
            var brandtype = req.body.brandtype; 
            var owner = "Promoworks";

        if(FormatType == 'Image')
            {
                var Image = FormatType;
            }
        
        if(FormatType == 'Pdf')
            {
                var pdf = FormatType;
            }      
        

        if(FormatType == 'Videos')
            {
                var videos = FormatType;
            }


                var newMiscellaneous = new Miscellaneous({

                    Miscellaneous_final_path: removefinalMiscellaneous,
                    Miscellaneous_file_name: MiscellaneousFileName,
                    Miscellaneous_date: moment().format('MMMM Do YYYY'),
                    Miscellaneous_time: moment().format('LTS'),
                    Image: Image,
                    pdf: pdf,
                    videos: videos,
                    brandtype: brandtype,
                    owner: owner,
                    toWhom: toWhom,
                    Enable : "Enable",
                    Ongoing : "Ongoing",
                    Completed : "",
                    Seen : "",
                    Downloaded : ""

                });
                console.log(newMiscellaneous);
                Miscellaneous.createMiscellaneous(newMiscellaneous, function (err, Miscellaneous) {
                    if (err) throw err;

                });
        
                          }

            var msg = "Work has been uploaded \r";
            var msg2 = "URL : http://works.promo.works \r";
           var msg3 = "Sitemap : username -> password -> menu -> work-in-progress -> Miscellaneous";
            var send = msg + msg2 + msg3;
                        var message = send;
                        Clientuser.findOne({ username: toWhom }, function(err, user) {
                         var mobile = user.mobile;
                    msg91.send(mobile, message, function(err, response){
                    console.log(err);
                    console.log(response); 
                        
                   res.redirect('/Miscellaneous/view-Ongoing-miscellaneous');
                        });
                     });
        
      
                        

        
//        res.end("File is uploaded");
    
    });
      }
});






//router.post('/upload-Ongoing-miscellaneous', (req, res, next) => {
//
//    
//        if(!req.user){
//            res.redirect('/');
//}
//    else
//    {
//        
//    Miscellaneous_upload(req, res, (err) => {
//                    let body = '';
//            var FormatType = req.body.optradio;
//            var toWhom = req.body.toWhom; 
//            var path = req.file.path;
//            var owner = "Promoworks";
//            var Miscellaneous_final_path = path.substr(6);
//
//        if(FormatType == 'Image')
//            {
//                var Image = FormatType;
//            }
//        
//        if(FormatType == 'Pdf')
//            {
//                var pdf = FormatType;
//            }      
//        
//
//        if(FormatType == 'Videos')
//            {
//                var videos = FormatType;
//            }
//
//
//                var newMiscellaneous = new Miscellaneous({
//
//                    Miscellaneous_final_path: Miscellaneous_final_path,
//                    Miscellaneous_date: moment().format('MMMM Do YYYY'),
//                    Miscellaneous_time: moment().format('LTS'),
//                    Image: Image,
//                    pdf: pdf,
//                    videos: videos,
//                    owner: owner,
//                    toWhom: toWhom,
//                    Enable : "Enable",
//                    Seen : ""
//
//                });
//                console.log(newMiscellaneous);
//                Miscellaneous.createMiscellaneous(newMiscellaneous, function (err, Miscellaneous) {
//                    if (err) throw err;
//
//                });
//        
//                
//                                        
//            var msg = "Work has been uploaded \r";
//            var msg2 = "URL : http://works.promo.works \r";
//            var msg3 = "Sitemap : username -> password -> menu -> work-in-progress -> Miscellaneous";
//            var send = msg + msg2 + msg3;
//            var message = send;
//                
//        
//        
//                        Clientuser.findOne({ username: toWhom }, function(err, user) {
//                         var mobile = user.mobile;
//                    msg91.send(mobile, message, function(err, response){
//                    console.log(err);
//                    console.log(response); 
//                        
//                    res.redirect('/Miscellaneous/view-Ongoing-miscellaneous');
//                        });
//                     });
//        
//        
//
//
//    });
//}
//
//});
//
//
//






//Miscellaneous Design-Upload Page
router.post('/Miscellaneous', (req, res, next) => {
        
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
	Miscellaneous.update({_id: req.body.yd},
	                   {
                        Enable : "",
                        Disable : "Disable"
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/Miscellaneous/view-Ongoing-miscellaneous');
				}
		 });
            
        }
      if(req.body.enable == "Enable")
        {
          
            	Miscellaneous.update({_id: req.body.yd},
	                   {
                        Enable : "Enable",
                        Disable : ""
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/Miscellaneous/view-Ongoing-miscellaneous');
				}
		 });
            
        }
    
    }

});






//Move Miscellaneous Page
router.post('/MoveMiscellaneous', (req, res, next) => {
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        

    if(req.body.Ongoing == "Ongoing")
        {
	Miscellaneous.update({_id: req.body.path},
	                   {
                        Completed : "Completed",
                        Ongoing : ""
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
                    
                    console.log(Miscellaneous);
                    
                    
				   res.redirect('/Miscellaneous/view-Ongoing-miscellaneous');
				}
		 });
            
        }

    
    }

});


module.exports =router;