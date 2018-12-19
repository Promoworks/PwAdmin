const express = require("express");
const router = express.Router();
var Clientuser = require('../models/clientuser');
var moment = require('moment');
var path = require('path');
var msg91 = require("msg91")("217817A7GCYaZrZEq5b0fc359", "PWORKS", "4" );
var fs = require('fs');
var multer  = require('multer');
var User = require('../models/user');

var Newspaper = require('../models/newspaper');
var OngoingMagazine = require('../models/ongoingMagazine');
var OngoingTheatre = require('../models/OngoingTheatre');
var OngoingTv = require('../models/OngoingTv');
var OngoingDigital = require('../models/OngoingDigital');



//< !-------------------------------------------------------------------------------------------CompletedNewspapers--------------------------------------------------------------------------------------------- !>
//< !-------------------------------------------------------------------------------------------CompletedNewspapers--------------------------------------------------------------------------------------------- !>
//< !-------------------------------------------------------------------------------------------CompletedNewspapers--------------------------------------------------------------------------------------------- !>
//View CompletedNewspaper

router.get('/view-Completed-newspaper', function(req,res){
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        

                    Newspaper.find({}).sort({newspaper_date: -1, newspaper_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-Completed-newspaper',{Newspaper : docs});
        
        });
        
        
        
    }
    
    
});


//Delete CompletedNewspaper
router.post('/CompletedNewspaper/', function(req, res){
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        var path = req.body.path;
	Newspaper.findByIdAndRemove({_id: path}, 
	   function(err){
		if(err) throw err;
		else    res.redirect('/CompletedAds/view-Completed-newspaper');
	});
        
    }
    
});



//Upload CompletedNewspaper

router.get('/upload-Completed-newspaper', function(req,res){
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    Clientuser.find({}, function(err, docs){
        if(err) throw err;
        else res.render('upload-Completed-newspaper',{Clientuser:docs});
    }); 
        
    }
    
});



var CompletedNewspaperstorage = multer.diskStorage({
    destination : './pwClient/vendor/upload/Completed/Newspaper',

    filename : function(req, file, cb)
    {
//        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
        cb(null, file.originalname);

    }
});






var CompletedNewspaper_upload = multer({storage: CompletedNewspaperstorage}).array('file', 25);






router.post('/upload-Completed-newspaper',function(req,res,next){

        
        if(!req.user){
            res.redirect('/');
}
    
        else{
        
        
           CompletedNewspaper_upload(req, res, (err) => {
        console.log(req.files);


       for (var i = 0; i < req.files.length; i++)
           {
//            console.log(req.files[i].path);
            var NewspaperFileName = req.files[i].filename;
            var removeNewspaper = req.files[i].path;
             var removefinalNewspaper =   removeNewspaper.substr(15);
//               console.log(removefinal);
               
               
         
        
                    let body = '';
            var brandType = req.body.brandtype;
            var toWhom = req.body.toWhom;
            var Adtype = req.body.Adtype;
            var owner = "Promoworks";
            var newspaper_final_path = req.files;


                 var newNewspaper = new Newspaper({

                    newspaper_final_path: removefinalNewspaper,
                    newspaper_file_name: NewspaperFileName,
                    newspaper_date: moment().format('MMMM Do YYYY'),
                    newspaper_time: moment().format('LTS'),
                    Adtype: Adtype,
                    owner: owner,
                    toWhom: toWhom,
                    Enable : "Enable",
                    Ongoing : "",
                    Completed : "Completed",
                    Seen : "",
                    Downloaded : ""

                });
               
                console.log(newNewspaper);

                Newspaper.createNewspaper(newNewspaper, function (err, Newspaper) {
                    if (err) throw err;
                });
                          }

            var msg = "Work has been uploaded \r";
            var msg2 = "URL : http://works.promo.works \r";
            var msg3 = "Sitemap : username -> password -> menu -> Completed -> Newspaper Ads";
            var send = msg + msg2 + msg3;
                        var message = send;
                        Clientuser.findOne({ username: toWhom }, function(err, user) {
                         var mobile = user.mobile;
                    msg91.send(mobile, message, function(err, response){
                    console.log(err);
                    console.log(response); 
                        
                   res.redirect('/CompletedAds/view-Completed-newspaper');
                        });
                     });
        
      
                        

        
//        res.end("File is uploaded");
    
    });
      }
});





    //< !------------------------------------------------------------------------------------------------------Magazine--------------------------------------------------------------------------------------------- !>
    //< !------------------------------------------------------------------------------------------------------Magazine--------------------------------------------------------------------------------------------- !>
    //< !------------------------------------------------------------------------------------------------------Magazine--------------------------------------------------------------------------------------------- !>


//View Magazine

router.get('/view-Completed-magazine', function(req,res){
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        

        
                    OngoingMagazine.find({}).sort({magazine_date: -1, magazine_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-Completed-magazine',{Magazine : docs});
        
        });
        
        
        
    }
    
});


//Delete Magazine
router.post('/CompletedMagazine/', function(req, res){
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        var path = req.body.path;
	OngoingMagazine.findByIdAndRemove({_id: path}, 
	   function(err){
		if(err) throw err;
		else    res.redirect('/CompletedAds/view-Completed-magazine');
	});
        
    }
});



//Upload Magazine

router.get('/upload-Completed-magazine', function(req,res){
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
    Clientuser.find({}, function(err, docs){
        if(err) throw err;
        else res.render('upload-Completed-magazine',{Clientuser:docs});
    }); 
        
        
    }
    
});



var CompletedMagazinestorage = multer.diskStorage({
    destination : './pwClient/vendor/upload/Completed/Magazine',

    filename : function(req, file, cb)
    {
//        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
        cb(null, file.originalname);

    }
});






var CompletedMagazine_upload = multer({storage: CompletedMagazinestorage}).array('file', 25);




router.post('/upload-Completed-magazine',function(req,res,next){

        
        if(!req.user){
            res.redirect('/');
}
    
        else{
        
        
           CompletedMagazine_upload(req, res, (err) => {
        console.log(req.files);


       for (var i = 0; i < req.files.length; i++)
           {
//            console.log(req.files[i].path);
            var MagazineFileName = req.files[i].filename;
            var removeMagazine = req.files[i].path;
             var removefinalMagazine =   removeMagazine.substr(15);
//               console.log(removefinal);
               
               
         
        
                    let body = '';
            var brandType = req.body.brandtype;
            var toWhom = req.body.toWhom;
            var Adtype = req.body.Adtype;
            var owner = "Promoworks";
            var magazine_final_path = req.files;


                 var newMagazine = new OngoingMagazine({

                    magazine_final_path: removefinalMagazine,
                    magazine_file_name: MagazineFileName,
                    magazine_date: moment().format('MMMM Do YYYY'),
                    magazine_time: moment().format('LTS'),
                    Adtype: Adtype,
                    owner: owner,
                    toWhom: toWhom,
                    Enable : "Enable",
                    Ongoing : "",
                    Completed : "Completed",
                    Seen : "",
                    Downloaded : ""

                });
                console.log(newMagazine);

                OngoingMagazine.createMagazine(newMagazine, function (err, OngoingMagazine) {
                    if (err) throw err;
                });
                          }

            var msg = "Work has been uploaded \r";
            var msg2 = "URL : http://works.promo.works \r";
            var msg3 = "Sitemap : username -> password -> menu -> Completed -> Magazine Ads";
            var send = msg + msg2 + msg3;
                        var message = send;
                        Clientuser.findOne({ username: toWhom }, function(err, user) {
                         var mobile = user.mobile;
                    msg91.send(mobile, message, function(err, response){
                    console.log(err);
                    console.log(response); 
                        
                   res.redirect('/CompletedAds/view-Completed-magazine');
                        });
                     });
        
      
                        

        
//        res.end("File is uploaded");
    
    });
      }
});






    //< !------------------------------------------------------------------------------------------------------Theatre--------------------------------------------------------------------------------------------- !>
    //< !------------------------------------------------------------------------------------------------------Theatre--------------------------------------------------------------------------------------------- !>
    //< !------------------------------------------------------------------------------------------------------Theatre--------------------------------------------------------------------------------------------- !>



//View Theatre

router.get('/view-Completed-theatre', function(req,res){
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
 
        
                    OngoingTheatre.find({}).sort({theatre_date: -1, theatre_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-Completed-theatre',{Theatre : docs});
        
        });
        
        
        
    }
    
});


//Delete Theatre
router.post('/CompletedTheatre/', function(req, res){
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        var path = req.body.path;
	OngoingTheatre.findByIdAndRemove({_id: path}, 
	   function(err){
		if(err) throw err;
		else    res.redirect('/CompletedAds/view-Completed-theatre');
	});
        
    }
    
});



//Upload Theatre

router.get('/upload-Completed-theatre', function(req,res){
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
    Clientuser.find({}, function(err, docs){
        if(err) throw err;
        else res.render('upload-Completed-theatre',{Clientuser:docs});
    }); 
        
    }
    
});



var CompletedTheatrestorage = multer.diskStorage({
    destination : './pwClient/vendor/upload/Completed/Theatre',

    filename : function(req, file, cb)
    {
//        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
        cb(null, file.originalname);

    }
});






var CompletedTheatre_upload = multer({storage: CompletedTheatrestorage}).array('file', 25);





router.post('/upload-Completed-theatre',function(req,res,next){

        
        if(!req.user){
            res.redirect('/');
}
    
        else{
        
        
           CompletedTheatre_upload(req, res, (err) => {
        console.log(req.files);


       for (var i = 0; i < req.files.length; i++)
           {
//            console.log(req.files[i].path);
            var TheatreFileName = req.files[i].filename;
            var removeTheatre = req.files[i].path;
             var removefinalTheatre =   removeTheatre.substr(15);
//               console.log(removefinal);
               
               
         
        
                    let body = '';
            var brandType = req.body.brandtype;
            var toWhom = req.body.toWhom;
            var Adtype = req.body.Adtype;
            var owner = "Promoworks";
            var theatre_final_path = req.files;


                var newTheatre = new OngoingTheatre({

                    theatre_final_path: removefinalTheatre,
                    theatre_file_name: TheatreFileName,
                    theatre_date: moment().format('MMMM Do YYYY'),
                    theatre_time: moment().format('LTS'),
                    Adtype: Adtype,
                    owner: owner,
                    toWhom: toWhom,
                    Enable : "Enable",
                    Ongoing : "",
                    Completed : "Completed",
                    Seen : "",
                    Downloaded : ""

                });
                console.log(newTheatre);

                OngoingTheatre.createTheatre(newTheatre, function (err, OngoingTheatre) {
                    if (err) throw err;
                });
                          }

            var msg = "Work has been uploaded \r";
            var msg2 = "URL : http://works.promo.works \r";
            var msg3 = "Sitemap : username -> password -> menu -> Completed -> Theatre Ads";
            var send = msg + msg2 + msg3;
                        var message = send;
                        Clientuser.findOne({ username: toWhom }, function(err, user) {
                         var mobile = user.mobile;
                    msg91.send(mobile, message, function(err, response){
                    console.log(err);
                    console.log(response); 
                        
                   res.redirect('/CompletedAds/view-Completed-theatre');
                        });
                     });
        
      
                        

        
//        res.end("File is uploaded");
    
    });
      }
});



    //< !------------------------------------------------------------------------------------------------------Tv--------------------------------------------------------------------------------------------- !>
    //< !------------------------------------------------------------------------------------------------------Tv--------------------------------------------------------------------------------------------- !>
    //< !------------------------------------------------------------------------------------------------------Tv--------------------------------------------------------------------------------------------- !>




//View Tv

router.get('/view-Completed-tv', function(req,res){
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        

                    OngoingTv.find({}).sort({tv_date: -1, tv_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-Completed-tv',{Tv : docs});
        
        });
        
        
        
    }
    
});


//Delete Tv
router.post('/CompletedTv/', function(req, res){
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        var path = req.body.path;
	OngoingTv.findByIdAndRemove({_id: path}, 
	   function(err){
		if(err) throw err;
		else    res.redirect('/CompletedAds/view-Completed-tv');
	});
        
    }
});



//Upload Tv

router.get('/upload-Completed-tv', function(req,res){
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
    Clientuser.find({}, function(err, docs){
        if(err) throw err;
        else res.render('upload-Completed-tv',{Clientuser:docs});
    }); 
        
    }
    
});



var CompletedTvstorage = multer.diskStorage({
    destination : './pwClient/vendor/upload/Completed/Tv',

    filename : function(req, file, cb)
    {
//        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
        cb(null, file.originalname);

    }
});






var CompletedTv_upload = multer({storage: CompletedTvstorage}).array('file', 25);




router.post('/upload-Completed-tv',function(req,res,next){

        
        if(!req.user){
            res.redirect('/');
}
    
        else{
        
        
           CompletedTv_upload(req, res, (err) => {
        console.log(req.files);


       for (var i = 0; i < req.files.length; i++)
           {
//            console.log(req.files[i].path);
            var TvFileName = req.files[i].filename;
            var removeTv = req.files[i].path;
             var removefinalTv =   removeTv.substr(15);
//               console.log(removefinal);
               
               
         
        
                    let body = '';
            var brandType = req.body.brandtype;
            var toWhom = req.body.toWhom;
            var Adtype = req.body.Adtype;
            var owner = "Promoworks";
            var tv_final_path = req.files;


                var newTv = new OngoingTv({

                    tv_final_path: removefinalTv,
                    tv_file_name: TvFileName,
                    tv_date: moment().format('MMMM Do YYYY'),
                    tv_time: moment().format('LTS'),
                    Adtype: Adtype,
                    owner: owner,
                    toWhom: toWhom,
                    Enable : "Enable",
                    Ongoing : "",
                    Completed : "Completed",
                    Seen : "",
                    Downloaded : ""

                });
                console.log(newTv);

                OngoingTv.createTv(newTv, function (err, OngoingTv) {
                    if (err) throw err;
                });
        
                          }

            var msg = "Work has been uploaded \r";
            var msg2 = "URL : http://works.promo.works \r";
            var msg3 = "Sitemap : username -> password -> menu -> Completed -> Tv Ads";
            var send = msg + msg2 + msg3;
                        var message = send;
                        Clientuser.findOne({ username: toWhom }, function(err, user) {
                         var mobile = user.mobile;
                    msg91.send(mobile, message, function(err, response){
                    console.log(err);
                    console.log(response); 
                        
                   res.redirect('/CompletedAds/view-Completed-tv');
                        });
                     });
        
      
                        

        
//        res.end("File is uploaded");
    
    });
      }
});







    //< !------------------------------------------------------------------------------------------------------Digital Ads--------------------------------------------------------------------------------------------- !>
    //< !------------------------------------------------------------------------------------------------------Digital Ads--------------------------------------------------------------------------------------------- !>
    //< !------------------------------------------------------------------------------------------------------Digital Ads--------------------------------------------------------------------------------------------- !>


//View Digital

router.get('/view-Completed-digital', function(req,res){
            
        if(!req.user){
            res.redirect('/');
}
    else
    {

                    OngoingDigital.find({}).sort({digital_date: -1, digital_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-Completed-digital',{Digital : docs});
        
        });
        
        
        
        
    }
    
});


//Delete Digital
router.post('/CompletedDigital/', function(req, res){
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
         var path = req.body.path;
	OngoingDigital.findByIdAndRemove({_id: path}, 
	   function(err){
		if(err) throw err;
		else    res.redirect('/CompletedAds/view-Completed-digital');
	});
        
        
    }
});



//Upload Digital

router.get('/upload-Completed-digital', function(req,res){
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    Clientuser.find({}, function(err, docs){
        if(err) throw err;
        else res.render('upload-Completed-digital',{Clientuser:docs});
    }); 
        
    }
    
});



var CompletedDigitalstorage = multer.diskStorage({
    destination : './pwClient/vendor/upload/Completed/Digital',

    filename : function(req, file, cb)
    {
//        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
        cb(null, file.originalname);

    }
});






var CompletedDigital_upload = multer({storage: CompletedDigitalstorage}).array('file', 25);




router.post('/upload-Completed-digital',function(req,res,next){

        
        if(!req.user){
            res.redirect('/');
}
    
        else{
        
        
           CompletedDigital_upload(req, res, (err) => {
        console.log(req.files);


       for (var i = 0; i < req.files.length; i++)
           {
//            console.log(req.files[i].path);
            var DigitalFileName = req.files[i].filename;
            var removeDigital = req.files[i].path;
             var removefinalDigital =   removeDigital.substr(15);
//               console.log(removefinal);
               
               
         
        
                    let body = '';
            var brandType = req.body.brandtype;
            var toWhom = req.body.toWhom;
            var Adtype = req.body.Adtype;
            var owner = "Promoworks";
            var digital_final_path = req.files;


                var newDigital = new OngoingDigital({

                    digital_final_path: removefinalDigital,
                    digital_file_name: DigitalFileName,
                    digital_date: moment().format('MMMM Do YYYY'),
                    digital_time: moment().format('LTS'),
                    Adtype: Adtype,
                    owner: owner,
                    toWhom: toWhom,
                    Enable : "Enable",
                    Ongoing : "",
                    Completed : "Completed",
                    Seen : "",
                    Downloaded : ""

                });
                console.log(newDigital);

                OngoingDigital.createDigital(newDigital, function (err, OngoingDigital) {
                    if (err) throw err;
                });
        
                          }

            var msg = "Work has been uploaded \r";
            var msg2 = "URL : http://works.promo.works \r";
             var msg3 = "Sitemap : username -> password -> menu -> Completed -> Digital Ads";
            var send = msg + msg2 + msg3;
                        var message = send;
                        Clientuser.findOne({ username: toWhom }, function(err, user) {
                         var mobile = user.mobile;
                    msg91.send(mobile, message, function(err, response){
                    console.log(err);
                    console.log(response); 
                        
                   res.redirect('/CompletedAds/view-Completed-digital');
                        });
                     });
        
      
                        

        
//        res.end("File is uploaded");
    
    });
      }
});





module.exports =router;