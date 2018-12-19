const express = require("express");
const router = express.Router();
var Clientuser = require('../models/clientuser');
var User = require('../models/user');
var moment = require('moment');
var path = require('path');
var msg91 = require("msg91")("217817A7GCYaZrZEq5b0fc359", "PWORKS", "4" );
var fs = require('fs');
var multer  = require('multer');
var Twod = require('../models/twod');
var OngoingVoiceOver = require('../models/OngoingVoiceOver');
var OngoingThreeD = require('../models/OngoingThreeD');
var OngoingExplainer = require('../models/OngoingExplainer');
var OngoingPromotional = require('../models/OngoingPromotional');
var OngoingScribe = require('../models/OngoingScribe');
var OngoingGreeting = require('../models/OngoingGreeting');



//Pick Client

router.get('/pick-seperate-2d-clients', function(req,res){
        if(!req.user){
            res.redirect('/');
}
    else
        {
    Clientuser.find({}, function(err, docs){
        if(err) throw err;
        else  res.render('pick-seperate-2d-clients',{Clientuser : docs});
    });
        }
});

    
//Pick Client Post

router.post('/view-seperate-2d-clients', function(req,res){
     
    if(!req.user){
            res.redirect('/');
}
    else
    {
         var person =  req.body.person;
             console.log(person);

            Twod.find({toWhom:person}).sort({twod_date: -1, twod_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-seperate-2d-clients',{Twod : docs});
        
        });
        
        
        
    }
});






//View 2D

router.get('/view-Ongoing-2d', function(req,res){
        if(!req.user){
            res.redirect('/');
}
    else
        {
  
                    Twod.find({}).sort({twod_date: -1, twod_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-Ongoing-2d',{Twod : docs});
        
        });
        
            
            
            
        }
});


//Once submit has been hit
router.post('/2D/:id', function(req, res){
    var userid = req.body.userid;
    console.log(userid);
    var username = req.body.username;
    console.log(username);  
    var message = req.body.message;
    var image = req.body.image;
    console.log(image);
	Twod.update({_id: req.params.id},
	                   {
                        twod_final_path : req.body.image,
                        owner : req.body.owner,
                        toWhom : req.body.toWhom
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
     
                    
				   res.redirect('/videos/view-Ongoing-2d');
				}
		 });

    	 });





//Delete 2D
router.post('/2D/', function(req,res){
        if(!req.user){
            res.redirect('/');
}
    else
        {
            var path = req.body.path;
    Twod.findByIdAndRemove({_id: path}, 
	   function(err){
		if(err) throw err;
		else res.redirect('/videos/view-Ongoing-2d');
	});
        }
    
});


//Upload 2D

router.get('/upload-Ongoing-2D', function(req,res){
        if(!req.user){
            res.redirect('/');
}
    else
        {
Clientuser.find({}, function(err,docs){
    if (err) throw err
    else res.render('upload-Ongoing-2D', {Clientuser:docs});
});
        }
});








var Twodstorage = multer.diskStorage({
     destination: './pwClient/vendor/upload/Ongoing/2d',
        filename : function(req, file, cb)

    {
//        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
        cb(null, file.originalname);

    }
 });




//Init Upload

var twod_upload = multer({storage: Twodstorage}).array('file', 25);


//2D Videos-Upload Page


router.post('/upload-Ongoing-2D',function(req,res,next){

        
        if(!req.user){
            res.redirect('/');
}
    
        else{
        
        
           twod_upload(req, res, (err) => {
        console.log(req.files);


       for (var i = 0; i < req.files.length; i++)
           {
//            console.log(req.files[i].path);
            var TwodFileName = req.files[i].filename;
            var removeTwod = req.files[i].path;
             var removefinalTwod =   removeTwod.substr(15);
//               console.log(removefinal);
               
               
         
        
                    let body = '';
            var brandType = req.body.brandtype;
            var toWhom = req.body.toWhom;
            var videotype = req.body.videotype;
            var owner = "Promoworks";
            var Twod_final_path = req.files;


               var newTwod = new Twod({

                    twod_final_path: removefinalTwod,
                    twod_file_name: TwodFileName,
                    twod_date: moment().format('MMMM Do YYYY'),
                    twod_time: moment().format('LTS'),
                    videotype: videotype,
                    owner: owner,
                    toWhom: toWhom,
                    Enable : "Enable",
                    Ongoing : "Ongoing",
                    Completed : "",
                    Seen : "",
                    Downloaded : ""

                });
               
                console.log(newTwod);
                Twod.createTwod(newTwod, function (err, twod) {
                    if (err) throw err;

                });
                          }

            var msg = "Work has been uploaded \r";
            var msg2 = "URL : http://works.promo.works \r";
            var msg3 = "Sitemap : username -> password -> menu -> work-in-progress -> 2d Videos";
            var send = msg + msg2 + msg3;
                        var message = send;
                        Clientuser.findOne({ username: toWhom }, function(err, user) {
                         var mobile = user.mobile;
                    msg91.send(mobile, message, function(err, response){
                    console.log(err);
                    console.log(response); 
                        
                  res.redirect('/videos/view-Ongoing-2D');
                        });
                     });
        
      
                        

        
//        res.end("File is uploaded");
    
    });
      }
});





//2D Design-Upload Page
router.post('/twod', (req, res, next) => {
    
        if(!req.user){
            res.redirect('/');
}
    else
    {
    
    var disable = req.body.disable;
    var enable = req.body.enable;
    var moveTo = req.body.moveTo;
    console.log(disable);
    console.log(enable);
    if(req.body.disable == "Disable")
        {
	Twod.update({_id: req.body.yd},
	                   {
                        Enable : "",
                        Disable : "Disable"
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/videos/view-Ongoing-2D');
				}
		 });
            
        }
      if(req.body.enable == "Enable")
        {
          
            	Twod.update({_id: req.body.yd},
	                   {
                        Enable : "Enable",
                        Disable : ""
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/videos/view-Ongoing-2D');
				}
		 });
            
        }

        
    
}

});





 
//Move 2D Videos-Completion Page
router.post('/Move2D', (req, res, next) => {
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        

    if(req.body.Ongoing == "Ongoing")
        {
	Twod.update({_id: req.body.path},
	                   {
                        Completed : "Completed",
                        Ongoing : ""
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
                    
                    console.log(Twod);
                    
                    
				   res.redirect('/videos/view-Ongoing-2D');
				}
		 });
            
        }

    
    }

});


//< !------------------------------------------------------------------------------------------------------3D Videos--------------------------------------------------------------------------------------------- !>
//< !------------------------------------------------------------------------------------------------------3D Videos --------------------------------------------------------------------------------------------- !>
//< !------------------------------------------------------------------------------------------------------3D Videos --------------------------------------------------------------------------------------------- !>


//Pick Client

router.get('/pick-seperate-3d-clients', function(req,res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
    Clientuser.find({}, function(err, docs){
        if(err) throw err;
        else  res.render('pick-seperate-3d-clients',{Clientuser : docs});
    });
        
    }
    
});

    
//Pick Client Post

router.post('/view-seperate-3d-clients', function(req,res){
    
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
             var person =  req.body.person;
             console.log(person);

        
                    OngoingThreeD.find({toWhom:person}).sort({threed_date: -1, threed_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-seperate-3d-clients',{ThreeD : docs});
        
        });
        
        
        
    }
});





//View 3D

router.get('/view-Ongoing-3d', function(req,res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
                    OngoingThreeD.find({}).sort({threed_date: -1, threed_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-Ongoing-3d',{ThreeD : docs});
        
        });
        
        
        
    }
});


//Once submit has been hit
router.post('/3D/:id', function(req, res){
        
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
	OngoingThreeD.update({_id: req.params.id},
	                   {
                        twod_final_path : req.body.image,
                        owner : req.body.owner,
                        toWhom : req.body.toWhom
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/videos/view-Ongoing-3d');
				}
		 });
    }
    	 });




//Delete 3D
router.post('/3D/', function(req,res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
         var path = req.body.path;
    OngoingThreeD.findByIdAndRemove({_id: path}, 
	   function(err){
		if(err) throw err;
		else res.redirect('/videos/view-Ongoing-3d');
	});
        
    }
    
});


//Upload 3D

router.get('/upload-Ongoing-3d', function(req,res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
Clientuser.find({}, function(err,docs){
    if (err) throw err
    else res.render('upload-Ongoing-3d', {Clientuser:docs});
});
    }
});








var threedstorage = multer.diskStorage({
     destination: './pwClient/vendor/upload/Ongoing/3d',
        filename : function(req, file, cb)

    {
//        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
        cb(null, file.originalname);

    }
 });




//Init Upload

var threed_upload = multer({storage: threedstorage}).array('file', 25);

 
//3D Page



router.post('/upload-Ongoing-3d',function(req,res,next){

        
        if(!req.user){
            res.redirect('/');
}
    
        else{
        
        
           threed_upload(req, res, (err) => {
        console.log(req.files);


       for (var i = 0; i < req.files.length; i++)
           {
//            console.log(req.files[i].path);
            var ThreedFileName = req.files[i].filename;
            var removeThreed = req.files[i].path;
             var removefinalThreed =   removeThreed.substr(15);
//               console.log(removefinal);
               
               
         
        
                    let body = '';
            var brandType = req.body.brandtype;
            var toWhom = req.body.toWhom;
            var videotype = req.body.videotype;
            var owner = "Promoworks";
            var Threed_final_path = req.files;


               var newThreeD = new OngoingThreeD({

                    threed_final_path: removefinalThreed,
                    threed_file_name: ThreedFileName,
                    threed_date: moment().format('MMMM Do YYYY'),
                    threed_time: moment().format('LTS'),
                    videotype: videotype,
                    owner: owner,
                    toWhom: toWhom,
                    Enable : "Enable",
                    Ongoing : "Ongoing",
                    Completed : "",
                    Seen : "",
                    Downloaded : ""

                });
               
                console.log(newThreeD);
                OngoingThreeD.createThreeD(newThreeD, function (err, three) {
                    if (err) throw err;

                });
                          }

            var msg = "Work has been uploaded \r";
            var msg2 = "URL : http://works.promo.works \r";
            var msg3 = "Sitemap : username -> password -> menu -> work-in-progress -> 3d Videos";
            var send = msg + msg2 + msg3;
                        var message = send;
                        Clientuser.findOne({ username: toWhom }, function(err, user) {
                         var mobile = user.mobile;
                    msg91.send(mobile, message, function(err, response){
                    console.log(err);
                    console.log(response); 
                        
                  res.redirect('/videos/view-Ongoing-3d');
                        });
                     });
        
      
                        

        
//        res.end("File is uploaded");
    
    });
      }
});



//3D Design-Upload Page
router.post('/threed', (req, res, next) => {
    
        
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
	OngoingThreeD.update({_id: req.body.yd},
	                   {
                        Enable : "",
                        Disable : "Disable"
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/videos/view-Ongoing-3d');
				}
		 });
            
        }
      if(req.body.enable == "Enable")
        {
          
            	OngoingThreeD.update({_id: req.body.yd},
	                   {
                        Enable : "Enable",
                        Disable : ""
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/videos/view-Ongoing-3d');
				}
		 });
            
        }
    
    }

});



 
//Move 3D Videos-Completion Page
router.post('/Move3D', (req, res, next) => {
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        

    if(req.body.Ongoing == "Ongoing")
        {
	OngoingThreeD.update({_id: req.body.path},
	                   {
                        Completed : "Completed",
                        Ongoing : ""
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
                    
                    console.log(OngoingThreeD);
                    
                    
				   res.redirect('/videos/view-Ongoing-3D');
				}
		 });
            
        }

    
    }

});


//< !-----------------------------------------------------------------------------------------------Ongoing Explainer--------------------------------------------------------------------------------------------- !>
//< !-----------------------------------------------------------------------------------------------Ongoing Explainer--------------------------------------------------------------------------------------------- !>
//< !-----------------------------------------------------------------------------------------------Ongoing Explainer--------------------------------------------------------------------------------------------- !>



//Pick Client

router.get('/pick-seperate-explainer-clients', function(req,res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
    Clientuser.find({}, function(err, docs){
        if(err) throw err;
        else  res.render('pick-seperate-explainer-clients',{Clientuser : docs});
    });
        
    }
});

    
//Pick Client Post

router.post('/view-seperate-explainer-clients', function(req,res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
             var person =  req.body.person;
             console.log(person);

                    OngoingExplainer.find({toWhom:person}).sort({explainer_date: -1, explainer_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-seperate-explainer-clients',{Explainer : docs});
        
        });
        
        
    }
    
});




//View Explainer

router.get('/view-Ongoing-explainer', function(req,res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        

                
                    OngoingExplainer.find({}).sort({explainer_date: -1, explainer_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-Ongoing-explainer',{Explainer : docs});
        
        });
        
        
        
    }
});

//Once submit has been hit
router.post('/Explainer/:id', function(req, res){
        
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
	OngoingExplainer.update({_id: req.params.id},
	                   {
                        explainer_final_path : req.body.image,
                        owner : req.body.owner,
                        toWhom : req.body.toWhom
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/videos/view-Ongoing-explainer');
				}
		 });
    }

    	 });




//Delete Explainer
router.post('/OngoingExplainer/', function(req,res){
    
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        var path = req.body.path;
    OngoingExplainer.findByIdAndRemove({_id: path}, 
	   function(err){
		if(err) throw err;
		else res.redirect('/videos/view-Ongoing-explainer');
	});
    }
    
});






//Upload Explainer

router.get('/upload-Ongoing-explainer', function(req,res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
Clientuser.find({}, function(err,docs){
    if (err) throw err
    else res.render('upload-Ongoing-explainer', {Clientuser:docs});
});
    }
});








var Explainerstorage = multer.diskStorage({
     destination: './pwClient/vendor/upload/Ongoing/Explainer',
        filename : function(req, file, cb)

    {
//        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
        cb(null, file.originalname);

    }
 });




//Init Upload Explainer
 
var explainer_upload = multer({storage: Explainerstorage}).array('file', 25);

 
//Explainer Page

router.post('/upload-Ongoing-explainer',function(req,res,next){

        
        if(!req.user){
            res.redirect('/');
}
    
        else{
        
        
           explainer_upload(req, res, (err) => {
        console.log(req.files);


       for (var i = 0; i < req.files.length; i++)
           {
//            console.log(req.files[i].path);
            var ExplainerFileName = req.files[i].filename;
            var removeExplainer = req.files[i].path;
             var removefinalExplainer =   removeExplainer.substr(15);
//               console.log(removefinal);
               
               
         
        
                    let body = '';
            var brandType = req.body.brandtype;
            var toWhom = req.body.toWhom;
            var videotype = req.body.videotype;
            var owner = "Promoworks";
            var Threed_final_path = req.files;


               var newExplainer = new OngoingExplainer({

                    explainer_final_path: removefinalExplainer,
                    explainer_file_name: ExplainerFileName,
                    explainer_date: moment().format('MMMM Do YYYY'),
                    explainer_time: moment().format('LTS'),
                    videotype: videotype,
                    owner: owner,
                    toWhom: toWhom,
                    Enable : "Enable",
                    Ongoing : "Ongoing",
                    Completed : "",
                    Seen : "",
                    Downloaded : ""

                });
               
                console.log(newExplainer);
                OngoingExplainer.createExplainer(newExplainer, function (err, explainer) {
                    if (err) throw err;

                });
                          }

            var msg = "Work has been uploaded \r";
            var msg2 = "URL : http://works.promo.works \r";
            var msg3 = "Sitemap : username -> password -> menu -> work-in-progress -> Explainer Videos";
            var send = msg + msg2 + msg3;
                        var message = send;
                        Clientuser.findOne({ username: toWhom }, function(err, user) {
                         var mobile = user.mobile;
                    msg91.send(mobile, message, function(err, response){
                    console.log(err);
                    console.log(response); 
                        
                  res.redirect('/videos/view-Ongoing-explainer');
                        });
                     });
        
      
                        

        
//        res.end("File is uploaded");
    
    });
      }
});

//Explainer Design-Upload Page
router.post('/explainer', (req, res, next) => {
        
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
	OngoingExplainer.update({_id: req.body.yd},
	                   {
                        Enable : "",
                        Disable : "Disable"
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/videos/view-Ongoing-explainer');
				}
		 });
            
        }
      if(req.body.enable == "Enable")
        {
          
            	OngoingExplainer.update({_id: req.body.yd},
	                   {
                        Enable : "Enable",
                        Disable : ""
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/videos/view-Ongoing-explainer');
				}
		 });
            
        }
    
    }

});



 
//Move Explainer Videos-Completion Page
router.post('/MoveExplainer', (req, res, next) => {
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        

    if(req.body.Ongoing == "Ongoing")
        {
	OngoingExplainer.update({_id: req.body.path},
	                   {
                        Completed : "Completed",
                        Ongoing : ""
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
                    
                    console.log(OngoingExplainer);
                    
                    
				   res.redirect('/videos/view-Ongoing-explainer');
				}
		 });
            
        }

    
    }

});


//< !-------------------------------------------------------------------------------------------Ongoing Greeting--------------------------------------------------------------------------------------------- !>
//< !-------------------------------------------------------------------------------------------Ongoing Greeting--------------------------------------------------------------------------------------------- !>
//< !-------------------------------------------------------------------------------------------Ongoing Greeting--------------------------------------------------------------------------------------------- !>


//Pick Client

router.get('/pick-seperate-greeting-clients', function(req,res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
    Clientuser.find({}, function(err, docs){
        if(err) throw err;
        else  res.render('pick-seperate-greeting-clients',{Clientuser : docs});
    });
        
    }
});

    
//Pick Client Post

router.post('/view-seperate-greeting-clients', function(req,res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
             var person =  req.body.person;
             console.log(person);

        OngoingGreeting.find({toWhom:person}).sort({greeting_date: -1, greeting_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-seperate-greeting-clients',{Greeting : docs});
        
        });
        
        
        
        
    }
    
});





//View Greeting

router.get('/view-Ongoing-greeting', function(req,res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
  
                
                    OngoingGreeting.find({}).sort({greeting_date: -1, greeting_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-Ongoing-greeting',{Greeting : docs});
        
        });
        
        
    }
    
});


//Once submit has been hit
router.post('/Greeting/:id', function(req, res){
        
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
	OngoingGreeting.update({_id: req.params.id},
	                   {
                        greeting_final_path : req.body.image,
                        owner : req.body.owner,
                        toWhom : req.body.toWhom
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/videos/view-Ongoing-greeting');
				}
		 });
    }

    	 });




//Delete Greeting
router.post('/OngoingGreeting/', function(req,res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
       var path = req.body.path;
    OngoingGreeting.findByIdAndRemove({_id: path}, 
	   function(err){
		if(err) throw err;
		else res.redirect('/videos/view-Ongoing-greeting');
	});
        
    }
    
});


//Upload Explainer

router.get('/upload-Ongoing-greeting', function(req,res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
Clientuser.find({}, function(err,docs){
    if (err) throw err
    else res.render('upload-Ongoing-greeting', {Clientuser:docs});
});
    }
});








var Greetingstorage = multer.diskStorage({
     destination: './pwClient/vendor/upload/Ongoing/Greeting',
        filename : function(req, file, cb)

    {
//        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
        cb(null, file.originalname);

    }
 });




//Init Upload Explainer
 
var greeting_upload = multer({storage: Greetingstorage}).array('file', 25);

 
//Greeting Page
router.post('/upload-Ongoing-greeting',function(req,res,next){

        
        if(!req.user){
            res.redirect('/');
}
    
        else{
        
        
           greeting_upload(req, res, (err) => {
        console.log(req.files);


       for (var i = 0; i < req.files.length; i++)
           {
//            console.log(req.files[i].path);
            var GreetingFileName = req.files[i].filename;
            var removeGreeting = req.files[i].path;
             var removefinalGreeting =   removeGreeting.substr(15);
//               console.log(removefinal);
               
               
         
        
                    let body = '';
            var brandType = req.body.brandtype;
            var toWhom = req.body.toWhom;
            var videotype = req.body.videotype;
            var owner = "Promoworks";
            var Threed_final_path = req.files;


               var newGreeting = new OngoingGreeting({

                    greeting_final_path: removefinalGreeting,
                    greeting_file_name: GreetingFileName,
                    greeting_date: moment().format('MMMM Do YYYY'),
                    greeting_time: moment().format('LTS'),
                    videotype: videotype,
                    owner: owner,
                    toWhom: toWhom,
                    Enable : "Enable",
                    Ongoing : "Ongoing",
                    Completed : "",
                    Seen : "",
                    Downloaded : ""

                });
               
               console.log(newGreeting);
                OngoingGreeting.createGreeting(newGreeting, function (err, greeting) {
                    if (err) throw err;

                });
                          }

            var msg = "Work has been uploaded \r";
            var msg2 = "URL : http://works.promo.works \r";
            var msg3 = "Sitemap : username -> password -> menu -> work-in-progress -> Greeting Videos";
            var send = msg + msg2 + msg3;
                        var message = send;
                        Clientuser.findOne({ username: toWhom }, function(err, user) {
                         var mobile = user.mobile;
                    msg91.send(mobile, message, function(err, response){
                    console.log(err);
                    console.log(response); 
                        
                  res.redirect('/videos/view-Ongoing-greeting');
                        });
                     });
        
      
                        

        
//        res.end("File is uploaded");
    
    });
      }
});




//Greeting Design-Upload Page
router.post('/greeting', (req, res, next) => {
        
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
	OngoingGreeting.update({_id: req.body.yd},
	                   {
                        Enable : "",
                        Disable : "Disable"
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/videos/view-Ongoing-greeting');
				}
		 });
            
        }
      if(req.body.enable == "Enable")
        {
          
            	OngoingGreeting.update({_id: req.body.yd},
	                   {
                        Enable : "Enable",
                        Disable : ""
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/videos/view-Ongoing-greeting');
				}
		 });
            
        }
    }
    


});



 
//Move Greeting Videos-Completion Page
router.post('/MoveGreeting', (req, res, next) => {
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        

    if(req.body.Ongoing == "Ongoing")
        {
	OngoingGreeting.update({_id: req.body.path},
	                   {
                        Completed : "Completed",
                        Ongoing : ""
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
                    
                    console.log(OngoingGreeting);
                    
                    
				   res.redirect('/videos/view-Ongoing-greeting');
				}
		 });
            
        }

    
    }

});


//< !------------------------------------------------------------------------------------------Ongoing Promotional--------------------------------------------------------------------------------------------- !>
//< !------------------------------------------------------------------------------------------Ongoing Promotional--------------------------------------------------------------------------------------------- !>
//< !------------------------------------------------------------------------------------------Ongoing Promotional--------------------------------------------------------------------------------------------- !>



//Pick Client

router.get('/pick-seperate-promotional-clients', function(req,res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
    Clientuser.find({}, function(err, docs){
        if(err) throw err;
        else  res.render('pick-seperate-promotional-clients',{Clientuser : docs});
    });
        
    }
});

    
//Pick Client Post

router.post('/view-seperate-promotional-clients', function(req,res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
             var person =  req.body.person;
             console.log(person);

        
                OngoingPromotional.find({toWhom:person}).sort({promotional_date: -1, promotional_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-seperate-promotional-clients',{Promotional : docs});
        
        });
        
        
        
    }
    
});




//View Promotional

router.get('/view-Ongoing-promotional', function(req,res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        

        
                    OngoingPromotional.find({}).sort({promotional_date: -1, promotional_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-Ongoing-promotional',{Promotional : docs});
        
        });
        
        
        
    }
});

//Once submit has been hit
router.post('/Promotional/:id', function(req, res){
        
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
	OngoingPromotional.update({_id: req.params.id},
	                   {
                        promotional_final_path : req.body.image,
                        owner : req.body.owner,
                        toWhom : req.body.toWhom
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/videos/view-Ongoing-promotional');
				}
		 });
    }

    	 });




//Delete Promotional
router.post('/OngoingPromotional/', function(req,res){
    
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        var path = req.body.path;
    OngoingPromotional.findByIdAndRemove({_id: path}, 
	   function(err){
		if(err) throw err;
		else res.redirect('/videos/view-Ongoing-promotional');
	});
    }
    
});


//Upload Promotional

router.get('/upload-Ongoing-promotional', function(req,res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
Clientuser.find({}, function(err,docs){
    if (err) throw err
    else res.render('upload-Ongoing-promotional', {Clientuser:docs});
});
    }
});








var Promotionalstorage = multer.diskStorage({
     destination: './pwClient/vendor/upload/Ongoing/Promotional',
        filename : function(req, file, cb)

    {
//        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
        cb(null, file.originalname);

    }
 });




//Init Upload Promotional
 
var promotional_upload = multer({storage: Promotionalstorage}).array('file', 25);

 
//Promotional Page


router.post('/upload-Ongoing-promotional',function(req,res,next){

        
        if(!req.user){
            res.redirect('/');
}
    
        else{
        
        
           promotional_upload(req, res, (err) => {
        console.log(req.files);


       for (var i = 0; i < req.files.length; i++)
           {
//            console.log(req.files[i].path);
            var PromotionalFileName = req.files[i].filename;
            var removePromotional = req.files[i].path;
             var removefinalPromotional =   removePromotional.substr(15);
//               console.log(removefinal);
               
               
         
        
                    let body = '';
            var brandType = req.body.brandtype;
            var toWhom = req.body.toWhom;
            var videotype = req.body.videotype;
            var owner = "Promoworks";
            var Threed_final_path = req.files;


              var newPromotional = new OngoingPromotional({

                    promotional_final_path: removefinalPromotional,
                    promotional_file_name: PromotionalFileName,
                    promotional_date: moment().format('MMMM Do YYYY'),
                    promotional_time: moment().format('LTS'),
                    videotype: videotype,
                    owner: owner,
                    toWhom: toWhom,
                    Enable : "Enable",
                    Ongoing : "Ongoing",
                    Completed : "",
                    Seen : "",
                    Downloaded : ""

                });
               
                console.log(newPromotional);
                OngoingPromotional.createPromotional(newPromotional, function (err, promotional) {
                    if (err) throw err;

                });
                          }

            var msg = "Work has been uploaded \r";
            var msg2 = "URL : http://works.promo.works \r";
            var msg3 = "Sitemap : username -> password -> menu -> work-in-progress -> Promotional Videos";
            var send = msg + msg2 + msg3;
                        var message = send;
                        Clientuser.findOne({ username: toWhom }, function(err, user) {
                         var mobile = user.mobile;
                    msg91.send(mobile, message, function(err, response){
                    console.log(err);
                    console.log(response); 
                        
                  res.redirect('/videos/view-Ongoing-promotional');
                        });
                     });
        
      
                        

        
//        res.end("File is uploaded");
    
    });
      }
});



//Explainer Design-Upload Page
router.post('/promotional', (req, res, next) => {
        
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
	OngoingPromotional.update({_id: req.body.yd},
	                   {
                        Enable : "",
                        Disable : "Disable"
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/videos/view-Ongoing-promotional');
				}
		 });
            
        }
      if(req.body.enable == "Enable")
        {
          
            	OngoingPromotional.update({_id: req.body.yd},
	                   {
                        Enable : "Enable",
                        Disable : ""
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/videos/view-Ongoing-promotional');
				}
		 });
            
        }
    
    }

});


//Move Promotional Videos-Completion Page
router.post('/MovePromotional', (req, res, next) => {
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        

    if(req.body.Ongoing == "Ongoing")
        {
	OngoingPromotional.update({_id: req.body.path},
	                   {
                        Completed : "Completed",
                        Ongoing : ""
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
                    
                    console.log(OngoingPromotional);
                    
                    
				   res.redirect('/videos/view-Ongoing-promotional');
				}
		 });
            
        }

    
    }

});




//< !------------------------------------------------------------------------------------------Ongoing scribe--------------------------------------------------------------------------------------------- !>
//< !------------------------------------------------------------------------------------------Ongoing scribe--------------------------------------------------------------------------------------------- !>
//< !------------------------------------------------------------------------------------------Ongoing scribe--------------------------------------------------------------------------------------------- !>



//Pick Client

router.get('/pick-seperate-scribe-clients', function(req,res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
    Clientuser.find({}, function(err, docs){
        if(err) throw err;
        else  res.render('pick-seperate-scribe-clients',{Clientuser : docs});
    });
        
    }
});

    
//Pick Client Post

router.post('/view-seperate-scribe-clients', function(req,res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
             var person =  req.body.person;
             console.log(person);

                OngoingScribe.find({toWhom:person}).sort({scribe_date: -1, scribe_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-seperate-scribe-clients',{Scribe : docs});
        
        });
        
        
        
    }
    
});




//View Scribe

router.get('/view-Ongoing-scribe', function(req,res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        

                    OngoingScribe.find({}).sort({scribe_date: -1, scribe_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-Ongoing-scribe',{Scribe : docs});
        
        });
        
        
        
    }
});

//Once submit has been hit
router.post('/Scribe/:id', function(req, res){
        
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
	OngoingScribe.update({_id: req.params.id},
	                   {
                        scribe_final_path : req.body.image,
                        owner : req.body.owner,
                        toWhom : req.body.toWhom
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/videos/view-Ongoing-scribe');
				}
		 });
    }

    	 });




//Delete Scribe
router.post('/OngoingScribe/', function(req,res){
    
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        var path = req.body.path;
    OngoingScribe.findByIdAndRemove({_id: path}, 
	   function(err){
		if(err) throw err;
		else res.redirect('/videos/view-Ongoing-scribe');
	});
    }
    
});


//Upload Scribe

router.get('/upload-Ongoing-scribe', function(req,res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
Clientuser.find({}, function(err,docs){
    if (err) throw err
    else res.render('upload-Ongoing-scribe', {Clientuser:docs});
});
    }
});








var Scribestorage = multer.diskStorage({
     destination: './pwClient/vendor/upload/Ongoing/Scribe',
        filename : function(req, file, cb)

    {
        cb(null, file.originalname);

    }
 });




//Init Upload Scribe
 
var scribe_upload = multer({storage: Scribestorage}).array('file', 25);

 
//Scribe Page

router.post('/upload-Ongoing-scribe',function(req,res,next){

        
        if(!req.user){
            res.redirect('/');
}
    
        else{
        
        
           scribe_upload(req, res, (err) => {
        console.log(req.files);


       for (var i = 0; i < req.files.length; i++)
           {
//            console.log(req.files[i].path);
            var ScribeFileName = req.files[i].filename;
            var removeScribe = req.files[i].path;
             var removefinalScribe =   removeScribe.substr(15);
//               console.log(removefinalScribe);
               
               
         
        
                    let body = '';
            var brandType = req.body.brandtype;
            var toWhom = req.body.toWhom;
            var videotype = req.body.videotype;
            var owner = "Promoworks";
            var Scribe_final_path = req.files;


               var newScribe = new OngoingScribe({
                   
                    scribe_final_path: removefinalScribe,
                    scribe_file_name: ScribeFileName,
                    scribe_date: moment().format('MMMM Do YYYY'),
                    scribe_time: moment().format('LTS'),
                    videotype: videotype,
                    owner: owner,
                    toWhom: toWhom,
                    Enable : "Enable",
                    Ongoing : "Ongoing",
                    Completed : "",
                    Seen : "",
                    Downloaded : ""

                });
               
              console.log(newScribe);
                OngoingScribe.createScribe(newScribe, function (err, scribe) {
                    if (err) throw err;

                });
        
                          }

            var msg = "Work has been uploaded \r";
            var msg2 = "URL : http://works.promo.works \r";
             var msg3 = "Sitemap : username -> password -> menu -> work-in-progress -> Scribe Videos";
            var send = msg + msg2 + msg3;
                        var message = send;
                        Clientuser.findOne({ username: toWhom }, function(err, user) {
                         var mobile = user.mobile;
                    msg91.send(mobile, message, function(err, response){
                    console.log(err);
                    console.log(response); 
                        
                  res.redirect('/videos/view-Ongoing-scribe');
                        });
                     });
        
      
                        

        
//        res.end("File is uploaded");
    
    });
      }
});


//Explainer Design-Upload Page
router.post('/scribe', (req, res, next) => {
        
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
	OngoingScribe.update({_id: req.body.yd},
	                   {
                        Enable : "",
                        Disable : "Disable"
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/videos/view-Ongoing-scribe');
				}
		 });
            
        }
      if(req.body.enable == "Enable")
        {
          
            	OngoingScribe.update({_id: req.body.yd},
	                   {
                        Enable : "Enable",
                        Disable : ""
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/videos/view-Ongoing-scribe');
				}
		 });
            
        }
    
    }

});



//Move Scribe Videos-Completion Page
router.post('/MoveScribe', (req, res, next) => {
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        

    if(req.body.Ongoing == "Ongoing")
        {
	OngoingScribe.update({_id: req.body.path},
	                   {
                        Completed : "Completed",
                        Ongoing : ""
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
                    
                    console.log(OngoingScribe);
                    
                    
				   res.redirect('/videos/view-Ongoing-scribe');
				}
		 });
            
        }

    
    }

});
//< !------------------------------------------------------------------------------------------------------Voice Over--------------------------------------------------------------------------------------------- !>
//< !------------------------------------------------------------------------------------------------------Voice Over --------------------------------------------------------------------------------------------- !>
//< !------------------------------------------------------------------------------------------------------Voice Over --------------------------------------------------------------------------------------------- !>

//Pick Client

router.get('/pick-seperate-voice-clients', function(req,res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
    Clientuser.find({}, function(err, docs){
        if(err) throw err;
        else  res.render('pick-seperate-voice-clients',{Clientuser : docs});
    });
        
    }
});

    
//Pick Client Post

router.post('/view-seperate-voice-clients', function(req,res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
             var person =  req.body.person;
             console.log(person);
 
        
                OngoingVoiceOver.find({toWhom:person}).sort({voice_date: -1, voice_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-seperate-voice-clients',{Voice : docs});
        
        });
        
        
        
    }
});



//View VoiceOver

router.get('/view-Ongoing-voice', function(req,res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        

            OngoingVoiceOver.find({}).sort({voice_date: -1, voice_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-Ongoing-voice',{Voice : docs});
        
        });
        
        
    }
});


//Once submit has been hit
router.post('/Voice/:id', function(req, res){
        
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
	OngoingVoiceOver.update({_id: req.params.id},
	                   {
                        explainer_final_path : req.body.image,
                        owner : req.body.owner,
                        toWhom : req.body.toWhom
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/videos/view-Ongoing-voice');
				}
		 });
        
    }

    	 });



//Delete VoiceOver
router.post('/Voice/', function(req,res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        var path = req.body.path;
    OngoingVoiceOver.findByIdAndRemove({_id: path}, 
	   function(err){
		if(err) throw err;
		else res.redirect('/videos/view-Ongoing-voice');
	});
        
    }
    
});


//Upload VoiceOver

router.get('/upload-Ongoing-voice', function(req,res){
    
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
Clientuser.find({}, function(err,docs){
    if (err) throw err
    else res.render('upload-Ongoing-voice', {Clientuser:docs});
});
        
    }
});








var Voicestorage = multer.diskStorage({
     destination: './pwClient/vendor/upload/Ongoing/Voice',
        filename : function(req, file, cb)

    {
//        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
        cb(null, file.originalname);

    }
 });




//Init Upload

var voice_upload = multer({storage: Voicestorage}).array('file', 25);

 
//VoiceOver Page



router.post('/upload-Ongoing-voice',function(req,res,next){

        
        if(!req.user){
            res.redirect('/');
}
    
        else{
        
        
           voice_upload(req, res, (err) => {
        console.log(req.files);


       for (var i = 0; i < req.files.length; i++)
           {
//            console.log(req.files[i].path);
            var VoiceFileName = req.files[i].filename;
            var removeVoice = req.files[i].path;
             var removefinalVoice =   removeVoice.substr(15);
//               console.log(removefinalScribe);
               
               
         
        
                    let body = '';
            var brandType = req.body.brandtype;
            var toWhom = req.body.toWhom;
            var videotype = req.body.videotype;
            var owner = "Promoworks";
            var Voice_final_path = req.files;


               var newVoiceOver = new OngoingVoiceOver({
                   
                    voice_final_path: removefinalVoice,
                    voice_file_name: VoiceFileName,
                    voice_date: moment().format('MMMM Do YYYY'),
                    voice_time: moment().format('LTS'),
                    videotype: videotype,
                    owner: owner,
                    toWhom: toWhom,
                    Enable : "Enable",
                    Ongoing : "Ongoing",
                    Completed : "",
                    Seen : "",
                    Downloaded : ""

                });
               
                console.log(newVoiceOver);
                OngoingVoiceOver.createVoiceOver(newVoiceOver, function (err, voice) {
                    if (err) throw err;

                });
        
                          }

            var msg = "Work has been uploaded \r";
            var msg2 = "URL : http://works.promo.works \r";
             var msg3 = "Sitemap : username -> password -> menu -> work-in-progress -> Voice Over";
            var send = msg + msg2 + msg3;
                        var message = send;
                        Clientuser.findOne({ username: toWhom }, function(err, user) {
                         var mobile = user.mobile;
                    msg91.send(mobile, message, function(err, response){
                    console.log(err);
                    console.log(response); 
                        
                  res.redirect('/videos/view-Ongoing-voice');
                        });
                     });
        
      
                        

        
//        res.end("File is uploaded");
    
    });
      }
});



//Voice Over Page
router.post('/over', (req, res, next) => {
    
        
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
	OngoingVoiceOver.update({_id: req.body.yd},
	                   {
                        Enable : "",
                        Disable : "Disable"
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/videos/view-Ongoing-voice');
				}
		 });
            
        }
      if(req.body.enable == "Enable")
        {
          
            	OngoingVoiceOver.update({_id: req.body.yd},
	                   {
                        Enable : "Enable",
                        Disable : ""
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/videos/view-Ongoing-voice');
				}
		 });
            
        }
    
    }

});



//Move VoiceOver Videos-Completion Page
router.post('/MoveVoice', (req, res, next) => {
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        

    if(req.body.Ongoing == "Ongoing")
        {
	OngoingVoiceOver.update({_id: req.body.path},
	                   {
                        Completed : "Completed",
                        Ongoing : ""
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
                    
                    console.log(OngoingVoiceOver);
                    
                    
				   res.redirect('/videos/view-Ongoing-voice');
				}
		 });
            
        }

    
    }

});

module.exports =router;