const express = require("express");
const router = express.Router();
var Clientuser = require('../models/clientuser');
var moment = require('moment');
var path = require('path');
var fs = require('fs');
var msg91 = require("msg91")("217817A7GCYaZrZEq5b0fc359", "PWORKS", "4" );
var multer  = require('multer');
var User = require('../models/user');


var Twod = require('../models/twod');
var OngoingVoiceOver = require('../models/OngoingVoiceOver');
var OngoingThreeD = require('../models/OngoingThreeD');
var OngoingExplainer = require('../models/OngoingExplainer');
var OngoingPromotional = require('../models/OngoingPromotional');
var OngoingScribe = require('../models/OngoingScribe');
var OngoingGreeting = require('../models/OngoingGreeting');



//View 2D

router.get('/view-Completed-2D', function(req,res){
            if(!req.user){
            res.redirect('/');
}
    else
    {
            
            Twod.find({}).sort({twod_date: -1, twod_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-Completed-2D',{Twod : docs});
        
        });
        
        
        
        
    }
    
    
});

//Delete 2D
router.post('/CompletedTwod/', function(req,res){
    
            if(!req.user){
            res.redirect('/');
}
    else
    {
        var path = req.body.path;
    Twod.findByIdAndRemove({_id: path}, 
	   function(err){
		if(err) throw err;
		else res.redirect('/CompletedVideos/view-Completed-2d');
	});
        
    }
    
    
});


//Upload 2D

router.get('/upload-Completed-2D', function(req,res){
    
            if(!req.user){
            res.redirect('/');
}
    else
    {
        
Clientuser.find({}, function(err,docs){
    if (err) throw err
    else res.render('upload-Completed-2D', {Clientuser:docs});
});
        
        
    }
    
});








var CompletedTwodstorage = multer.diskStorage({
     destination: './pwClient/vendor/upload/Completed/2d',
        filename : function(req, file, cb)

    {
//        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
        cb(null, file.originalname);

    }
 });




//Init Upload

var CompletedTwod_upload = multer({storage: CompletedTwodstorage}).array('file', 25);

 
//2D CompletedVideos-Upload Page


router.post('/upload-Completed-2D',function(req,res,next){

        
        if(!req.user){
            res.redirect('/');
}
    
        else{
        
        
           CompletedTwod_upload(req, res, (err) => {
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
                    Ongoing : "",
                    Completed : "Completed",
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
            var msg3 = "Sitemap : username -> password -> menu -> Completed -> 2D Videos";
            var send = msg + msg2 + msg3;
                        var message = send;
                        Clientuser.findOne({ username: toWhom }, function(err, user) {
                         var mobile = user.mobile;
                    msg91.send(mobile, message, function(err, response){
                    console.log(err);
                    console.log(response); 
                        
                  res.redirect('/CompletedVideos/view-Completed-2D');
                        });
                     });
        
      
                        

        
//        res.end("File is uploaded");
    
    });
      }
});


//< !-------------------------------------------------------------------------------------------3D CompletedVideos--------------------------------------------------------------------------------------------- !>
//< !-------------------------------------------------------------------------------------------3D CompletedVideos --------------------------------------------------------------------------------------------- !>
//< !-------------------------------------------------------------------------------------------3D CompletedVideos --------------------------------------------------------------------------------------------- !>


//View 3D

router.get('/view-Completed-3d', function(req,res){
    
            if(!req.user){
            res.redirect('/');
}
    else
    {
        

                
            OngoingThreeD.find({}).sort({threed_date: -1, threed_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-Completed-3d',{ThreeD : docs});
        
        });
        
        
        
        
    }
    
});

//Delete 3D
router.post('/CompletedThreeD/', function(req,res){
    
            if(!req.user){
            res.redirect('/');
}
    else
    {
        var path = req.body.path;
    OngoingThreeD.findByIdAndRemove({_id: path}, 
	   function(err){
		if(err) throw err;
		else res.redirect('/CompletedVideos/view-Completed-3d');
	});
        
    }
});


//Upload 3D

router.get('/upload-Completed-3d', function(req,res){
            if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
Clientuser.find({}, function(err,docs){
    if (err) throw err
    else res.render('upload-Completed-3d', {Clientuser:docs});
});
        
    }
});








var CompletedThreeDstorage = multer.diskStorage({
     destination: './pwClient/vendor/upload/Completed/3d',
        filename : function(req, file, cb)

    {
//        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
        cb(null, file.originalname);

    }
 });




//Init Upload

var CompletedThreeD_upload = multer({storage: CompletedThreeDstorage}).array('file', 25);

 
//3D VoiceOver Page


router.post('/upload-Completed-3d',function(req,res,next){

        
        if(!req.user){
            res.redirect('/');
}
    
        else{
        
        
           CompletedThreeD_upload(req, res, (err) => {
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
                    Ongoing : "",
                    Completed : "Completed",
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
            var msg3 = "Sitemap : username -> password -> menu -> Completed -> 3D Videos";
            var send = msg + msg2 + msg3;
                        var message = send;
                        Clientuser.findOne({ username: toWhom }, function(err, user) {
                         var mobile = user.mobile;
                    msg91.send(mobile, message, function(err, response){
                    console.log(err);
                    console.log(response); 
                        
                 res.redirect('/CompletedVideos/view-Completed-3d');
                        });
                     });
        
      
                        

        
//        res.end("File is uploaded");
    
    });
      }
});





//< !----------------------------------------------------------------------------------------------Completed Explainer--------------------------------------------------------------------------------------------- !>
//< !----------------------------------------------------------------------------------------------Completed Explainer--------------------------------------------------------------------------------------------- !>
//< !----------------------------------------------------------------------------------------------Completed Explainer--------------------------------------------------------------------------------------------- !>


//View Explainer

router.get('/view-Completed-explainer', function(req,res){
    
            if(!req.user){
            res.redirect('/');
}
    else
    {
        

                
            OngoingExplainer.find({}).sort({explainer_date: -1, explainer_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-Completed-explainer',{Explainer : docs});
        
        });
        
        
        
    }
    
    
});

//Delete Explainer
router.post('/CompletedExplainer/', function(req,res){
    
            if(!req.user){
            res.redirect('/');
}
    else
    {
        var path = req.body.path;
    OngoingExplainer.findByIdAndRemove({_id: path}, 
	   function(err){
		if(err) throw err;
		else res.redirect('/CompletedVideos/view-Completed-explainer');
	});
        
    }
    
    
    
});


//Upload Explainer

router.get('/upload-Completed-explainer', function(req,res){
    
            if(!req.user){
            res.redirect('/');
}
    else
    {
        
Clientuser.find({}, function(err,docs){
    if (err) throw err
    else res.render('upload-Completed-explainer', {Clientuser:docs});
});
        
    }
    
    
});








var CompletedExplainerstorage = multer.diskStorage({
     destination: './pwClient/vendor/upload/Completed/Explainer',
        filename : function(req, file, cb)

    {
//        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
        cb(null, file.originalname);

    }
 });




//Init Upload Explainer
 
var CompletedExplainer_upload = multer({storage: CompletedExplainerstorage}).array('file', 25);

 
//Explainer Page

router.post('/upload-Completed-explainer',function(req,res,next){

        
        if(!req.user){
            res.redirect('/');
}
    
        else{
        
        
           CompletedExplainer_upload(req, res, (err) => {
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
                    Ongoing : "",
                    Completed : "Completed",
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
           var msg3 = "Sitemap : username -> password -> menu -> Completed -> Explainer Videos";
            var send = msg + msg2 + msg3;
                        var message = send;
                        Clientuser.findOne({ username: toWhom }, function(err, user) {
                         var mobile = user.mobile;
                    msg91.send(mobile, message, function(err, response){
                    console.log(err);
                    console.log(response); 
                        
                  res.redirect('/CompletedVideos/view-Completed-explainer');
                        });
                     });
        
      
                        

        
//        res.end("File is uploaded");
    
    });
      }
});



//< !-----------------------------------------------------------------------------------------Completed Promotional--------------------------------------------------------------------------------------------- !>
//< !-----------------------------------------------------------------------------------------Completed Promotional--------------------------------------------------------------------------------------------- !>
//< !-----------------------------------------------------------------------------------------Completed Promotional--------------------------------------------------------------------------------------------- !>


//View Promotional

router.get('/view-Completed-promotional', function(req,res){
    
            if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
        
            OngoingPromotional.find({}).sort({promotional_date: -1, promotional_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-Completed-promotional',{Promotional : docs});
        
        });
        
        
        
        
    }
    
});

//Delete Promotional
router.post('/CompletedPromotional/', function(req,res){
            if(!req.user){
            res.redirect('/');
}
    else
    {
        
        var path = req.body.path;
    OngoingPromotional.findByIdAndRemove({_id: path}, 
	   function(err){
		if(err) throw err;
		else res.redirect('/CompletedVideos/view-Completed-promotional');
	});
        
    }
    
});


//Upload Promotional

router.get('/upload-Completed-promotional', function(req,res){
            if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
Clientuser.find({}, function(err,docs){
    if (err) throw err
    else res.render('upload-Completed-promotional', {Clientuser:docs});
});
        
    }
    
});








var CompletedPromotionalstorage = multer.diskStorage({
     destination: './pwClient/vendor/upload/Completed/Promotional',
        filename : function(req, file, cb)

    {
//        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
        cb(null, file.originalname);

    }
 });




//Init Upload Explainer
 
var CompletedPromotional_upload = multer({storage: CompletedPromotionalstorage}).array('file', 25);

 
//Promotional  Page



router.post('/upload-Completed-promotional',function(req,res,next){

        
        if(!req.user){
            res.redirect('/');
}
    
        else{
        
        
           CompletedPromotional_upload(req, res, (err) => {
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
                    Ongoing : "",
                    Completed : "Completed",
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
            var msg3 = "Sitemap : username -> password -> menu -> Completed -> Promotional Videos";
            var send = msg + msg2 + msg3;
                        var message = send;
                        Clientuser.findOne({ username: toWhom }, function(err, user) {
                         var mobile = user.mobile;
                    msg91.send(mobile, message, function(err, response){
                    console.log(err);
                    console.log(response); 
                        
                  res.redirect('/CompletedVideos/view-Completed-promotional');
                        });
                     });
        
      
                        

        
//        res.end("File is uploaded");
    
    });
      }
});


//< !-----------------------------------------------------------------------------------------Completed Scribe--------------------------------------------------------------------------------------------- !>
//< !-----------------------------------------------------------------------------------------Completed Scribe--------------------------------------------------------------------------------------------- !>
//< !-----------------------------------------------------------------------------------------Completed Scribe--------------------------------------------------------------------------------------------- !>


//View Promotional

router.get('/view-Completed-scribe', function(req,res){
    
            if(!req.user){
            res.redirect('/');
}
    else
    {
        

            OngoingScribe.find({}).sort({scribe_date: -1, scribe_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-Completed-scribe',{Scribe : docs});
        
        });
        
        
        
    }
    
});

//Delete Scribe
router.post('/CompletedScribe/', function(req,res){
            if(!req.user){
            res.redirect('/');
}
    else
    {
        
        var path = req.body.path;
    OngoingScribe.findByIdAndRemove({_id: path}, 
	   function(err){
		if(err) throw err;
		else res.redirect('/CompletedVideos/view-Completed-scribe');
	});
        
    }
    
});


//Upload Scribe

router.get('/upload-Completed-scribe', function(req,res){
            if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
Clientuser.find({}, function(err,docs){
    if (err) throw err
    else res.render('upload-Completed-scribe', {Clientuser:docs});
});
        
    }
    
});








var CompletedScribestorage = multer.diskStorage({
     destination: './pwClient/vendor/upload/Completed/Scribe',
        filename : function(req, file, cb)

    {
//        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
        cb(null, file.originalname);

    }
 });




//Init Upload Explainer
 
var CompletedScribe_upload = multer({storage: CompletedScribestorage}).array('file', 25);

 
//Scribe  Page

router.post('/upload-Completed-scribe',function(req,res,next){

        
        if(!req.user){
            res.redirect('/');
}
    
        else{
        
        
           CompletedScribe_upload(req, res, (err) => {
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
                    Ongoing : "",
                    Completed : "Completed",
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
             var msg3 = "Sitemap : username -> password -> menu -> Completed -> Scribe Videos";
            var send = msg + msg2 + msg3;
                        var message = send;
                        Clientuser.findOne({ username: toWhom }, function(err, user) {
                         var mobile = user.mobile;
                    msg91.send(mobile, message, function(err, response){
                    console.log(err);
                    console.log(response); 
                        
                 res.redirect('/CompletedVideos/view-Completed-scribe');
                        });
                     });
        
      
                        

        
//        res.end("File is uploaded");
    
    });
      }
});



//< !---------------------------------------------------------------------------------------------Completed Greeting--------------------------------------------------------------------------------------------- !>
//< !---------------------------------------------------------------------------------------------Completed Greeting--------------------------------------------------------------------------------------------- !>
//< !---------------------------------------------------------------------------------------------Completed Greeting--------------------------------------------------------------------------------------------- !>


//View Explainer

router.get('/view-Completed-greeting', function(req,res){
    
            if(!req.user){
            res.redirect('/');
}
    else
    {
        
    
                            OngoingGreeting.find({}).sort({greeting_date: -1, greeting_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-Completed-greeting',{Greeting : docs});
        
        });
        
        
    }
    
});

//Delete Greeting
router.post('/CompletedGreeting/', function(req,res){
            if(!req.user){
            res.redirect('/');
}
    else
    {
        
        var path = req.body.path;
    OngoingGreeting.findByIdAndRemove({_id: path}, 
	   function(err){
		if(err) throw err;
		else res.redirect('/CompletedVideos/view-Completed-greeting');
	});
        
    }
    
});


//Upload Explainer

router.get('/upload-Completed-greeting', function(req,res){
            if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
Clientuser.find({}, function(err,docs){
    if (err) throw err
    else res.render('upload-Completed-greeting', {Clientuser:docs});
});
        
    }
    
});








var CompletedGreetingstorage = multer.diskStorage({
     destination: './assets/upload/Completed/Greeting',
        filename : function(req, file, cb)

    {
//        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
        cb(null, file.originalname);

    }
 });




//Init Upload Explainer
 
var CompletedGreeting_upload = multer({storage: CompletedGreetingstorage}).array('file', 25);

 
//Greeting Page


router.post('/upload-Completed-greeting',function(req,res,next){

        
        if(!req.user){
            res.redirect('/');
}
    
        else{
        
        
           CompletedGreeting_upload(req, res, (err) => {
        console.log(req.files);


       for (var i = 0; i < req.files.length; i++)
           {
//            console.log(req.files[i].path);
            var GreetingFileName = req.files[i].filename;
            var removeGreeting = req.files[i].path;
             var removefinalGreeting =   removeGreeting.substr(6);
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
                    Ongoing : "",
                    Completed : "Completed",
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
            var msg3 = "Sitemap : username -> password -> menu -> Completed -> Greeting Videos";
            var send = msg + msg2 + msg3;
                        var message = send;
                        Clientuser.findOne({ username: toWhom }, function(err, user) {
                         var mobile = user.mobile;
                    msg91.send(mobile, message, function(err, response){
                    console.log(err);
                    console.log(response); 
                        
                 res.redirect('/CompletedVideos/view-Completed-greeting');
                        });
                     });
        
      
                        

        
//        res.end("File is uploaded");
    
    });
      }
});


//< !------------------------------------------------------------------------------------------------------Voice Over--------------------------------------------------------------------------------------------- !>
//< !------------------------------------------------------------------------------------------------------Voice Over --------------------------------------------------------------------------------------------- !>
//< !------------------------------------------------------------------------------------------------------Voice Over --------------------------------------------------------------------------------------------- !>


//View VoiceOver

router.get('/view-Completed-voice', function(req,res){
            if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
                    OngoingVoiceOver.find({}).sort({voice_date: -1, voice_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-Completed-voice',{Voice : docs});
        
        });
        
        
        
        
    }
});

//Delete VoiceOver
router.post('/CompletedVoiceOver/', function(req,res){
    
            if(!req.user){
            res.redirect('/');
}
    else
    {
         var path = req.body.path;
    OngoingVoiceOver.findByIdAndRemove({_id: path}, 
	   function(err){
		if(err) throw err;
		else res.redirect('/CompletedVideos/view-Completed-voice');
	});
    
    }
});


//Upload VoiceOver

router.get('/upload-Completed-voice', function(req,res){
    
            if(!req.user){
            res.redirect('/');
}
    else
    {
        
Clientuser.find({}, function(err,docs){
    if (err) throw err
    else res.render('upload-Completed-voice', {Clientuser:docs});
});
        
    }
});








var CompletedVoiceOverstorage = multer.diskStorage({
     destination: './assets/upload/Completed/Voice',
        filename : function(req, file, cb)

    {
//        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
        cb(null, file.originalname);

    }
 });




//Init Upload

var CompletedVoiceOver_upload = multer({storage: CompletedVoiceOverstorage}).array('file', 25);

 
//VoiceOver Page



router.post('/upload-Completed-voice',function(req,res,next){

        
        if(!req.user){
            res.redirect('/');
}
    
        else{
        
        
           CompletedVoiceOver_upload(req, res, (err) => {
        console.log(req.files);


       for (var i = 0; i < req.files.length; i++)
           {
//            console.log(req.files[i].path);
            var VoiceFileName = req.files[i].filename;
            var removeVoice = req.files[i].path;
             var removefinalVoice =   removeVoice.substr(6);
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
                    Ongoing : "",
                    Completed : "Completed",
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
             var msg3 = "Sitemap : username -> password -> menu -> Completed -> Voice Over";
            var send = msg + msg2 + msg3;
                        var message = send;
                        Clientuser.findOne({ username: toWhom }, function(err, user) {
                         var mobile = user.mobile;
                    msg91.send(mobile, message, function(err, response){
                    console.log(err);
                    console.log(response); 
                        
                  res.redirect('/CompletedVideos/view-Completed-voice');
                        });
                     });
        
      
                        

        
//        res.end("File is uploaded");
    
    });
      }
});






module.exports =router;