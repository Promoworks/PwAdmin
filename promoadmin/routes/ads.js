const express = require("express");
const router = express.Router();
var Clientuser = require('../models/clientuser');
var moment = require('moment');
var path = require('path');
var msg91 = require("msg91")("217817A7GCYaZrZEq5b0fc359", "PWORKS", "4" );
var fs = require('fs');
var multer  = require('multer');
var Newspaper = require('../models/newspaper');
var OngoingMagazine = require('../models/ongoingMagazine');
var OngoingTheatre = require('../models/OngoingTheatre');
var OngoingTv = require('../models/OngoingTv');
var OngoingDigital = require('../models/OngoingDigital');

    //< !---------------------------------------------------------------------------------------------Newspapers--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------Newspapers--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------Newspapers--------------------------------------------------------------------------------------------- !>



//Pick Client

router.get('/pick-seperate-newspaper-clients', function(req,res){
            if(!req.user){
            res.redirect('/');
}
    else
    {
        
        Clientuser.find({}, function(err, docs){
            if(err) throw err;
            else  res.render('pick-seperate-newspaper-clients',{Clientuser : docs});
        });
    }
});

    
//Pick Client Post

router.post('/view-seperate-newspaper-clients', function(req,res){
            if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
             var person =  req.body.person;
             console.log(person);

        
    Newspaper.find({toWhom:person}).sort({newspaper_date: -1, newspaper_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-seperate-newspaper-clients',{Newspaper : docs});
        
        });
        
}
});


//View Newspaper

router.get('/view-Ongoing-newspaper', function(req,res){
            if(!req.user){
            res.redirect('/');
}
    else
    {
        

                Newspaper.find({}).sort({newspaper_date: -1, newspaper_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-Ongoing-newspaper',{Newspaper : docs});
        
        });
        
        
}
    
});

    
//Once submit has been hit
router.post('/Newspaper/:id', function(req, res){
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
	Newspaper.update({_id: req.params.id},
	                   {
                        newspaper_final_path : req.body.image,
                        owner : req.body.owner,
                        toWhom : req.body.toWhom
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/ads/view-Ongoing-newspaper');
				}
		 });
}

    	 });


//Delete Newspaper
router.post('/NewspaperAds/', function(req, res){
            if(!req.user){
            res.redirect('/');
}
    else
    {
        
        var path = req.body.path;
	Newspaper.findByIdAndRemove({_id: path}, 
	   function(err){
		if(err) throw err;
		else    res.redirect('/ads/view-Ongoing-newspaper');
	});
        
    }
});



//Upload Newspaper

router.get('/upload-Ongoing-newspaper', function(req,res){
            if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    Clientuser.find({}, function(err, docs){
        if(err) throw err;
        else res.render('upload-Ongoing-newspaper',{Clientuser:docs});
    }); 
        
    }
    
});



var Newspaperstorage = multer.diskStorage({
    destination : './pwClient/vendor/upload/Ongoing/Newspaper',

    filename : function(req, file, cb)
    {
//        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
        cb(null, file.originalname);

    }
});






var newspaper_upload = multer({storage: Newspaperstorage}).array('file', 25);










router.post('/upload-Ongoing-newspaper',function(req,res,next){

        
        if(!req.user){
            res.redirect('/');
}
    
        else{
        
        
           newspaper_upload(req, res, (err) => {
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
                    Ongoing : "Ongoing",
                    Completed : "",
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
            var msg3 = "Sitemap : username -> password -> menu -> work-in-progress -> Newspaper Ads";
            var send = msg + msg2 + msg3;
                        var message = send;
                        Clientuser.findOne({ username: toWhom }, function(err, user) {
                         var mobile = user.mobile;
                    msg91.send(mobile, message, function(err, response){
                    console.log(err);
                    console.log(response); 
                        
                   res.redirect('/ads/view-Ongoing-newspaper');
                        });
                     });
        
      
                        

        
//        res.end("File is uploaded");
    
    });
      }
});






//newspaper Design-Upload Page
router.post('/newspaper', (req, res, next) => {
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
	Newspaper.update({_id: req.body.yd},
	                   {
                        Enable : "",
                        Disable : "Disable"
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/ads/view-Ongoing-newspaper');
				}
		 });
            
        }
      if(req.body.enable == "Enable")
        {
          
            	Newspaper.update({_id: req.body.yd},
	                   {
                        Enable : "Enable",
                        Disable : ""
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/ads/view-Ongoing-newspaper');
				}
		 });
            
        }
    
}

});




 
//Move Newspaper Ads Page
router.post('/MoveNewspaper', (req, res, next) => {
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        

    if(req.body.Ongoing == "Ongoing")
        {
	Newspaper.update({_id: req.body.path},
	                   {
                        Completed : "Completed",
                        Ongoing : ""
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
                    
                    console.log(Newspaper);
                    
                    
				   res.redirect('/ads/view-Ongoing-newspaper');
				}
		 });
            
        }

    
    }

});



    //< !------------------------------------------------------------------------------------------------------Magazine--------------------------------------------------------------------------------------------- !>
    //< !------------------------------------------------------------------------------------------------------Magazine--------------------------------------------------------------------------------------------- !>
    //< !------------------------------------------------------------------------------------------------------Magazine--------------------------------------------------------------------------------------------- !>

//Pick Client

router.get('/pick-seperate-magazine-clients', function(req,res){
            if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    Clientuser.find({}, function(err, docs){
        if(err) throw err;
        else  res.render('pick-seperate-magazine-clients',{Clientuser : docs});
    });
    }
    
});

    
//Pick Client Post

router.post('/view-seperate-magazine-clients', function(req,res){
            if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
             var person =  req.body.person;
             console.log(person);

            OngoingMagazine.find({toWhom:person}).sort({magazine_date: -1, magazine_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-seperate-magazine-clients',{Magazine : docs});
        
        });
        
        
}
});




//View Magazine

router.get('/view-Ongoing-magazine', function(req,res){
            if(!req.user){
            res.redirect('/');
}
    else
    {
        
    
                
                OngoingMagazine.find({}).sort({magazine_date: -1, magazine_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-Ongoing-magazine',{Magazine : docs});
        
        });
        
        
}
    
});


//Once submit has been hit
router.post('/Magazine/:id', function(req, res){
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
	OngoingMagazine.update({_id: req.params.id},
	                   {
                        magazine_final_path : req.body.image,
                        owner : req.body.owner,
                        toWhom : req.body.toWhom
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/ads/view-Ongoing-magazine');
				}
		 });
    }

    	 });



//Delete Magazine
router.post('/MagazineAds/', function(req, res){
            if(!req.user){
            res.redirect('/');
}
    else
    {
        
      var path = req.body.path;  
	OngoingMagazine.findByIdAndRemove({_id: path}, 
	   function(err){
		if(err) throw err;
		else    res.redirect('/ads/view-Ongoing-magazine');
	});
        
    }
});



//Upload Magazine

router.get('/upload-Ongoing-magazine', function(req,res){
    Clientuser.find({}, function(err, docs){
        if(err) throw err;
        else res.render('upload-Ongoing-magazine',{Clientuser:docs});
    }); 
    
});



var Magazinestorage = multer.diskStorage({
    destination : './pwClient/vendor/upload/Ongoing/Magazine',

    filename : function(req, file, cb)
    {
//        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
        cb(null, file.originalname);

    }
});






var magazine_upload = multer({storage: Magazinestorage}).array('file', 25);






router.post('/upload-Ongoing-magazine',function(req,res,next){

        
        if(!req.user){
            res.redirect('/');
}
    
        else{
        
        
           magazine_upload(req, res, (err) => {
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
                    Ongoing : "Ongoing",
                    Completed : "",
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
            var msg3 = "Sitemap : username -> password -> menu -> work-in-progress -> Magazine Ads";
            var send = msg + msg2 + msg3;
                        var message = send;
                        Clientuser.findOne({ username: toWhom }, function(err, user) {
                         var mobile = user.mobile;
                    msg91.send(mobile, message, function(err, response){
                    console.log(err);
                    console.log(response); 
                        
                   res.redirect('/ads/view-Ongoing-magazine');
                        });
                     });
        
      
                        

        
//        res.end("File is uploaded");
    
    });
      }
});








//magazine Design-Upload Page
router.post('/magazine', (req, res, next) => {
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
	OngoingMagazine.update({_id: req.body.yd},
	                   {
                        Enable : "",
                        Disable : "Disable"
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/ads/view-Ongoing-magazine');
				}
		 });
            
        }
      if(req.body.enable == "Enable")
        {
          
            	OngoingMagazine.update({_id: req.body.yd},
	                   {
                        Enable : "Enable",
                        Disable : ""
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/ads/view-Ongoing-magazine');
				}
		 });
            
        }
    
}

});



 
//Move Magazine Ads Page
router.post('/MoveMagazine', (req, res, next) => {
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        

    if(req.body.Ongoing == "Ongoing")
        {
	OngoingMagazine.update({_id: req.body.path},
	                   {
                        Completed : "Completed",
                        Ongoing : ""
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
                    
                    console.log(OngoingMagazine);
                    
                    
				   res.redirect('/ads/view-Ongoing-magazine');
				}
		 });
            
        }

    
    }

});


    //< !------------------------------------------------------------------------------------------------------Theatre--------------------------------------------------------------------------------------------- !>
    //< !------------------------------------------------------------------------------------------------------Theatre--------------------------------------------------------------------------------------------- !>
    //< !------------------------------------------------------------------------------------------------------Theatre--------------------------------------------------------------------------------------------- !>


//Pick Client

router.get('/pick-seperate-theatre-clients', function(req,res){
            if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    Clientuser.find({}, function(err, docs){
        if(err) throw err;
        else  res.render('pick-seperate-theatre-clients',{Clientuser : docs});
    });
        
    }
});

    
//Pick Client Post

router.post('/view-seperate-theatre-clients', function(req,res){
            if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
             var person =  req.body.person;
             console.log(person);

                    OngoingTheatre.find({toWhom:person}).sort({theatre_date: -1, theatre_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-seperate-theatre-clients',{Theatre : docs});
        
        });
        
        
        
    }
});





//View Theatre

router.get('/view-Ongoing-theatre', function(req,res){
            if(!req.user){
            res.redirect('/');
}
    else
    {
        
                OngoingTheatre.find({}).sort({theatre_date: -1, theatre_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-Ongoing-theatre',{Theatre : docs});
        
        });
        
        
    }
    
});

//Once submit has been hit
router.post('/Theatre/:id', function(req, res){
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
	OngoingTheatre.update({_id: req.params.id},
	                   {
                        theatre_final_path : req.body.image,
                        owner : req.body.owner,
                        toWhom : req.body.toWhom
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/ads/view-Ongoing-theatre');
				}
		 });
    }
    	 });




//Delete Theatre
router.post('/TheatreAds/', function(req, res){
            if(!req.user){
            res.redirect('/');
}
    else
    {
        var path = req.body.path;
	OngoingTheatre.findByIdAndRemove({_id: path}, 
	   function(err){
		if(err) throw err;
		else    res.redirect('/ads/view-Ongoing-theatre');
	});
        
    }
    
});



//Upload Theatre

router.get('/upload-Ongoing-theatre', function(req,res){
            if(!req.user){
            res.redirect('/');
}
    else
    {
    Clientuser.find({}, function(err, docs){
        if(err) throw err;
        else res.render('upload-Ongoing-theatre',{Clientuser:docs});
    }); 
        
    }
});



var Theatrestorage = multer.diskStorage({
    destination : './pwClient/vendor/upload/Ongoing/Theatre',

    filename : function(req, file, cb)
    {
//        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
        cb(null, file.originalname);

    }
});






var theatre_upload = multer({storage: Theatrestorage}).array('file', 25);





router.post('/upload-Ongoing-theatre',function(req,res,next){

        
        if(!req.user){
            res.redirect('/');
}
    
        else{
        
        
           theatre_upload(req, res, (err) => {
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
                    Ongoing : "Ongoing",
                    Completed : "",
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
            var msg3 = "Sitemap : username -> password -> menu -> work-in-progress -> Theatre Ads";
            var send = msg + msg2 + msg3;
                        var message = send;
                        Clientuser.findOne({ username: toWhom }, function(err, user) {
                         var mobile = user.mobile;
                    msg91.send(mobile, message, function(err, response){
                    console.log(err);
                    console.log(response); 
                        
                   res.redirect('/ads/view-Ongoing-theatre');
                        });
                     });
        
      
                        

        
//        res.end("File is uploaded");
    
    });
      }
});


//Theatre Design-Upload Page
router.post('/theatre', (req, res, next) => {
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
	OngoingTheatre.update({_id: req.body.yd},
	                   {
                        Enable : "",
                        Disable : "Disable"
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/ads/view-Ongoing-theatre');
				}
		 });
            
        }
      if(req.body.enable == "Enable")
        {
          
            	OngoingTheatre.update({_id: req.body.yd},
	                   {
                        Enable : "Enable",
                        Disable : ""
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/ads/view-Ongoing-theatre');
				}
		 });
            
        }
}
    


});



 
//Move Theatre Ads Page
router.post('/MoveTheatre', (req, res, next) => {
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        

    if(req.body.Ongoing == "Ongoing")
        {
	OngoingTheatre.update({_id: req.body.path},
	                   {
                        Completed : "Completed",
                        Ongoing : ""
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
                    
                    console.log(OngoingTheatre);
                    
                    
				   res.redirect('/ads/view-Ongoing-theatre');
				}
		 });
            
        }

    
    }

});



    //< !------------------------------------------------------------------------------------------------------Tv--------------------------------------------------------------------------------------------- !>
    //< !------------------------------------------------------------------------------------------------------Tv--------------------------------------------------------------------------------------------- !>
    //< !------------------------------------------------------------------------------------------------------Tv--------------------------------------------------------------------------------------------- !>


//Pick Client

router.get('/pick-seperate-tv-clients', function(req,res){
    Clientuser.find({}, function(err, docs){
        if(err) throw err;
        else  res.render('pick-seperate-tv-clients',{Clientuser : docs});
    });
});

    
//Pick Client Post

router.post('/view-seperate-tv-clients', function(req,res){
            if(!req.user){
            res.redirect('/');
}
    else
    {
        
             var person =  req.body.person;
             console.log(person);

        
                    OngoingTv.find({toWhom:person}).sort({tv_date: -1, tv_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-seperate-tv-clients',{Tv : docs});
        
        });
        
        
        
    }
});







//View Tv

router.get('/view-Ongoing-tv', function(req,res){
            if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
        OngoingTv.find({}).sort({tv_date: -1, tv_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-Ongoing-tv',{Tv : docs});
        
        });
        
        
        
    }
    
});



//Once submit has been hit
router.post('/Tv/:id', function(req, res){
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
	OngoingTv.update({_id: req.params.id},
	                   {
                        tv_final_path : req.body.image,
                        owner : req.body.owner,
                        toWhom : req.body.toWhom
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/ads/view-Ongoing-tv');
				}
		 });
    }
    	 });




//Delete Tv
router.post('/TvAds/', function(req, res){
            if(!req.user){
            res.redirect('/');
}
    else
    {
        
        var path = req.body.path;
	OngoingTv.findByIdAndRemove({_id: path}, 
	   function(err){
		if(err) throw err;
		else    res.redirect('/ads/view-Ongoing-tv');
	});
        
    }
    
});



//Upload Tv

router.get('/upload-Ongoing-tv', function(req,res){
            if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    Clientuser.find({}, function(err, docs){
        if(err) throw err;
        else res.render('upload-Ongoing-tv',{Clientuser:docs});
    }); 
        
    }
    
    
});



var Tvstorage = multer.diskStorage({
    destination : './pwClient/vendor/upload/Ongoing/Tv',

    filename : function(req, file, cb)
    {
//        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
        cb(null, file.originalname);

    }
});






var tv_upload = multer({storage: Tvstorage}).array('file', 25);


router.post('/upload-Ongoing-tv',function(req,res,next){

        
        if(!req.user){
            res.redirect('/');
}
    
        else{
        
        
           tv_upload(req, res, (err) => {
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
                    Ongoing : "Ongoing",
                    Completed : "",
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
            var msg3 = "Sitemap : username -> password -> menu -> work-in-progress -> Tv Ads";
            var send = msg + msg2 + msg3;
                        var message = send;
                        Clientuser.findOne({ username: toWhom }, function(err, user) {
                         var mobile = user.mobile;
                    msg91.send(mobile, message, function(err, response){
                    console.log(err);
                    console.log(response); 
                        
                   res.redirect('/ads/view-Ongoing-tv');
                        });
                     });
        
      
                        

        
//        res.end("File is uploaded");
    
    });
      }
});




//Tve Design-Upload Page
router.post('/tv', (req, res, next) => {
    
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
	OngoingTv.update({_id: req.body.yd},
	                   {
                        Enable : "",
                        Disable : "Disable"
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/ads/view-Ongoing-tv');
				}
		 });
            
        }
      if(req.body.enable == "Enable")
        {
          
            	OngoingTv.update({_id: req.body.yd},
	                   {
                        Enable : "Enable",
                        Disable : ""
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/ads/view-Ongoing-tv');
				}
		 });
            
        }
    
}

});



//Move Tv Ads Page
router.post('/MoveTv', (req, res, next) => {
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        

    if(req.body.Ongoing == "Ongoing")
        {
	OngoingTv.update({_id: req.body.path},
	                   {
                        Completed : "Completed",
                        Ongoing : ""
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
                    
                    console.log(OngoingTv);
                    
                    
				   res.redirect('/ads/view-Ongoing-tv');
				}
		 });
            
        }

    
    }

});



    //< !------------------------------------------------------------------------------------------------------Digital Ads--------------------------------------------------------------------------------------------- !>
    //< !------------------------------------------------------------------------------------------------------Digital Ads--------------------------------------------------------------------------------------------- !>
    //< !------------------------------------------------------------------------------------------------------Digital Ads--------------------------------------------------------------------------------------------- !>

//Pick Client

router.get('/pick-seperate-digital-clients', function(req,res){
            if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    Clientuser.find({}, function(err, docs){
        if(err) throw err;
        else  res.render('pick-seperate-digital-clients',{Clientuser : docs});
    });
        
    }
});

    
//Pick Client Post

router.post('/view-seperate-digital-clients', function(req,res){
            if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
             var person =  req.body.person;
             console.log(person);

        
    OngoingDigital.find({toWhom:person}).sort({digital_date: -1, digital_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-seperate-digital-clients',{Digital : docs});
        
        });
        
        
        
    }
});







//View Digital

router.get('/view-Ongoing-digital', function(req,res){
                if(!req.user){
            res.redirect('/');
}
    else
    {
        

        OngoingDigital.find({}).sort({digital_date: -1, digital_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-Ongoing-digital',{Digital : docs});
        
        });
    
    }
    
});

//Once submit has been hit
router.post('/Digital/:id', function(req, res){
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
	OngoingDigital.update({_id: req.params.id},
	                   {
                        digital_final_path : req.body.image,
                        owner : req.body.owner,
                        toWhom : req.body.toWhom
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/ads/view-Ongoing-digital');
				}
		 });
    }

    	 });




//Delete Digital
router.post('/DigitalAds/', function(req, res){
            if(!req.user){
            res.redirect('/');
}
    else
    {
        
        var path = req.body.path;
        
	OngoingDigital.findByIdAndRemove({_id: path}, 
	   function(err){
		if(err) throw err;
		else    res.redirect('/ads/view-Ongoing-digital');
	});
        
    }
    
});



//Upload Digital

router.get('/upload-Ongoing-digital', function(req,res){
            if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    Clientuser.find({}, function(err, docs){
        if(err) throw err;
        else res.render('upload-Ongoing-digital',{Clientuser:docs});
    }); 
        
    }
    
});



var Digitalstorage = multer.diskStorage({
    destination : './pwClient/vendor/upload/Ongoing/Digital',

    filename : function(req, file, cb)
    {
//        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
        cb(null, file.originalname);

    }
});






var digital_upload = multer({storage: Digitalstorage}).array('file', 25);




router.post('/upload-Ongoing-digital',function(req,res,next){

        
        if(!req.user){
            res.redirect('/');
}
    
        else{
        
        
           digital_upload(req, res, (err) => {
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
                    Ongoing : "Ongoing",
                    Completed : "",
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
            var msg3 = "Sitemap : username -> password -> menu -> work-in-progress -> Digital Ads";
            var send = msg + msg2 + msg3;
                        var message = send;
                        Clientuser.findOne({ username: toWhom }, function(err, user) {
                         var mobile = user.mobile;
                    msg91.send(mobile, message, function(err, response){
                    console.log(err);
                    console.log(response); 
                        
                   res.redirect('/ads/view-Ongoing-digital');
                        });
                     });
        
      
                        

        
//        res.end("File is uploaded");
    
    });
      }
});





//Tve Design-Upload Page
router.post('/digital', (req, res, next) => {
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
	OngoingDigital.update({_id: req.body.yd},
	                   {
                        Enable : "",
                        Disable : "Disable"
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/ads/view-Ongoing-digital');
				}
		 });
            
        }
      if(req.body.enable == "Enable")
        {
          
            	OngoingDigital.update({_id: req.body.yd},
	                   {
                        Enable : "Enable",
                        Disable : ""
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/ads/view-Ongoing-digital');
				}
		 });
            
        }
    

    }
    
});




//Move Digital Ads Page
router.post('/MoveDigital', (req, res, next) => {
    
            
        if(!req.user){
            res.redirect('/');
}
    else
    {
        

    if(req.body.Ongoing == "Ongoing")
        {
	OngoingDigital.update({_id: req.body.path},
	                   {
                        Completed : "Completed",
                        Ongoing : ""
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
                    
                    console.log(OngoingDigital);
                    
                    
				   res.redirect('/ads/view-Ongoing-digital');
				}
		 });
            
        }

    
    }

});


module.exports =router;