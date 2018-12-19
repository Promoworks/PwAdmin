const express = require("express");
const router = express.Router();
var Clientuser = require('../models/clientuser');
var moment = require('moment');
var path = require('path');
var fs = require('fs');
var msg91 = require("msg91")("217817A7GCYaZrZEq5b0fc359", "PWORKS", "4" );
var multer  = require('multer');
var User = require('../models/user');
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







    //< !--------------------------------------------------------------------------------Logo CompletedDesigns--------------------------------------------------------------------------------------------- !>
    //< !--------------------------------------------------------------------------------Logo CompletedDesigns--------------------------------------------------------------------------------------------- !>
    //< !--------------------------------------------------------------------------------Logo CompletedDesigns--------------------------------------------------------------------------------------------- !>



//View Logo

router.get('/view-Completed-logo', function(req,res){
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
//    Logo.find({}, function(err, docs){
//        if(err) throw err;
//        else  res.render('view-Completed-logo',{Logo : docs});
//    }).sort({logo_date: -1});
//          
//        
//        

        Logo.find({}).sort({logo_date: -1, logo_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-Completed-logo',{Logo : docs});
        
        });
  
        
    }
});

//Delete Logo

router.post('/CompletedLogo/', function(req, res){
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
        var path = req.body.path;
	Logo.findByIdAndRemove({_id: path}, 
	   function(err){
		if(err) throw err;
		else    res.redirect('/CompletedDesign/view-Completed-logo');
	});
        
    }
    
});




//Upload Logo

router.get('/upload-Completed-logo', function(req,res){
            if(!req.user){
            res.redirect('/');
}
    else
    {
        
    Clientuser.find({}, function(err, docs){
        var time = moment().format('LTS');
        if(err) throw err;
        else  res.render('upload-Completed-logo',{Clientuser : docs});
    });
        
    }
    
});




var CompletedLogostorage = multer.diskStorage({
     destination: './pwClient/vendor/upload/Completed/Logo',
    filename : function(req, file, cb)
    {
//        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
        cb(null, file.originalname);

    }
 });




//Init Upload

var CompletedLogo_upload = multer({storage: CompletedLogostorage}).array('file', 25);

 


router.post('/upload-Completed-logo',function(req,res,next){

        
        if(!req.user){
            res.redirect('/');
}
    
        else{
        
        
           CompletedLogo_upload(req, res, (err) => {
//        console.log(req.files);


       for (var i = 0; i < req.files.length; i++)
           {
//            console.log(req.files[i].path);
            var LogoFileName = req.files[i].filename;
            var removeLogo = req.files[i].path;
             var removefinalLogo =   removeLogo.substr(15);
//               console.log(removefinal);
               
               
         
        
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
                    Ongoing : "",
                    Completed : "Completed",
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
             var msg3 = "Sitemap : username -> password -> menu -> Completed -> Logo Design";
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




      


//< !------------------------------------------------------------------------------------Stationery CompletedDesigns--------------------------------------------------------------------------------------------- !>
//< !------------------------------------------------------------------------------------Stationery CompletedDesigns--------------------------------------------------------------------------------------------- !>
//< !------------------------------------------------------------------------------------Stationery CompletedDesigns--------------------------------------------------------------------------------------------- !>


//View Stationery

router.get('/view-Completed-stationery', function(req,res){
    
            if(!req.user){
            res.redirect('/');
}
    else
    {
        

    OngoingStationery.find({}).sort({stationery_date: -1, stationery_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-Completed-stationery',{CompletedStationery : docs});
        
        });
        
        
        
    }
    
});

//Delete Stationery

router.post('/CompletedStationery/', function(req, res){
    
            if(!req.user){
            res.redirect('/');
}
    else
    {
        var path = req.body.path;
	OngoingStationery.findByIdAndRemove({_id: path}, 
	   function(err){
		if(err) throw err;
		else    res.redirect('/CompletedDesign/view-Completed-stationery');
	});
        
    }
    
});




//Upload Stationery

router.get('/upload-Completed-stationery', function(req,res){
            if(!req.user){
            res.redirect('/');
}
    else
    {
        
    Clientuser.find({}, function(err, docs){
        var time = moment().format('LTS');
        if(err) throw err;
        else  res.render('upload-Completed-stationery',{Clientuser : docs});
    });
        
    }
    
});




var CompletedStationerystorage = multer.diskStorage({
     destination: './pwClient/vendor/upload/Completed/Stationery',
    filename : function(req, file, cb)
    {
//        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
        cb(null, file.originalname);

    }
 });




//Init Upload Stationery

var CompletedStationery_upload = multer({storage: CompletedStationerystorage}).array('file', 25);

 
//stationery Design-Upload Page
router.post('/upload-Completed-stationery',function(req,res,next){

        
        if(!req.user){
            res.redirect('/');
}
    
        else{
        
        
           CompletedStationery_upload(req, res, (err) => {
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
                    Ongoing : "",
                    Completed : "Completed",
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
            var msg3 = "Sitemap : username -> password -> menu -> Completed -> Stationery Design";
            var send = msg + msg2 + msg3;
                        var message = send;
                        Clientuser.findOne({ username: toWhom }, function(err, user) {
                         var mobile = user.mobile;
                    msg91.send(mobile, message, function(err, response){
                    console.log(err);
                    console.log(response); 
                        
                   res.redirect('/CompletedDesign/view-Completed-stationery');
                        });
                     });
        
      
                        

        
//        res.end("File is uploaded");
    
    });
      }
});






//< !---------------------------------------------------------------------------------------Brochure CompletedDesigns--------------------------------------------------------------------------------------------- !>
//< !---------------------------------------------------------------------------------------Brochure CompletedDesigns--------------------------------------------------------------------------------------------- !>
//< !---------------------------------------------------------------------------------------Brochure CompletedDesigns--------------------------------------------------------------------------------------------- !>


//View Brochure

router.get('/view-Completed-brochure', function(req,res){
    
            if(!req.user){
            res.redirect('/');
}
    else
    {
        

    OngoingBrochure.find({}).sort({brochure_date: -1, brochure_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-Completed-brochure',{CompletedBrochure : docs});
        
        });
        
        
        
        
        
    }
    
});

//Delete Brochure

router.post('/CompletedBrochure/', function(req, res){
    
            if(!req.user){
            res.redirect('/');
}
    else
    {
        
        var path = req.body.path;
	OngoingBrochure.findByIdAndRemove({_id: path}, 
	   function(err){
		if(err) throw err;
		else    res.redirect('/CompletedDesign/view-Completed-brochure');
	});
        
        
    }
    
});




//Upload Brochure

router.get('/upload-Completed-brochure', function(req,res){
    
            if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    Clientuser.find({}, function(err, docs){
        var time = moment().format('LTS');
        if(err) throw err;
        else  res.render('upload-Completed-brochure',{Clientuser : docs});
    });
        
        
    }
    
});




var CompletedBrochurestorage = multer.diskStorage({
     destination: './pwClient/vendor/upload/Completed/Brochure',
    filename : function(req, file, cb)
    {
//        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
        cb(null, file.originalname);

    }
 });




//Init Upload Brochure

var CompletedBrochure_upload = multer({storage: CompletedBrochurestorage}).array('file', 25);

 



//brochure Design-Upload Page
router.post('/upload-Completed-brochure', (req, res, next) => {

        
        if(!req.user){
            res.redirect('/');
}
    
        else{
        
        
           CompletedBrochure_upload(req, res, (err) => {
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
                    Ongoing : "",
                    Completed : "Completed",
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
            var msg3 = "Sitemap : username -> password -> menu -> Completed -> Brochure Design";
            var send = msg + msg2 + msg3;
                        var message = send;
                        Clientuser.findOne({ username: toWhom }, function(err, user) {
                         var mobile = user.mobile;
                    msg91.send(mobile, message, function(err, response){
                    console.log(err);
                    console.log(response); 
                        
                   res.redirect('/CompletedDesign/view-Completed-brochure');
                        });
                     });
        
      
                        

        
//        res.end("File is uploaded");
    
    });
      }
});


      



//< !-------------------------------------------------------------------------------------Menu CompletedDesigns--------------------------------------------------------------------------------------------- !>
//< !-------------------------------------------------------------------------------------Menu CompletedDesigns--------------------------------------------------------------------------------------------- !>
//< !-------------------------------------------------------------------------------------Menu CompletedDesigns--------------------------------------------------------------------------------------------- !>


//View Menu-card

router.get('/view-Completed-menu', function(req,res){
    
            if(!req.user){
            res.redirect('/');
}
    else
    {
        
        

        
    OngoingMenu.find({}).sort({menu_date: -1, menu_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-Completed-menu',{CompletedMenu : docs});
        
        });
        
        
        
        
        
    }
    
});

//Delete Menu-card

router.post('/CompletedMenu/', function(req, res){
    
            if(!req.user){
            res.redirect('/');
}
    else
    {
        var path = req.body.path;
	OngoingMenu.findByIdAndRemove({_id: path}, 
	   function(err){
		if(err) throw err;
		else    res.redirect('/CompletedDesign/view-Completed-menu');
	});
        
        
    }
    
    
});




//Upload Menu-card

router.get('/upload-Completed-menu', function(req,res){
    
            if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    Clientuser.find({}, function(err, docs){
        var time = moment().format('LTS');
        if(err) throw err;
        else  res.render('upload-Completed-menu',{Clientuser : docs});
    });
        
        
    }
    
    
});




var CompletedMenustorage = multer.diskStorage({
     destination: './pwClient/vendor/upload/Completed/Menu-card',
    filename : function(req, file, cb)
    {
//        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
        cb(null, file.originalname);

    }
 });



//Init Upload Menu-card

var CompletedMenu_upload = multer({storage: CompletedMenustorage}).array('file', 25);

 


//Menu Design-Upload Page
router.post('/upload-Completed-menu', (req, res, next) => {

        
        if(!req.user){
            res.redirect('/');
}
    
        else{
        
        
           CompletedMenu_upload(req, res, (err) => {
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
                    Ongoing : "",
                    Completed : "Completed",
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
            var msg3 = "Sitemap : username -> password -> menu -> Completed -> Menu Card Design";
            var send = msg + msg2 + msg3;
                        var message = send;
                        Clientuser.findOne({ username: toWhom }, function(err, user) {
                         var mobile = user.mobile;
                    msg91.send(mobile, message, function(err, response){
                    console.log(err);
                    console.log(response); 
                        
                   res.redirect('/CompletedDesign/view-Completed-menu');
                        });
                     });
        
      
                        

        
//        res.end("File is uploaded");
    
    });
      }
});





//< !-------------------------------------------------------------------------------------Landing CompletedDesigns--------------------------------------------------------------------------------------------- !>
//< !-------------------------------------------------------------------------------------Landing CompletedDesigns--------------------------------------------------------------------------------------------- !>
//< !-------------------------------------------------------------------------------------Landing CompletedDesigns--------------------------------------------------------------------------------------------- !>


//View Landing-Page

router.get('/view-Completed-landing', function(req,res){
            if(!req.user){
            res.redirect('/');
}
    else
    {
        
        

        
        
    OngoingLanding.find({}).sort({landing_date: -1, landing_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-Completed-landing',{CompletedLanding : docs});
        
        });
        
        
        
        
        
    }
    
    
});

//Delete Landing-Page

router.post('/CompletedLanding/', function(req, res){
            if(!req.user){
            res.redirect('/');
}
    else
    {
        
            var path = req.body.path;
	OngoingLanding.findByIdAndRemove({_id: path}, 
	   function(err){
		if(err) throw err;
		else    res.redirect('/CompletedDesign/view-Completed-landing');
	});
        
        
    }
    
});




//Upload Landing-Page

router.get('/upload-Completed-landing', function(req,res){
    
            if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    Clientuser.find({}, function(err, docs){
        var time = moment().format('LTS');
        if(err) throw err;
        else  res.render('upload-Completed-landing',{Clientuser : docs});
    });
        
        
    }
    
    
});




var CompletedLandingstorage = multer.diskStorage({
     destination: './pwClient/vendor/upload/Completed/Landing',
    filename : function(req, file, cb)
    {
//        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
        cb(null, file.originalname);

    }
 });




//Init Upload Landing-Page

var CompletedLanding_upload = multer({storage: CompletedLandingstorage}).array('file', 25);

 
//Landing Upload Page

router.post('/upload-Completed-landing', (req, res, next) => {

        
        if(!req.user){
            res.redirect('/');
}
    
        else{
        
        
           CompletedLanding_upload(req, res, (err) => {
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
                    Ongoing : "",
                    Completed : "Completed",
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
             var msg3 = "Sitemap : username -> password -> menu -> Completed -> Landing Page Design";
            var send = msg + msg2 + msg3;
                        var message = send;
                        Clientuser.findOne({ username: toWhom }, function(err, user) {
                         var mobile = user.mobile;
                    msg91.send(mobile, message, function(err, response){
                    console.log(err);
                    console.log(response); 
                        
                  res.redirect('/CompletedDesign/view-Completed-landing');
                        });
                     });
        
      
                        

        
//        res.end("File is uploaded");
    
    });
      }
});



   



//< !-----------------------------------------------------------------------------------Package CompletedDesigns--------------------------------------------------------------------------------------------- !>
//< !-----------------------------------------------------------------------------------Package CompletedDesigns--------------------------------------------------------------------------------------------- !>
//< !-----------------------------------------------------------------------------------Package CompletedDesigns--------------------------------------------------------------------------------------------- !>


//View Package

router.get('/view-Completed-package', function(req,res){
    
            if(!req.user){
            res.redirect('/');
}
    else
    {
  
        
    OngoingPackage.find({}).sort({package_date: -1, package_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-Completed-package',{CompletedPackage : docs});
        
        });
        
        
        
        
        
        
    }
    
});

//Delete Package

router.post('/CompletedPackage/', function(req, res){
    
            if(!req.user){
            res.redirect('/');
}
    else
    {
        var path = req.body.path;
	OngoingPackage.findByIdAndRemove({_id: path}, 
	   function(err){
		if(err) throw err;
		else    res.redirect('/CompletedDesign/view-Completed-package');
	});
        
        
    }
    
    
});




//Upload Package

router.get('/upload-Completed-package', function(req,res){
    
            if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    Clientuser.find({}, function(err, docs){
        var time = moment().format('LTS');
        if(err) throw err;
        else  res.render('upload-Completed-package',{Clientuser : docs});
    });
        
        
    }
    
    
});




var CompletedPackagestorage = multer.diskStorage({
     destination: './pwClient/vendor/upload/Completed/Package',
    filename : function(req, file, cb)
    {
//        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
        cb(null, file.originalname);

    }
 });




//Init Upload Package

var CompletedPackage_upload = multer({storage: CompletedPackagestorage}).array('file', 25);




//Package Design-Upload Page
router.post('/upload-Completed-package', (req, res, next) => {

        
        if(!req.user){
            res.redirect('/');
}
    
        else{
        
        
           CompletedPackage_upload(req, res, (err) => {
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
                    Ongoing : "",
                    Completed : "Completed",
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
            var msg3 = "Sitemap : username -> password -> menu -> Completed -> Package Design";
            var send = msg + msg2 + msg3;
                        var message = send;
                        Clientuser.findOne({ username: toWhom }, function(err, user) {
                         var mobile = user.mobile;
                    msg91.send(mobile, message, function(err, response){
                    console.log(err);
                    console.log(response); 
                        
                   res.redirect('/CompletedDesign/view-Completed-package');
                        });
                     });
        
      
                        

        
//        res.end("File is uploaded");
    
    });
      }
});




//< !-------------------------------------------------------------------------------------Banner CompletedDesigns--------------------------------------------------------------------------------------------- !>
//< !-------------------------------------------------------------------------------------Banner CompletedDesigns--------------------------------------------------------------------------------------------- !>
//< !-------------------------------------------------------------------------------------Banner CompletedDesigns--------------------------------------------------------------------------------------------- !>


//View banner

router.get('/view-Completed-banner', function(req,res){
    
            if(!req.user){
            res.redirect('/');
}
    else
    {
        

            OngoingBanner.find({}).sort({banner_date: -1, banner_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-Completed-banner',{CompletedBanner : docs});
        
        });
        
        
        
        
        
        
    }
    
    
});

//Delete banner

router.post('/CompletedBanner/', function(req, res){
            if(!req.user){
            res.redirect('/');
}
    else
    {
        
        var path = req.body.path;
	OngoingBanner.findByIdAndRemove({_id: path}, 
	   function(err){
		if(err) throw err;
		else    res.redirect('/CompletedDesign/view-Completed-banner');
	});
        
        
    }
    
    
});




//Upload banner

router.get('/upload-Completed-banner', function(req,res){
    
            if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    Clientuser.find({}, function(err, docs){
        var time = moment().format('LTS');
        if(err) throw err;
        else  res.render('upload-Completed-banner',{Clientuser : docs});
    });
        
        
    }
    
    
});




var CompletedBannerstorage = multer.diskStorage({
     destination: './pwClient/vendor/upload/Completed/Banner',
    filename : function(req, file, cb)
    {
//        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
        cb(null, file.originalname);

    }
 });




//Init Upload banner

var CompletedBanner_upload = multer({storage: CompletedBannerstorage}).array('file', 25);

 

//banner Design-Upload Page
router.post('/upload-Completed-banner', (req, res, next) => {

        
        if(!req.user){
            res.redirect('/');
}
    
        else{
        
        
           CompletedBanner_upload(req, res, (err) => {
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
                    Ongoing : "",
                    Completed : "Completed",
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
           var msg3 = "Sitemap : username -> password -> menu -> Completed -> Banner Design";
            var send = msg + msg2 + msg3;
                        var message = send;
                        Clientuser.findOne({ username: toWhom }, function(err, user) {
                         var mobile = user.mobile;
                    msg91.send(mobile, message, function(err, response){
                    console.log(err);
                    console.log(response); 
                        
                   res.redirect('/CompletedDesign/view-Completed-banner');
                        });
                     });
        
      
                        

        
//        res.end("File is uploaded");
    
    });
      }
});







//< !-----------------------------------------------------------------------------------------Shirt CompletedDesigns--------------------------------------------------------------------------------------------- !>
//< !-----------------------------------------------------------------------------------------Shirt CompletedDesigns--------------------------------------------------------------------------------------------- !>
//< !-----------------------------------------------------------------------------------------Shirt CompletedDesigns--------------------------------------------------------------------------------------------- !>


//View shirt

router.get('/view-Completed-shirt', function(req,res){
    
            if(!req.user){
            res.redirect('/');
}
    else
    {
        
        

        
            OngoingShirt.find({}).sort({shirt_date: -1, shirt_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-Completed-shirt',{CompletedShirt : docs});
        
        });
        
        
        
        
        
    }
    
    
});

//Delete shirt

router.post('/CompletedShirt/', function(req, res){
    
            if(!req.user){
            res.redirect('/');
}
    else
    {
        var path = req.body.path;
	OngoingShirt.findByIdAndRemove({_id: path}, 
	   function(err){
		if(err) throw err;
		else    res.redirect('/CompletedDesign/view-Completed-shirt');
	});
        
        
    }
    
    
});




//Upload shirt

router.get('/upload-Completed-shirt', function(req,res){
    
            if(!req.user){
            res.redirect('/');
}
    else
    {
        
    Clientuser.find({}, function(err, docs){
        var time = moment().format('LTS');
        if(err) throw err;
        else  res.render('upload-Completed-shirt',{Clientuser : docs});
    });
        
        
        
    }
    
    
});




var CompletedShirtstorage = multer.diskStorage({
     destination: './pwClient/vendor/upload/Completed/Shirt',
    filename : function(req, file, cb)
    {
//        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
        cb(null, file.originalname);

    }
 });




//Init Upload shirt

var CompletedShirt_upload = multer({storage: CompletedShirtstorage}).array('file', 25);

 //Shirt Design-Upload Page
router.post('/upload-Completed-shirt', (req, res, next) => {

        
        if(!req.user){
            res.redirect('/');
}
    
        else{
        
        
           CompletedShirt_upload(req, res, (err) => {
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
                    Ongoing : "",
                    Completed : "Completed",
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
           var msg3 = "Sitemap : username -> password -> menu -> Completed -> TShirt Design";
            var send = msg + msg2 + msg3;
                        var message = send;
                        Clientuser.findOne({ username: toWhom }, function(err, user) {
                         var mobile = user.mobile;
                    msg91.send(mobile, message, function(err, response){
                    console.log(err);
                    console.log(response); 
                        
                   res.redirect('/CompletedDesign/view-Completed-shirt');
                        });
                     });
        
      
                        

        
//        res.end("File is uploaded");
    
    });
      }
});

      



//< !-------------------------------------------------------------------------------In-Shop CompletedDesigns--------------------------------------------------------------------------------------------- !>
//< !-------------------------------------------------------------------------------In-Shop CompletedDesigns--------------------------------------------------------------------------------------------- !>
//< !-------------------------------------------------------------------------------In-Shop CompletedDesigns--------------------------------------------------------------------------------------------- !>


//View In-Shop

router.get('/view-Completed-shop', function(req,res){
            if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
            OngoingShop.find({}).sort({shop_date: -1, shop_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-Completed-shop',{CompletedShop : docs});
        
        });
        
        
        
        
    }
    
    
});

//Delete In-Shop

router.post('/CompletedShop/', function(req, res){
            if(!req.user){
            res.redirect('/');
}
    else
    {
        
        var path = req.body.path;
	OngoingShop.findByIdAndRemove({_id: path}, 
	   function(err){
		if(err) throw err;
		else    res.redirect('/CompletedDesign/view-Completed-shop');
	});
        
        
    }
    
});




//Upload In-Shop

router.get('/upload-Completed-shop', function(req,res){
    
            if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    Clientuser.find({}, function(err, docs){
        var time = moment().format('LTS');
        if(err) throw err;
        else  res.render('upload-Completed-shop',{Clientuser : docs});
    });
        
        
    }
    
    
});




var CompletedShopstorage = multer.diskStorage({
     destination: './pwClient/vendor/upload/Completed/In-shop',
    filename : function(req, file, cb)
    {
//        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
        cb(null, file.originalname);

    }
 });




//Init Upload In-Shop

var CompletedShop_upload = multer({storage: CompletedShopstorage}).array('file', 25);

 //Shop Design-Upload Page
router.post('/upload-Completed-shop', (req, res, next) => {

        
        if(!req.user){
            res.redirect('/');
}
    
        else{
        
        
           CompletedShop_upload(req, res, (err) => {
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
                    Ongoing : "",
                    Completed : "Completed",
                    Seen : "",
                    Downloaded : ""

                });
               
                console.log(newShop);
                OngoingShop.createShop(newShop, function (err, shop) {
                    if (err) throw err;

                });
                          }

            var msg = "Work has been uploaded \r";
            var msg2 = "URL : http://works.promo.works \r";
            var msg3 = "Sitemap : username -> password -> menu -> Completed -> In-Shop Design";
            var send = msg + msg2 + msg3;
                        var message = send;
                        Clientuser.findOne({ username: toWhom }, function(err, user) {
                         var mobile = user.mobile;
                    msg91.send(mobile, message, function(err, response){
                    console.log(err);
                    console.log(response); 
                        
                   res.redirect('/CompletedDesign/view-Completed-shop');
                        });
                     });
        
      
                        

        
//        res.end("File is uploaded");
    
    });
      }
});



















//< !-------------------------------------------------------------------------------Hoarding CompletedDesigns--------------------------------------------------------------------------------------------- !>
//< !-------------------------------------------------------------------------------Hoarding CompletedDesigns--------------------------------------------------------------------------------------------- !>
//< !-------------------------------------------------------------------------------Hoarding CompletedDesigns--------------------------------------------------------------------------------------------- !>


//View Hoarding

router.get('/view-Completed-hoarding', function(req,res){
    if(!req.user){
    res.redirect('/');
}
else
{


    OngoingHoarding.find({}).sort({hoarding_date: -1, hoarding_time: -1}).exec(function(err, docs){
if(err) throw err;
else  res.render('view-Completed-hoarding',{CompletedHoarding : docs});

});




}


});

//Delete Hoarding

router.post('/CompletedHoarding/', function(req, res){
    if(!req.user){
    res.redirect('/');
}
else
{

var path = req.body.path;
OngoingHoarding.findByIdAndRemove({_id: path}, 
function(err){
if(err) throw err;
else    res.redirect('/CompletedDesign/view-Completed-hoarding');
});


}

});




//Upload Hoarding

router.get('/upload-Completed-hoarding', function(req,res){

    if(!req.user){
    res.redirect('/');
}
else
{


Clientuser.find({}, function(err, docs){
var time = moment().format('LTS');
if(err) throw err;
else  res.render('upload-Completed-hoarding',{Clientuser : docs});
});


}


});




var CompletedHoardingstorage = multer.diskStorage({
destination: './pwClient/vendor/upload/Completed/Hoarding',
filename : function(req, file, cb)
{
//        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
cb(null, file.originalname);

}
});




//Init Upload Hoarding

var CompletedHoarding_upload = multer({storage: CompletedHoardingstorage}).array('file', 25);

//Hoarding Design-Upload Page
router.post('/upload-Completed-hoarding', (req, res, next) => {


if(!req.user){
    res.redirect('/');
}

else{


   CompletedHoarding_upload(req, res, (err) => {
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
            Ongoing : "",
            Completed : "Completed",
            Seen : "",
            Downloaded : ""

        });
       
        console.log(newHoarding);
        OngoingHoarding.createHoarding(newHoarding, function (err, shirt) {
            if (err) throw err;

        });
                  }

    var msg = "Work has been uploaded \r";
    var msg2 = "URL : http://works.promo.works \r";
    var msg3 = "Sitemap : username -> password -> menu -> Completed -> Hoarding Design";
    var send = msg + msg2 + msg3;
                var message = send;
                Clientuser.findOne({ username: toWhom }, function(err, user) {
                 var mobile = user.mobile;
            msg91.send(mobile, message, function(err, response){
            console.log(err);
            console.log(response); 
                
           res.redirect('/CompletedDesign/view-Completed-hoarding');
                });
             });


                


//        res.end("File is uploaded");

});
}
});



module.exports = router;