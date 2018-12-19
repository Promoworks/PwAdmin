const express = require("express");
const router = express.Router();
var Clientuser = require('../models/clientuser');
var User = require('../models/user');
var moment = require('moment');
var path = require('path');
var msg91 = require("msg91")("217817A7GCYaZrZEq5b0fc359", "PWORKS", "4" );
var fs = require('fs');
var multer  = require('multer');
var Logo = require('../models/logo');
var OngoingStationery = require('../models/OngoingStationery');
var OngoingBrochure = require('../models/OngoingBrochure');
var OngoingMenu = require('../models/OngoingMenu');
var OngoingLanding = require('../models/OngoingLanding');
var OngoingPackage = require('../models/OngoingPackage');
var OngoingBanner = require('../models/OngoingBanner');
var OngoingShirt = require('../models/OngoingShirt');
var OngoingShop = require('../models/OngoingShop');
var OngoingHoarding = require('../models/OngoingHoarding');
var CommentsSection = require('../models/CommentsSection');




    //< !--------------------------------------------------------------------------------------------Logo Designs--------------------------------------------------------------------------------------------- !>
    //< !--------------------------------------------------------------------------------------------Logo Designs--------------------------------------------------------------------------------------------- !>
    //< !--------------------------------------------------------------------------------------------Logo Designs--------------------------------------------------------------------------------------------- !>



//Pick Client

router.get('/pick-seperate-logo-clients', function(req,res){
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
    Clientuser.find({}, function(err, docs){
        if(err) throw err;
        else  res.render('pick-seperate-logo-clients',{Clientuser : docs});
    });
        
    }
    
});


    
//Pick Client Post

router.post('/view-seperate-logo-clients', function(req,res){
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
             var person =  req.body.person;
             console.log(person);
//    Logo.find({toWhom:person}, function(err, docs){
//        if(err) throw err;
//        else  res.render('view-seperate-logo-clients',{Logo : docs});
//    }).sort({logo_time: -1});
//        
//        
        
        
    Logo.find({toWhom:person}).sort({logo_date: -1, logo_time: 1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-seperate-logo-clients',{Logo : docs});
        
        });
        
        
        
        
    }
});


    

//View Logo

router.get('/view-Ongoing-logo', function(req,res){
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
    
//    Logo.find({}, function(err, docs){
//        if(err) throw err;
//        else  res.render('view-Ongoing-logo',{Logo : docs});
//    }).sort({logo_time: -1});
        
       
        
                
    Logo.find({}).sort({logo_date: -1, logo_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-Ongoing-logo',{Logo : docs});
        
        });
        
        
        
        
    }
});


    

    
//Once submit has been hit
router.post('/Logo/:id', function(req, res){
    
            
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
	Logo.update({_id: req.params.id},
	                   {
                        logo_final_path : req.body.image,
                        owner : req.body.owner,
                        toWhom : req.body.toWhom
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/design/view-Ongoing-logo');
				}
		 });
        
    }

    	 });





//Delete Logo

router.post('/Logo/', function(req, res){
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        var path = req.body.path;
	Logo.findByIdAndRemove({_id: path},
	   function(err){
		if(err) throw err;
		else    res.redirect('/design/view-Ongoing-logo');
	});
        
    }
});



//Upload Logo

router.get('/upload-Ongoing-logo', function(req,res){
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
    Clientuser.find({}, function(err, docs){
        var time = moment().format('LTS');
        if(err) throw err;
        else  res.render('upload-Ongoing-logo',{Clientuser : docs});
    });
        
        
    }
});








//Init Upload logo Design-Upload Page
var Logostorage = multer.diskStorage({
     destination: './pwClient/vendor/upload/Ongoing/Logo',
    filename : function(req, file, cb)
    {
//        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
        cb(null, file.originalname);

        
    }
 });

var logo_upload = multer({ storage : Logostorage }).array('file',25);


router.post('/upload-Ongoing-logo',function(req,res,next){

        
        if(!req.user){
            res.redirect('/');
}
    
        else{
        
        
           logo_upload(req, res, (err) => {
        console.log(req.files);


       for (var i = 0; i < req.files.length; i++)
           {
            var LogoFileName = req.files[i].filename;
            var removeLogo = req.files[i].path;
            var removefinalLogo =   removeLogo.substr(15);
               
               
         
        
                    let body = '';
            var brandType = req.body.brandtype;
            var toWhom = req.body.toWhom;
            var owner = "Promoworks";
            var logo_final_path = req.files;


                var newLogo = new Logo({

                    logo_final_path: removefinalLogo,
                    logo_file_name: LogoFileName,
                    logo_date: moment().format('MMMM Do YYYY'),
                    logo_time: moment().format('LTS'),
                    brandtype: brandType,
                    owner: owner,
                    toWhom: toWhom,
                    Enable : "Enable",
                    Ongoing : "Ongoing",
                    Completed : "",
                    Seen : "",
                    Downloaded : ""

                });
               
                console.log(newLogo);
                Logo.createLogo(newLogo, function (err, logo) {
                    if (err) throw err;

                });
                          }

            var msg = "Work has been uploaded \r";
            var msg2 = "URL : http://works.promo.works \r";
            var msg3 = "Sitemap : username -> password -> menu -> work-in-progress -> Logo Design";
            var send = msg + msg2 + msg3;
                        var message = send;
                        Clientuser.findOne({ username: toWhom }, function(err, user) {
                         var mobile = user.mobile;
                    msg91.send(mobile, message, function(err, response){
                    console.log(err);
                    console.log(response); 
                        
                   res.redirect('/design/view-Ongoing-logo');
                        });
                     });
        
      
                        

        
//        res.end("File is uploaded");
    
    });
            
           
      }
});
















 
//logo Design-Upload Page
router.post('/DE', (req, res, next) => {
    
            
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
	Logo.update({_id: req.body.yd},
	                   {
                        Enable : "",
                        Disable : "Disable"
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
                    
                    console.log(Logo);
                    
                    
				   res.redirect('/design/view-Ongoing-logo');
				}
		 });
            
        }
      if(req.body.enable == "Enable")
        {
          
            	Logo.update({_id: req.body.yd},
	                   {
                        Enable : "Enable",
                        Disable : ""
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/design/view-Ongoing-logo');
				}
		 });
            
        }
    
    }

});
















 
//Move logo Design-Completion Page
router.post('/MoveLogo', (req, res, next) => {
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        

    if(req.body.Ongoing == "Ongoing")
        {
	Logo.update({_id: req.body.path},
	                   {
                        Completed : "Completed",
                        Ongoing : ""
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
                    
                    console.log(Logo);
                    
                    
				   res.redirect('/design/view-Ongoing-logo');
				}
		 });
            
        }

    
    }

});

      


//< !------------------------------------------------------------------------------------------------------Stationery Designs--------------------------------------------------------------------------------------------- !>
//< !------------------------------------------------------------------------------------------------------Stationery Designs--------------------------------------------------------------------------------------------- !>
//< !------------------------------------------------------------------------------------------------------Stationery Designs--------------------------------------------------------------------------------------------- !>


//Pick Client

router.get('/pick-seperate-stationery-clients', function(req,res){
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
    Clientuser.find({}, function(err, docs){
        if(err) throw err;
        else  res.render('pick-seperate-stationery-clients',{Clientuser : docs});
    });
        
    }
    
});


    
//Pick Client Post

router.post('/view-seperate-stationery-clients', function(req,res){
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
             var person =  req.body.person;
             console.log(person);
//    OngoingStationery.find({toWhom:person}, function(err, docs){
//        if(err) throw err;
//        else  res.render('view-seperate-stationery-clients',{OngoingStationery : docs});
//    }).sort({stationery_time: -1});
//        
//        
//        
        
        
       
    OngoingStationery.find({toWhom:person}).sort({stationery_date: -1, stationery_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-seperate-stationery-clients',{OngoingStationery : docs});
        
        });
        
        
        
    }
});




//View Stationery

router.get('/view-Ongoing-stationery', function(req,res){
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
//    OngoingStationery.find({}, function(err, docs){
//        if(err) throw err;
//        else  res.render('view-Ongoing-stationery',{OngoingStationery : docs});
//    }).sort({stationery_time: -1});
//        
//        
        
               
    OngoingStationery.find({}).sort({stationery_date: -1, stationery_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-Ongoing-stationery',{OngoingStationery : docs});
        
        });
        
        
        
    }
    
    
});


//Once submit has been hit
router.post('/Stationery/:id', function(req, res){
            
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
	OngoingStationery.update({_id: req.params.id},
	                   {
                        stationery_final_path : req.body.image,
                        owner : req.body.owner,
                        toWhom : req.body.toWhom
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/design/view-Ongoing-stationery');
				}
		 });
        
    }

    	 });






//Delete Stationery

router.post('/StationeryBranding/', function(req, res){
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        var path = req.body.path;
	OngoingStationery.findByIdAndRemove({_id: path}, 
	   function(err){
		if(err) throw err;
		else    res.redirect('/design/view-Ongoing-stationery');
	});
        
    }
    
});




//Upload Stationery

router.get('/upload-Ongoing-stationery', function(req,res){
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
    Clientuser.find({}, function(err, docs){
        var time = moment().format('LTS');
        if(err) throw err;
        else  res.render('upload-Ongoing-stationery',{Clientuser : docs});
    });
        
    }
    
});



//Init Upload

var Stationerystorage = multer.diskStorage({
     destination: './pwClient/vendor/upload/Ongoing/Stationery',
    filename : function(req, file, cb)
    {
//        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
        cb(null, file.originalname);

    }
 });



//Init Upload Stationery

var stationery_upload = multer({storage: Stationerystorage}).array('file',25);

 
//stationery Design-Upload Page
router.post('/upload-Ongoing-stationery',function(req,res,next){

        
        if(!req.user){
            res.redirect('/');
}
    
        else{
        
        
           stationery_upload(req, res, (err) => {
        console.log(req.files);


       for (var i = 0; i < req.files.length; i++)
           {
//            console.log(req.files[i].path);
            var StationeryFileName = req.files[i].filename;
            var removeStationery = req.files[i].path;
             var removefinalStationery =   removeStationery.substr(15);
//               console.log(removefinal);
               
               
         
        
                    let body = '';
            var brandType = req.body.brandtype;
            var toWhom = req.body.toWhom;
            var owner = "Promoworks";
            var stationery_final_path = req.files;


                 var newStationery = new OngoingStationery({

                    stationery_final_path: removefinalStationery,
                    stationery_file_name: StationeryFileName,
                    stationery_date: moment().format('MMMM Do YYYY'),
                    stationery_time: moment().format('LTS'),
                    brandtype: brandType,
                    owner: owner,
                    toWhom: toWhom,
                    Enable : "Enable",
                    Ongoing : "Ongoing",
                    Completed : "",
                    Seen : "",
                    Downloaded : ""

                });
               
                console.log(newStationery);
                OngoingStationery.createStationery(newStationery, function (err, stationery) {
                    if (err) throw err;

                });
                          }

            var msg = "Work has been uploaded \r";
            var msg2 = "URL : http://works.promo.works \r";
            var msg3 = "Sitemap : username -> password -> menu -> work-in-progress -> Stationery Design";
            var send = msg + msg2 + msg3;
                        var message = send;
                        Clientuser.findOne({ username: toWhom }, function(err, user) {
                         var mobile = user.mobile;
                    msg91.send(mobile, message, function(err, response){
                    console.log(err);
                    console.log(response); 
                        
                   res.redirect('/design/view-Ongoing-stationery');
                        });
                     });
        
      
                        

        
//        res.end("File is uploaded");
    
    });
      }
});






      

//logo stationery-Upload Page
router.post('/stationery', (req, res, next) => {
    
            
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
	OngoingStationery.update({_id: req.body.yd},
	                   {
                        Enable : "",
                        Disable : "Disable"
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
        
				   res.redirect('/design/view-Ongoing-stationery');
				}
		 });
            
        }
      if(req.body.enable == "Enable")
        {
          
            	OngoingStationery.update({_id: req.body.yd},
	                   {
                        Enable : "Enable",
                        Disable : ""
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/design/view-Ongoing-stationery');
				}
		 });
            
        }
    
    }

});



//Move Stationery Design-Completion Page
router.post('/MoveStationery', (req, res, next) => {
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        

    if(req.body.Ongoing == "Ongoing")
        {
	OngoingStationery.update({_id: req.body.path},
	                   {
                        Completed : "Completed",
                        Ongoing : ""
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
                    
                    console.log(OngoingStationery);
                    
                    
				   res.redirect('/design/view-Ongoing-stationery');
				}
		 });
            
        }

    
    }

});




//< !------------------------------------------------------------------------------------------------------Brochure Designs--------------------------------------------------------------------------------------------- !>
//< !------------------------------------------------------------------------------------------------------Brochure Designs--------------------------------------------------------------------------------------------- !>
//< !------------------------------------------------------------------------------------------------------Brochure Designs--------------------------------------------------------------------------------------------- !>



//Pick Client

router.get('/pick-seperate-brochure-clients', function(req,res){
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
    Clientuser.find({}, function(err, docs){
        if(err) throw err;
        else  res.render('pick-seperate-brochure-clients',{Clientuser : docs});
    });
        
    }
});


    
//Pick Client Post

router.post('/view-seperate-brochure-clients', function(req,res){
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
             var person =  req.body.person;
             console.log(person);
               
    OngoingBrochure.find({toWhom:person}).sort({brochure_date: -1, brochure_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-seperate-brochure-clients',{Brochure : docs});
        
        });
        
        
        
        
    }
});




//View Brochure

router.get('/view-Ongoing-brochure', function(req,res){
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
 
                       
    OngoingBrochure.find({}).sort({brochure_date: -1, brochure_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-Ongoing-brochure',{Brochure : docs});
        
        });
        
        
    }
});


    
//Once submit has been hit
router.post('/Brochure/:id', function(req, res){
    
            
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
	OngoingBrochure.update({_id: req.params.id},
	                   {
                        brochure_final_path : req.body.image,
                        owner : req.body.owner,
                        toWhom : req.body.toWhom
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/design/view-Ongoing-brochure');
				}
		 });

        
    }
    
    	 });






//Delete Brochure

router.post('/BrochureBranding/', function(req, res){
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        var path = req.body.path;
	OngoingBrochure.findByIdAndRemove({_id: path}, 
	   function(err){
		if(err) throw err;
		else    res.redirect('/design/view-Ongoing-brochure');
	});
        
    }
    
});




//Upload Brochure

router.get('/upload-Ongoing-brochure', function(req,res){
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
    Clientuser.find({}, function(err, docs){
        var time = moment().format('LTS');
        if(err) throw err;
        else  res.render('upload-Ongoing-brochure',{Clientuser : docs});
    });
        
    }
    
});




var Brochurestorage = multer.diskStorage({
    
     destination: './pwClient/vendor/upload/Ongoing/Brochure',
    filename : function(req, file, cb)
    {
//        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
        cb(null, file.originalname);

    }
 });




//Init Upload Brochure

var brochure_upload = multer({storage: Brochurestorage}).array('file', 25);

 


//brochure Design-Upload Page
router.post('/upload-Ongoing-brochure', (req, res, next) => {

        
        if(!req.user){
            res.redirect('/');
}
    
        else{
        
        
           brochure_upload(req, res, (err) => {
//        console.log(req.files);


       for (var i = 0; i < req.files.length; i++)
           {
//            console.log(req.files[i].path);
            var BrochureFileName = req.files[i].filename;
            var removeBrochure = req.files[i].path;
             var removefinalBrochure =   removeBrochure.substr(15);
//               console.log(removefinal);
               
               
         
        
                    let body = '';
            var brandType = req.body.brandtype;
            var toWhom = req.body.toWhom;
            var owner = "Promoworks";
            var brochure_final_path = req.files;


                   var newBrochure = new OngoingBrochure({

                    brochure_final_path: removefinalBrochure,
                    brochure_file_name: BrochureFileName,
                    brochure_date: moment().format('MMMM Do YYYY'),
                    brochure_time: moment().format('LTS'),
                    brandtype: brandType,
                    owner: owner,
                    toWhom: toWhom,
                    Enable : "Enable",
                    Ongoing : "Ongoing",
                    Completed : "",
                    Seen : "",
                    Downloaded : ""

                });
               
                console.log(newBrochure);
                OngoingBrochure.createBrochure(newBrochure, function (err, brochure) {
                    if (err) throw err;

                });
                          }

            var msg = "Work has been uploaded \r";
            var msg2 = "URL : http://works.promo.works \r";
            var msg3 = "Sitemap : username -> password -> menu -> work-in-progress -> Brochure Design";
            var send = msg + msg2 + msg3;
                        var message = send;
                        Clientuser.findOne({ username: toWhom }, function(err, user) {
                         var mobile = user.mobile;
                    msg91.send(mobile, message, function(err, response){
                    console.log(err);
                    console.log(response); 
                        
                   res.redirect('/design/view-Ongoing-brochure');
                        });
                     });
        
      
                        

        
//        res.end("File is uploaded");
    
    });
      }
});



      

//brochure-Upload Page
router.post('/brochure', (req, res, next) => {
    
            
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
	OngoingBrochure.update({_id: req.body.yd},
	                   {
                        Enable : "",
                        Disable : "Disable"
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/design/view-Ongoing-brochure');
				}
		 });
            
        }
      if(req.body.enable == "Enable")
        {
          
            	OngoingBrochure.update({_id: req.body.yd},
	                   {
                        Enable : "Enable",
                        Disable : ""
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/design/view-Ongoing-brochure');
				}
		 });
            
        }
    
    }

});







//Move Brochure Design-Completion Page
router.post('/MoveBrochure', (req, res, next) => {
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        

    if(req.body.Ongoing == "Ongoing")
        {
	OngoingBrochure.update({_id: req.body.path},
	                   {
                        Completed : "Completed",
                        Ongoing : ""
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
                    
                    console.log(OngoingBrochure);
                    
                    
				   res.redirect('/design/view-Ongoing-brochure');
				}
		 });
            
        }

    
    }

});




//< !------------------------------------------------------------------------------------------------------Menu Designs--------------------------------------------------------------------------------------------- !>
//< !------------------------------------------------------------------------------------------------------Menu Designs--------------------------------------------------------------------------------------------- !>
//< !------------------------------------------------------------------------------------------------------Menu Designs--------------------------------------------------------------------------------------------- !>



//Pick Client

router.get('/pick-seperate-menu-clients', function(req,res){
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
    Clientuser.find({}, function(err, docs){
        if(err) throw err;
        else  res.render('pick-seperate-menu-clients',{Clientuser : docs});
    });
        
        
    }
    
});


    
//Pick Client Post

router.post('/view-seperate-menu-clients', function(req,res){
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
             var person =  req.body.person;
             console.log(person);

        
            OngoingMenu.find({toWhom:person}).sort({menu_date: -1, menu_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-seperate-menu-clients',{Menu : docs});
        
        });
        
        
        
    }
    
});





//View Menu-card

router.get('/view-Ongoing-menu', function(req,res){
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
    
                               
    OngoingMenu.find({}).sort({menu_date: -1, menu_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-Ongoing-menu',{Menu : docs});
        
        });
        
        
        
    }
});


    
//Once submit has been hit
router.post('/Menu/:id', function(req, res){
    
            
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
	OngoingMenu.update({_id: req.params.id},
	                   {
                        menu_final_path : req.body.image,
                        owner : req.body.owner,
                        toWhom : req.body.toWhom
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/design/view-Ongoing-menu');
				}
		 });

        
    }
    
    	 });






//Delete Menu-card

router.post('/MenuBranding/', function(req, res){
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
       var path = req.body.path;
	OngoingMenu.findByIdAndRemove({_id: path}, 
	   function(err){
		if(err) throw err;
		else    res.redirect('/design/view-Ongoing-menu');
	});
        
    }
    
});




//Upload Menu-card

router.get('/upload-Ongoing-menu', function(req,res){
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    Clientuser.find({}, function(err, docs){
        var time = moment().format('LTS');
        if(err) throw err;
        else  res.render('upload-Ongoing-menu',{Clientuser : docs});
    });
        
    }
    
});




var Menustorage = multer.diskStorage({
     destination: './pwClient/vendor/upload/Ongoing/Menu-card',
    filename : function(req, file, cb)
    {
//        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
        cb(null, file.originalname);

    }
 });




//Init Upload Menu-card

var menu_upload = multer({storage: Menustorage}).array('file', 25);

 



//Menu Design-Upload Page
router.post('/upload-Ongoing-menu', (req, res, next) => {

        
        if(!req.user){
            res.redirect('/');
}
    
        else{
        
        
           menu_upload(req, res, (err) => {
//        console.log(req.files);


       for (var i = 0; i < req.files.length; i++)
           {
//            console.log(req.files[i].path);
            var MenuFileName = req.files[i].filename;
            var removeMenu = req.files[i].path;
             var removefinalMenu =   removeMenu.substr(15);
//               console.log(removefinal);
               
               
         
        
                    let body = '';
            var brandType = req.body.brandtype;
            var toWhom = req.body.toWhom;
            var owner = "Promoworks";
            var menu_final_path = req.files;


                    var newMenu = new OngoingMenu({

                    menu_final_path: removefinalMenu,
                    menu_file_name: MenuFileName,
                    menu_date: moment().format('MMMM Do YYYY'),
                    menu_time: moment().format('LTS'),
                    brandtype: brandType,
                    owner: owner,
                    toWhom: toWhom,
                    Enable : "Enable",
                    Ongoing : "Ongoing",
                    Completed : "",
                    Seen : "",
                    Downloaded : ""

                });
               
                console.log(newMenu);
                OngoingMenu.createMenu(newMenu, function (err, menu) {
                    if (err) throw err;

                });
                          }

            var msg = "Work has been uploaded \r";
            var msg2 = "URL : http://works.promo.works \r";
            var msg3 = "Sitemap : username -> password -> menu -> work-in-progress -> Menu Card Design";
            var send = msg + msg2 + msg3;
                        var message = send;
                        Clientuser.findOne({ username: toWhom }, function(err, user) {
                         var mobile = user.mobile;
                    msg91.send(mobile, message, function(err, response){
                    console.log(err);
                    console.log(response); 
                        
                   res.redirect('/design/view-Ongoing-menu');
                        });
                     });
        
      
                        

        
//        res.end("File is uploaded");
    
    });
      }
});




      //Menu-Upload Page
router.post('/menu', (req, res, next) => {
    
            
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
	OngoingMenu.update({_id: req.body.yd},
	                   {
                        Enable : "",
                        Disable : "Disable"
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/design/view-Ongoing-menu');
				}
		 });
            
        }
      if(req.body.enable == "Enable")
        {
          
            	OngoingMenu.update({_id: req.body.yd},
	                   {
                        Enable : "Enable",
                        Disable : ""
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/design/view-Ongoing-menu');
				}
		 });
            
        }
    
    }

});

      






//Move Menu Design-Completion Page
router.post('/MoveMenu', (req, res, next) => {
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        

    if(req.body.Ongoing == "Ongoing")
        {
	OngoingMenu.update({_id: req.body.path},
	                   {
                        Completed : "Completed",
                        Ongoing : ""
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
                    
                    console.log(OngoingMenu);
                    
                    
				   res.redirect('/design/view-Ongoing-menu');
				}
		 });
            
        }

    
    }

});




//< !------------------------------------------------------------------------------------------------------Landing Designs--------------------------------------------------------------------------------------------- !>
//< !------------------------------------------------------------------------------------------------------Landing Designs--------------------------------------------------------------------------------------------- !>
//< !------------------------------------------------------------------------------------------------------Landing Designs--------------------------------------------------------------------------------------------- !>





//Pick Client

router.get('/pick-seperate-landing-clients', function(req,res){
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
    Clientuser.find({}, function(err, docs){
        if(err) throw err;
        else  res.render('pick-seperate-landing-clients',{Clientuser : docs});
    }).sort({landing_time: -1});
        
    }
    
    
});


    
//Pick Client Post

router.post('/view-seperate-landing-clients', function(req,res){
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
             var person =  req.body.person;
             console.log(person);

                    OngoingLanding.find({toWhom:person}).sort({landing_date: -1, landing_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-seperate-landing-clients',{Landing : docs});
        
        });
        
        
        
    }
    
});




//View Landing-Page

router.get('/view-Ongoing-landing', function(req,res){
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        

        
            OngoingLanding.find({}).sort({landing_date: -1, landing_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-Ongoing-landing',{Landing : docs});
        
        });
        
        
        
    }
    
});

    

    
//Once submit has been hit
router.post('/Landing/:id', function(req, res){
    
            
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
	OngoingLanding.update({_id: req.params.id},
	                   {
                        landing_final_path : req.body.image,
                        owner : req.body.owner,
                        toWhom : req.body.toWhom
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/design/view-Ongoing-landing');
				}
		 });
        
    }

    	 });



//Delete Landing-Page

router.post('/LandingBranding/', function(req, res){
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
       var path = req.body.path;
	OngoingLanding.findByIdAndRemove({_id: path}, 
	   function(err){
		if(err) throw err;
		else    res.redirect('/design/view-Ongoing-landing');
	});
        
    }
    
});




//Upload Landing-Page

router.get('/upload-Ongoing-landing', function(req,res){
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    Clientuser.find({}, function(err, docs){
        var time = moment().format('LTS');
        if(err) throw err;
        else  res.render('upload-Ongoing-landing',{Clientuser : docs});
    });
        
    }
    
});




var Landingstorage = multer.diskStorage({
     destination: './pwClient/vendor/upload/Ongoing/Landing',
    filename : function(req, file, cb)
    {
//        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
        cb(null, file.originalname);

    }
 });




//Init Upload Landing-Page

var landing_upload = multer({storage: Landingstorage}).array('file', 25);

//Landing Design-Upload Page
router.post('/upload-Ongoing-landing', (req, res, next) => {

        
        if(!req.user){
            res.redirect('/');
}
    
        else{
        
        
           landing_upload(req, res, (err) => {
//        console.log(req.files);


       for (var i = 0; i < req.files.length; i++)
           {
//            console.log(req.files[i].path);
            var LandingFileName = req.files[i].filename;
            var removeLanding = req.files[i].path;
             var removefinalLanding =   removeLanding.substr(15);
//               console.log(removefinal);
               
               
         
        
                    let body = '';
            var brandType = req.body.brandtype;
            var toWhom = req.body.toWhom;
            var owner = "Promoworks";
            var landing_final_path = req.files;


                    var newLanding = new OngoingLanding({

                    landing_final_path: removefinalLanding,
                    landing_file_name: LandingFileName,
                    landing_date: moment().format('MMMM Do YYYY'),
                    landing_time: moment().format('LTS'),
                    brandtype: brandType,
                    owner: owner,
                    toWhom: toWhom,
                    Enable : "Enable",
                    Ongoing : "Ongoing",
                    Completed : "",
                    Seen : "",
                    Downloaded : ""

                });
               
                console.log(newLanding);
                OngoingLanding.createLanding(newLanding, function (err, landing) {
                    if (err) throw err;

                });
                          }

            var msg = "Work has been uploaded \r";
            var msg2 = "URL : http://works.promo.works \r";
            var msg3 = "Sitemap : username -> password -> menu -> work-in-progress -> Landing Page Design";
            var send = msg + msg2 + msg3;
                        var message = send;
                        Clientuser.findOne({ username: toWhom }, function(err, user) {
                         var mobile = user.mobile;
                    msg91.send(mobile, message, function(err, response){
                    console.log(err);
                    console.log(response); 
                        
                   res.redirect('/design/view-Ongoing-landing');
                        });
                     });
        
      
                        

        
//        res.end("File is uploaded");
    
    });
      }
});



     //landing-Upload Page
       
router.post('/landing', (req, res, next) => {
    
            
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
	OngoingLanding.update({_id: req.body.yd},
	                   {
                        Enable : "",
                        Disable : "Disable"
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/design/view-Ongoing-landing');
				}
		 });
            
        }
      if(req.body.enable == "Enable")
        {
          
            	OngoingLanding.update({_id: req.body.yd},
	                   {
                        Enable : "Enable",
                        Disable : ""
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/design/view-Ongoing-landing');
				}
		 });
            
        }
    
    }

});





//Move Landing Design-Completion Page
router.post('/MoveLanding', (req, res, next) => {
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        

    if(req.body.Ongoing == "Ongoing")
        {
	OngoingLanding.update({_id: req.body.path},
	                   {
                        Completed : "Completed",
                        Ongoing : ""
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
                    
                    console.log(OngoingLanding);
                    
                    
				   res.redirect('/design/view-Ongoing-landing');
				}
		 });
            
        }

    
    }

});


//< !------------------------------------------------------------------------------------------------------Package Designs--------------------------------------------------------------------------------------------- !>
//< !------------------------------------------------------------------------------------------------------Package Designs--------------------------------------------------------------------------------------------- !>
//< !------------------------------------------------------------------------------------------------------Package Designs--------------------------------------------------------------------------------------------- !>




//Pick Client

router.get('/pick-seperate-package-clients', function(req,res){
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
    Clientuser.find({}, function(err, docs){
        if(err) throw err;
        else  res.render('pick-seperate-package-clients',{Clientuser : docs});
    });
        
    }
    
});


    
//Pick Client Post

router.post('/view-seperate-package-clients', function(req,res){
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
             var person =  req.body.person;
             console.log(person);

    OngoingPackage.find({toWhom:person}).sort({package_date: -1, package_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-seperate-package-clients',{Package : docs});
        
        });
        
        
        
    }
    
});



//View Package

router.get('/view-Ongoing-package', function(req,res){
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
    OngoingPackage.find({}).sort({package_date: -1, package_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-Ongoing-package',{Package : docs});
        
        });
        
        
        
    }
    
});


//Once submit has been hit
router.post('/Package/:id', function(req, res){
    
            
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
	OngoingPackage.update({_id: req.params.id},
	                   {
                        package_final_path : req.body.image,
                        owner : req.body.owner,
                        toWhom : req.body.toWhom
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/design/view-Ongoing-package');
				}
		 });
    }
    	 });





//Delete Package

router.post('/PackageBranding/', function(req, res){
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        var path = req.body.path;
	OngoingPackage.findByIdAndRemove({_id: path}, 
	   function(err){
		if(err) throw err;
		else    res.redirect('/design/view-Ongoing-package');
	});
        
    }
    
});




//Upload Package

router.get('/upload-Ongoing-package', function(req,res){
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    Clientuser.find({}, function(err, docs){
        var time = moment().format('LTS');
        if(err) throw err;
        else  res.render('upload-Ongoing-package',{Clientuser : docs});
    });
        
    }
    
});




var Packagestorage = multer.diskStorage({
     destination: './pwClient/vendor/upload/Ongoing/Package',
    filename : function(req, file, cb)
    {
//        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
        cb(null, file.originalname);

    }
 });




//Init Upload Package

var package_upload = multer({storage: Packagestorage}).array('file', 25);

 


//Package Design-Upload Page
router.post('/upload-Ongoing-package', (req, res, next) => {

        
        if(!req.user){
            res.redirect('/');
}
    
        else{
        
        
           package_upload(req, res, (err) => {
//        console.log(req.files);


       for (var i = 0; i < req.files.length; i++)
           {
//            console.log(req.files[i].path);
            var PackageFileName = req.files[i].filename;
            var removePackage = req.files[i].path;
             var removefinalPackage =   removePackage.substr(15);
//               console.log(removefinal);
               
               
         
        
                    let body = '';
            var brandType = req.body.brandtype;
            var toWhom = req.body.toWhom;
            var owner = "Promoworks";
            var package_final_path = req.files;


                    var newPackage = new OngoingPackage({

                    package_final_path: removefinalPackage,
                    package_file_name: PackageFileName,
                    package_date: moment().format('MMMM Do YYYY'),
                    package_time: moment().format('LTS'),
                    brandtype: brandType,
                    owner: owner,
                    toWhom: toWhom,
                    Enable : "Enable",
                    Ongoing : "Ongoing",
                    Completed : "",
                    Seen : "",
                    Downloaded : ""

                });
               
              console.log(newPackage);
                OngoingPackage.createPackage(newPackage, function (err, package) {
                    if (err) throw err;

                });
                          }

            var msg = "Work has been uploaded \r";
            var msg2 = "URL : http://works.promo.works \r";
            var msg3 = "Sitemap : username -> password -> menu -> work-in-progress -> Package Design";
            var send = msg + msg2 + msg3;
                        var message = send;
                        Clientuser.findOne({ username: toWhom }, function(err, user) {
                         var mobile = user.mobile;
                    msg91.send(mobile, message, function(err, response){
                    console.log(err);
                    console.log(response); 
                        
                   res.redirect('/design/view-Ongoing-package');
                        });
                     });
        
      
                        

        
//        res.end("File is uploaded");
    
    });
      }
});


                  


//Package Design-Upload Page
router.post('/package', (req, res, next) => {
    
            
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
	OngoingPackage.update({_id: req.body.yd},
	                   {
                        Enable : "",
                        Disable : "Disable"
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/design/view-Ongoing-package');
				}
		 });
            
        }
      if(req.body.enable == "Enable")
        {
          
            	OngoingPackage.update({_id: req.body.yd},
	                   {
                        Enable : "Enable",
                        Disable : ""
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/design/view-Ongoing-package');
				}
		 });
            
        }
    }


});








//Move Package Design-Completion Page
router.post('/MovePackage', (req, res, next) => {
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        

    if(req.body.Ongoing == "Ongoing")
        {
	OngoingPackage.update({_id: req.body.path},
	                   {
                        Completed : "Completed",
                        Ongoing : ""
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
                    
                    console.log(OngoingPackage);
                    
                    
				   res.redirect('/design/view-Ongoing-package');
				}
		 });
            
        }

    
    }

});

//< !------------------------------------------------------------------------------------------------------Banner Designs--------------------------------------------------------------------------------------------- !>
//< !------------------------------------------------------------------------------------------------------Banner Designs--------------------------------------------------------------------------------------------- !>
//< !------------------------------------------------------------------------------------------------------Banner Designs--------------------------------------------------------------------------------------------- !>



//Pick Client

router.get('/pick-seperate-banner-clients', function(req,res){
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
    Clientuser.find({}, function(err, docs){
        if(err) throw err;
        else  res.render('pick-seperate-banner-clients',{Clientuser : docs});
    });
        
    }
    
});


    
//Pick Client Post

router.post('/view-seperate-banner-clients', function(req,res){
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
             var person =  req.body.person;
             console.log(person);

        
            OngoingBanner.find({toWhom:person}).sort({banner_date: -1, banner_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-seperate-banner-clients',{Banner : docs});
        
        });
        
        
        
    }
});




//View banner

router.get('/view-Ongoing-banner', function(req,res){
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {

            OngoingBanner.find({}).sort({banner_date: -1, banner_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-Ongoing-banner',{Banner : docs});
        
        });
        
        
        
    }
    
});



    
//Once submit has been hit
router.post('/Banner/:id', function(req, res){
    
            
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
	OngoingBanner.update({_id: req.params.id},
	                   {
                        banner_final_path : req.body.image,
                        owner : req.body.owner,
                        toWhom : req.body.toWhom
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/design/view-Ongoing-banner');
				}
		 });
    }
    	 });




//Delete banner

router.post('/BannerBranding/', function(req, res){
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        var path = req.body.path;
	OngoingBanner.findByIdAndRemove({_id: path}, 
	   function(err){
		if(err) throw err;
		else    res.redirect('/design/view-Ongoing-banner');
	});
        
    }
});




//Upload banner

router.get('/upload-Ongoing-banner', function(req,res){
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
    Clientuser.find({}, function(err, docs){
        var time = moment().format('LTS');
        if(err) throw err;
        else  res.render('upload-Ongoing-banner',{Clientuser : docs});
    });
        
    }
    
});




var Bannerstorage = multer.diskStorage({
     destination: './pwClient/vendor/upload/Ongoing/Banner',
    filename : function(req, file, cb)
    {
//        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
        cb(null, file.originalname);

    }
 });




//Init Upload banner

var banner_upload = multer({storage: Bannerstorage}).array('file', 25);

 



//banner Design-Upload Page
router.post('/upload-Ongoing-banner', (req, res, next) => {

        
        if(!req.user){
            res.redirect('/');
}
    
        else{
        
        
           banner_upload(req, res, (err) => {
//        console.log(req.files);


       for (var i = 0; i < req.files.length; i++)
           {
//            console.log(req.files[i].path);
            var BannerFileName = req.files[i].filename;
            var removeBanner = req.files[i].path;
             var removefinalBanner =   removeBanner.substr(15);
//               console.log(removefinal);
               
               
         
        
                    let body = '';
            var brandType = req.body.brandtype;
            var toWhom = req.body.toWhom;
            var owner = "Promoworks";
            var banner_final_path = req.files;


                var newBanner = new OngoingBanner({

                    banner_final_path: removefinalBanner,
                    banner_file_name: BannerFileName,
                    banner_date: moment().format('MMMM Do YYYY'),
                    banner_time: moment().format('LTS'),
                    brandtype: brandType,
                    owner: owner,
                    toWhom: toWhom,
                    Enable : "Enable",
                    Ongoing : "Ongoing",
                    Completed : "",
                    Seen : "",
                    Downloaded : ""

                });
               
                console.log(newBanner);
                OngoingBanner.createBanner(newBanner, function (err, banner) {
                    if (err) throw err;

                });
                          }

            var msg = "Work has been uploaded \r";
            var msg2 = "URL : http://works.promo.works \r";
            var msg3 = "Sitemap : username -> password -> menu -> work-in-progress -> Banner Design";
            var send = msg + msg2 + msg3;
                        var message = send;
                        Clientuser.findOne({ username: toWhom }, function(err, user) {
                         var mobile = user.mobile;
                    msg91.send(mobile, message, function(err, response){
                    console.log(err);
                    console.log(response); 
                        
                   res.redirect('/design/view-Ongoing-banner');
                        });
                     });
        
      
                        

        
//        res.end("File is uploaded");
    
    });
      }
});




//banner Design-Upload Page
router.post('/banner', (req, res, next) => {
            
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
	OngoingBanner.update({_id: req.body.yd},
	                   {
                        Enable : "",
                        Disable : "Disable"
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/design/view-Ongoing-banner');
				}
		 });
            
        }
      if(req.body.enable == "Enable")
        {
          
            	OngoingBanner.update({_id: req.body.yd},
	                   {
                        Enable : "Enable",
                        Disable : ""
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/design/view-Ongoing-banner');
				}
		 });
            
        }
    
    }

});





//Move Banner Design-Completion Page
router.post('/MoveBanner', (req, res, next) => {
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        

    if(req.body.Ongoing == "Ongoing")
        {
	OngoingBanner.update({_id: req.body.path},
	                   {
                        Completed : "Completed",
                        Ongoing : ""
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
                    
                    console.log(OngoingBanner);
                    
                    
				   res.redirect('/design/view-Ongoing-banner');
				}
		 });
            
        }

    
    }

});
//< !------------------------------------------------------------------------------------------------------Shirt Designs--------------------------------------------------------------------------------------------- !>
//< !------------------------------------------------------------------------------------------------------Shirt Designs--------------------------------------------------------------------------------------------- !>
//< !------------------------------------------------------------------------------------------------------Shirt Designs--------------------------------------------------------------------------------------------- !>





//Pick Client

router.get('/pick-seperate-shirt-clients', function(req,res){
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
    Clientuser.find({}, function(err, docs){
        if(err) throw err;
        else  res.render('pick-seperate-shirt-clients',{Clientuser : docs});
    });
        
    }
    
});


    
//Pick Client Post

router.post('/view-seperate-shirt-clients', function(req,res){
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
             var person =  req.body.person;
             console.log(person);

        
        
                    OngoingShirt.find({toWhom:person}).sort({shirt_date: -1, shirt_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-seperate-shirt-clients',{Shirt : docs});
        
        });
        
        
        
    }
    
});





//View shirt

router.get('/view-Ongoing-shirt', function(req,res){
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
    
      OngoingShirt.find({}).sort({shirt_date: -1, shirt_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-Ongoing-shirt',{Shirt : docs});
        
        });
        
        
        
    }
});


    
//Once submit has been hit
router.post('/Shirt/:id', function(req, res){
    
            
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
	OngoingShirt.update({_id: req.params.id},
	                   {
                        shirt_final_path : req.body.image,
                        owner : req.body.owner,
                        toWhom : req.body.toWhom
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/design/view-Ongoing-shirt');
				}
		 });
    }
    	 });





//Delete shirt

router.post('/ShirtBranding/', function(req, res){
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        var path = req.body.path;
	OngoingShirt.findByIdAndRemove({_id: path}, 
	   function(err){
		if(err) throw err;
		else    res.redirect('/design/view-Ongoing-shirt');
	});
        
        
    }
    
});




//Upload shirt

router.get('/upload-Ongoing-shirt', function(req,res){
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
    Clientuser.find({}, function(err, docs){
        var time = moment().format('LTS');
        if(err) throw err;
        else  res.render('upload-Ongoing-shirt',{Clientuser : docs});
    });
        
        
    }
    
});




var Shirtstorage = multer.diskStorage({
     destination: './pwClient/vendor/upload/Ongoing/Shirt',
    filename : function(req, file, cb)
    {
//        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
        cb(null, file.originalname);

    }
 });




//Init Upload shirt

var shirt_upload = multer({storage: Shirtstorage}).array('file', 25);

 


//Shirt Design-Upload Page
router.post('/upload-Ongoing-shirt', (req, res, next) => {

        
        if(!req.user){
            res.redirect('/');
}
    
        else{
        
        
           shirt_upload(req, res, (err) => {
//        console.log(req.files);


       for (var i = 0; i < req.files.length; i++)
           {
//            console.log(req.files[i].path);
            var ShirtFileName = req.files[i].filename;
            var removeShirt = req.files[i].path;
             var removefinalShirt =   removeShirt.substr(15);
//               console.log(removefinal);
               
               
         
        
                    let body = '';
            var brandType = req.body.brandtype;
            var toWhom = req.body.toWhom;
            var owner = "Promoworks";
            var shirt_final_path = req.files;


                var newShirt = new OngoingShirt({

                    shirt_final_path: removefinalShirt,
                    shirt_file_name: ShirtFileName,
                    shirt_date: moment().format('MMMM Do YYYY'),
                    shirt_time: moment().format('LTS'),
                    brandtype: brandType,
                    owner: owner,
                    toWhom: toWhom,
                    Enable : "Enable",
                    Ongoing : "Ongoing",
                    Completed : "",
                    Seen : "",
                    Downloaded : ""

                });
               
                console.log(newShirt);
                OngoingShirt.createShirt(newShirt, function (err, shirt) {
                    if (err) throw err;

                });
                          }

            var msg = "Work has been uploaded \r";
            var msg2 = "URL : http://works.promo.works \r";
            var msg3 = "Sitemap : username -> password -> menu -> work-in-progress -> TShirt Design";
            var send = msg + msg2 + msg3;
                        var message = send;
                        Clientuser.findOne({ username: toWhom }, function(err, user) {
                         var mobile = user.mobile;
                    msg91.send(mobile, message, function(err, response){
                    console.log(err);
                    console.log(response); 
                        
                   res.redirect('/design/view-Ongoing-shirt');
                        });
                     });
        
      
                        

        
//        res.end("File is uploaded");
    
    });
      }
});




      

       
//shirt Design-Upload Page
router.post('/shirt', (req, res, next) => {
    
            
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
	OngoingShirt.update({_id: req.body.yd},
	                   {
                        Enable : "",
                        Disable : "Disable"
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/design/view-Ongoing-shirt');
				}
		 });
            
        }
      if(req.body.enable == "Enable")
        {
          
            	OngoingShirt.update({_id: req.body.yd},
	                   {
                        Enable : "Enable",
                        Disable : ""
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/design/view-Ongoing-shirt');
				}
		 });
            
        }
    
    }

});





//Move Shirt Design-Completion Page
router.post('/MoveShirt', (req, res, next) => {
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        

    if(req.body.Ongoing == "Ongoing")
        {
	OngoingShirt.update({_id: req.body.path},
	                   {
                        Completed : "Completed",
                        Ongoing : ""
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
                    
                    console.log(OngoingShirt);
                    
                    
				   res.redirect('/design/view-Ongoing-shirt');
				}
		 });
            
        }

    
    }

});


//< !------------------------------------------------------------------------------------------------------In-Shop Designs--------------------------------------------------------------------------------------------- !>
//< !------------------------------------------------------------------------------------------------------In-Shop Designs--------------------------------------------------------------------------------------------- !>
//< !------------------------------------------------------------------------------------------------------In-Shop Designs--------------------------------------------------------------------------------------------- !>




//Pick Client

router.get('/pick-seperate-shop-clients', function(req,res){
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    Clientuser.find({}, function(err, docs){
        if(err) throw err;
        else  res.render('pick-seperate-shop-clients',{Clientuser : docs});
    });
        
    }
});

    
//Pick Client Post

router.post('/view-seperate-shop-clients', function(req,res){
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
             var person =  req.body.person;
             console.log(person);

               
                    OngoingShop.find({toWhom:person}).sort({shop_date: -1, shop_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-seperate-shop-clients',{Shop : docs});
        
        });
        
        
        
    }
});




//View In-Shop

router.get('/view-Ongoing-shop', function(req,res){
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
              OngoingShop.find({}).sort({shop_date: -1, shop_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-Ongoing-shop',{Shop : docs});
        
        });
        
        
        
        
    }
});



//Once submit has been hit
router.post('/Shop/:id', function(req, res){
    
            
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
	OngoingShop.update({_id: req.params.id},
	                   {
                        shop_final_path : req.body.image,
                        owner : req.body.owner,
                        toWhom : req.body.toWhom
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/design/view-Ongoing-shop');
				}
		 });
    }
    	 });





//Delete In-Shop

router.post('/ShopBranding/', function(req, res){
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        var path = req.body.path;
	OngoingShop.findByIdAndRemove({_id: path}, 
	   function(err){
		if(err) throw err;
		else    res.redirect('/design/view-Ongoing-shop');
	});
        
        
    }
});




//Upload In-Shop

router.get('/upload-Ongoing-shop', function(req,res){
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
    Clientuser.find({}, function(err, docs){
        var time = moment().format('LTS');
        if(err) throw err;
        else  res.render('upload-Ongoing-shop',{Clientuser : docs});
    });
        
        
    }
});




var Shopstorage = multer.diskStorage({
     destination: './pwClient/vendor/upload/Ongoing/In-shop',
    filename : function(req, file, cb)
    {
//        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
        cb(null, file.originalname);

    }
 });




//Init Upload In-Shop

var shop_upload = multer({storage: Shopstorage}).array('file', 25);

 



//Shop Design-Upload Page
router.post('/upload-Ongoing-shop', (req, res, next) => {

        
        if(!req.user){
            res.redirect('/');
}
    
        else{
        
        
           shop_upload(req, res, (err) => {
//        console.log(req.files);


       for (var i = 0; i < req.files.length; i++)
           {
//            console.log(req.files[i].path);
            var ShopFileName = req.files[i].filename;
            var removeShop = req.files[i].path;
             var removefinalShop =   removeShop.substr(15);
//               console.log(removefinal);
               
               
         
        
                    let body = '';
            var brandType = req.body.brandtype;
            var toWhom = req.body.toWhom;
            var owner = "Promoworks";
            var shop_final_path = req.files;


                var newShop = new OngoingShop({

                    shop_final_path: removefinalShop,
                    shop_file_name: ShopFileName,
                    shop_date: moment().format('MMMM Do YYYY'),
                    shop_time: moment().format('LTS'),
                    brandtype: brandType,
                    owner: owner,
                    toWhom: toWhom,
                    Enable : "Enable",
                    Ongoing : "Ongoing",
                    Completed : "",
                    Seen : "",
                    Downloaded : ""

                });
               
                console.log(newShop);
                OngoingShop.createShop(newShop, function (err, shirt) {
                    if (err) throw err;

                });
                          }

            var msg = "Work has been uploaded \r";
            var msg2 = "URL : http://works.promo.works \r";
            var msg3 = "Sitemap : username -> password -> menu -> work-in-progress -> In-Shop Design";
            var send = msg + msg2 + msg3;
                        var message = send;
                        Clientuser.findOne({ username: toWhom }, function(err, user) {
                         var mobile = user.mobile;
                    msg91.send(mobile, message, function(err, response){
                    console.log(err);
                    console.log(response); 
                        
                   res.redirect('/design/view-Ongoing-shop');
                        });
                     });
        
      
                        

        
//        res.end("File is uploaded");
    
    });
      }
});




      //IN-shop Design-Upload Page
router.post('/shop', (req, res, next) => {
            
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
	OngoingShop.update({_id: req.body.yd},
	                   {
                        Enable : "",
                        Disable : "Disable"
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/design/view-Ongoing-shop');
				}
		 });
            
        }
      if(req.body.enable == "Enable")
        {
          
            	OngoingShop.update({_id: req.body.yd},
	                   {
                        Enable : "Enable",
                        Disable : ""
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/design/view-Ongoing-shop');
				}
		 });
            
        }
    
    }

});





//Move Shop Design-Completion Page
router.post('/MoveShop', (req, res, next) => {
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        

    if(req.body.Ongoing == "Ongoing")
        {
	OngoingShop.update({_id: req.body.path},
	                   {
                        Completed : "Completed",
                        Ongoing : ""
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
                    
                    console.log(OngoingShop);
                    
                    
				   res.redirect('/design/view-Ongoing-shop');
				}
		 });
            
        }

    
    }

});



//< !------------------------------------------------------------------------------------------------------Hoarding Designs--------------------------------------------------------------------------------------------- !>
//< !------------------------------------------------------------------------------------------------------Hoarding Designs--------------------------------------------------------------------------------------------- !>
//< !------------------------------------------------------------------------------------------------------Hoarding Designs--------------------------------------------------------------------------------------------- !>




//Pick Client

router.get('/pick-seperate-hoarding-clients', function(req,res){
    
            
    if(!req.user){
        res.redirect('/');
}
else
{
    
    
Clientuser.find({}, function(err, docs){
    if(err) throw err;
    else  res.render('pick-seperate-hoarding-clients',{Clientuser : docs});
});
    
}
});


//Pick Client Post

router.post('/view-seperate-hoarding-clients', function(req,res){

        
    if(!req.user){
        res.redirect('/');
}
else
{
    
         var person =  req.body.person;
         console.log(person);

           
                OngoingHoarding.find({toWhom:person}).sort({hoarding_date: -1, hoarding_time: -1}).exec(function(err, docs){
    if(err) throw err;
    else  res.render('view-seperate-hoarding-clients',{Hoarding : docs});
    
    });
    
    
    
}
});




//View In-Shop

router.get('/view-Ongoing-hoarding', function(req,res){

        
    if(!req.user){
        res.redirect('/');
}
else
{
    
          OngoingHoarding.find({}).sort({hoarding_date: -1, hoarding_time: -1}).exec(function(err, docs){
    if(err) throw err;
    else  res.render('view-Ongoing-hoarding',{Hoarding : docs});
    
    });
    
    
    
    
}
});



//Once submit has been hit
router.post('/Hoarding/:id', function(req, res){

        
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
OngoingHoarding.update({_id: req.params.id},
                   {
                    hoarding_final_path : req.body.image,
                    owner : req.body.owner,
                    toWhom : req.body.toWhom
           }, function(err){
             if(err) res.json(err);
            else
            {
               res.redirect('/design/view-Ongoing-hoarding');
            }
     });
}
     });





//Delete Hoarding

router.post('/HoardingBranding/', function(req, res){

        
    if(!req.user){
        res.redirect('/');
}
else
{
    var path = req.body.path;
OngoingHoarding.findByIdAndRemove({_id: path}, 
   function(err){
    if(err) throw err;
    else    res.redirect('/design/view-Ongoing-hoarding');
});
    
    
}
});




//Upload Hoarding

router.get('/upload-Ongoing-hoarding', function(req,res){

        
    if(!req.user){
        res.redirect('/');
}
else
{
    
Clientuser.find({}, function(err, docs){
    var time = moment().format('LTS');
    if(err) throw err;
    else  res.render('upload-Ongoing-hoarding',{Clientuser : docs});
});
    
    
}
});




var Hoardingstorage = multer.diskStorage({
 destination: './pwClient/vendor/upload/Ongoing/Hoarding',
filename : function(req, file, cb)
{
//        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
    cb(null, file.originalname);

}
});




//Init Upload Hoarding

var hoarding_upload = multer({storage: Hoardingstorage}).array('file', 25);





//Hoarding Design-Upload Page
router.post('/upload-Ongoing-hoarding', (req, res, next) => {

    
    if(!req.user){
        res.redirect('/');
}

    else{
    
    
        hoarding_upload(req, res, (err) => {
//        console.log(req.files);


   for (var i = 0; i < req.files.length; i++)
       {
//            console.log(req.files[i].path);
        var HoardingFileName = req.files[i].filename;
        var removeHoarding = req.files[i].path;
         var removefinalHoarding =   removeHoarding.substr(15);
//               console.log(removefinal);
           
           
     
    
                let body = '';
        var brandType = req.body.brandtype;
        var toWhom = req.body.toWhom;
        var owner = "Promoworks";
        var hoarding_final_path = req.files;


            var newHoarding = new OngoingHoarding({

                hoarding_final_path: removefinalHoarding,
                hoarding_file_name: HoardingFileName,
                hoarding_date: moment().format('MMMM Do YYYY'),
                hoarding_time: moment().format('LTS'),
                brandtype: brandType,
                owner: owner,
                toWhom: toWhom,
                Enable : "Enable",
                Ongoing : "Ongoing",
                Completed : "",
                Seen : "",
                Downloaded : ""

            });
           
            console.log(newHoarding);
            OngoingHoarding.createHoarding(newHoarding, function (err, hoarding) {
                if (err) throw err;

            });
                      }

        var msg = "Work has been uploaded \r";
        var msg2 = "URL : http://works.promo.works \r";
        var msg3 = "Sitemap : username -> password -> menu -> work-in-progress -> Hoarding Design";
        var send = msg + msg2 + msg3;
                    var message = send;
                    Clientuser.findOne({ username: toWhom }, function(err, user) {
                     var mobile = user.mobile;
                msg91.send(mobile, message, function(err, response){
                console.log(err);
                console.log(response); 
                    
               res.redirect('/design/view-Ongoing-hoarding');
                    });
                 });
    
  
                    

    
//        res.end("File is uploaded");

});
  }
});




  //Hoarding Page
router.post('/hoarding', (req, res, next) => {
        
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
OngoingHoarding.update({_id: req.body.yd},
                   {
                    Enable : "",
                    Disable : "Disable"
           }, function(err){
             if(err) res.json(err);
            else
            {
               res.redirect('/design/view-Ongoing-hoarding');
            }
     });
        
    }
  if(req.body.enable == "Enable")
    {
      
            OngoingHoarding.update({_id: req.body.yd},
                   {
                    Enable : "Enable",
                    Disable : ""
           }, function(err){
             if(err) res.json(err);
            else
            {
               res.redirect('/design/view-Ongoing-hoarding');
            }
     });
        
    }

}

});





//Move Hoarding Page
router.post('/MoveHoarding', (req, res, next) => {

        
    if(!req.user){
        res.redirect('/');
}
else
{
    

if(req.body.Ongoing == "Ongoing")
    {
OngoingHoarding.update({_id: req.body.path},
                   {
                    Completed : "Completed",
                    Ongoing : ""
           }, function(err){
             if(err) res.json(err);
            else
            {
                
                console.log(OngoingHoarding);
                
                
               res.redirect('/design/view-Ongoing-hoarding');
            }
     });
        
    }


}

});

module.exports = router;