const express = require("express");
const router = express.Router();
const passport = require('passport');
var moment = require('moment');


const msg91 = require("msg91")("217817A7GCYaZrZEq5b0fc359", "PWORKS", "4" );

const LocalStrategy = require('passport-local').Strategy;

var Clientuser = require('../models/clientuser');
var CommentsSection = require('../models/CommentsSection');
var User = require('../models/user');



    //< !---------------------------------------------------------------------------------------------------Ads Model--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Ads Model--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Ads Model--------------------------------------------------------------------------------------------- !>

var Newspaper = require('../models/newspaper');
var OngoingMagazine = require('../models/ongoingMagazine');
var OngoingTheatre = require('../models/OngoingTheatre');
var OngoingTv = require('../models/OngoingTv');
var OngoingDigital = require('../models/OngoingDigital');

var NewspaperCommentsSection = require('../models/NewspaperCommentsSection');
var MagazineCommentsSection = require('../models/MagazineCommentsSection');
var TheatreCommentsSection = require('../models/TheatreCommentsSection');
var TvCommentsSection = require('../models/TvCommentsSection');
var DigitalCommentsSection = require('../models/DigitalCommentsSection');

    //< !---------------------------------------------------------------------------------------------------Videos Model--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Videos Model--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Videos Model--------------------------------------------------------------------------------------------- !>

var Twod = require('../models/twod');
var OngoingThreeD = require('../models/OngoingThreeD');
var OngoingExplainer = require('../models/OngoingExplainer');
var OngoingGreeting = require('../models/OngoingGreeting');
var OngoingPromotional = require('../models/OngoingPromotional');
var OngoingScribe = require('../models/OngoingScribe');
var OngoingVoiceOver = require('../models/OngoingVoiceOver');



var TwodCommentsSection = require('../models/TwodCommentsSection');
var ThreedCommentsSection = require('../models/ThreedCommentsSection');
var ExplainerCommentsSection = require('../models/ExplainerCommentsSection');
var GreetingCommentsSection = require('../models/GreetingCommentsSection');
var ScribeCommentsSection = require('../models/ScribeCommentsSection');
var PromotionalCommentsSection = require('../models/PromotionalCommentsSection');
var VoiceCommentsSection = require('../models/VoiceCommentsSection');


    //< !---------------------------------------------------------------------------------------------------Branding Model--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Branding Model--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Branding Model--------------------------------------------------------------------------------------------- !>

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
var StationeryCommentsSection = require('../models/StationeryCommentsSection');
var BrochureCommentsSection = require('../models/BrochureCommentsSection');
var MenuCommentsSection = require('../models/MenuCommentsSection');
var LandingCommentsSection = require('../models/LandingCommentsSection');
var PackageCommentsSection = require('../models/PackageCommentsSection');
var BannerCommentsSection = require('../models/BannerCommentsSection');
var ShirtCommentsSection = require('../models/ShirtCommentsSection');
var ShopCommentsSection = require('../models/ShopCommentsSection');
var HoardingCommentsSection = require('../models/HoardingCommentsSection');




    //< !-------------------------------------------------------------------------------------Gif--------------------------------------------------------------------------------------------- !>
    //< !-------------------------------------------------------------------------------------Gif--------------------------------------------------------------------------------------------- !>
    //< !-------------------------------------------------------------------------------------Gif--------------------------------------------------------------------------------------------- !>

var Gif = require('../models/Gif');
var GifCommentsSection = require('../models/GifCommentsSection');






    //< !-------------------------------------------------------------------------------------Miscellaneous--------------------------------------------------------------------------------------------- !>
    //< !-------------------------------------------------------------------------------------Miscellaneous--------------------------------------------------------------------------------------------- !>
    //< !-------------------------------------------------------------------------------------Miscellaneous--------------------------------------------------------------------------------------------- !>

    var Miscellaneous = require('../models/Miscellaneous');
    var MiscellaneousCommentsSection = require('../models/MiscellaneousCommentsSection');
    
    
    //< !----------------------------------------------------------------------------------------Scripts--------------------------------------------------------------------------------------------- !>
    //< !----------------------------------------------------------------------------------------Scripts--------------------------------------------------------------------------------------------- !>
    //< !----------------------------------------------------------------------------------------Scripts--------------------------------------------------------------------------------------------- !>

var Scripts = require('../models/Scripts');
var ScriptsCommentsSection = require('../models/ScriptsCommentsSection');




    //< !---------------------------------------------------------------------------------------------------Newsaper Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Newsaper Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Newsaper Ongoing--------------------------------------------------------------------------------------------- !>



//<!------------------------------------------------------------------------------------------------------------------- API ----------------------------------------------------------------------------------->
//<!------------------------------------------------------------------------------------------------------------------- API ----------------------------------------------------------------------------------->
//<!------------------------------------------------------------------------------------------------------------------- API ----------------------------------------------------------------------------------->
//<!------------------------------------------------------------------------------------------------------------------- API ----------------------------------------------------------------------------------->


router.get('/users', function(req, res){

    Clientuser.find()
    .then(notes => {
        res.send(notes);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });    
});

router.get('/2d-videos', function(req, res){

    Twod.find()
    .then(notes => {
        res.send(notes);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });    
});

router.get('/3d-videos', function(req, res){

    OngoingThreeD.find()
    .then(notes => {
        res.send(notes);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });    
});

router.get('/explainer-videos', function(req, res){

    OngoingExplainer.find()
    .then(notes => {
        res.send(notes);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });    
});

router.get('/greeting-videos', function(req, res){

    OngoingGreeting.find()
    .then(notes => {
        res.send(notes);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });    
});


router.get('/promotional-videos', function(req, res){

    OngoingPromotional.find()
    .then(notes => {
        res.send(notes);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });    
});

router.get('/scribe-videos', function(req, res){

    OngoingScribe.find()
    .then(notes => {
        res.send(notes);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });    
});

router.get('/voice-over', function(req, res){

    OngoingVoiceOver.find()
    .then(notes => {
        res.send(notes);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });    
});



//<!------------------------------------------------------------------------------------------------------------------- API Ends ----------------------------------------------------------------------------------->
//<!------------------------------------------------------------------------------------------------------------------- API Ends----------------------------------------------------------------------------------->
//<!------------------------------------------------------------------------------------------------------------------- API Ends----------------------------------------------------------------------------------->
//<!------------------------------------------------------------------------------------------------------------------- API Ends----------------------------------------------------------------------------------->



router.get('/progressor/', function(req, res){
            if(!req.user){
            res.redirect('/');
}
    else
    {
     res.render('progressor');
    }
});



router.get('/ongoingNews/:id/:username', function(req, res){
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var allocateUser = req.params.allocateUser;
    var session = req.params.username;
    var id = req.params.id;

    console.log(id);
    console.log(session);
    console.log(allocateUser);
          

    Newspaper.find({ toWhom: session}).sort({newspaper_date: -1, newspaper_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('ongoingNews',{Newspaper : docs});
    });

    }
});



router.get('/OngoingGiveMeAComment-Newspaper/:id/:username', function(req, res){
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var session = req.params.username;
    var id = req.params.id;
        var logopath = req.body.logopath;
        console.log(logopath);
    
        NewspaperCommentsSection.find({sub_id: req.params.id}, function(err, docs){
        if(err) throw err;
        else  res.render('OngoingGiveMeAComment-Newspaper',{NewspaperCommentsSection : docs});
    });
    }
    
});
   
    
router.get('/OngoingNewspaperLargeView/:id/:username',  function(req, res){
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var id = req.params.id;
    console.log(id);
        
                    Newspaper.findByIdAndUpdate({_id: req.params.id},
	                   {
				  Seen   : "Seen"
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{ 
    

                            Newspaper.find({ _id: req.params.id}, function(err, docs){
                                if(err) throw err;
                                else  res.render('OngoingNewspaperLargeView',{Newspaper : docs});
                            });
				 }
			 });

    }
});
    

    //PART -1
    
    router.post('/OngoingNewspaper/:id/:username',  function(req, res){
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var userid = req.body.userid;
    var username = req.body.username;
    var message = req.body.message;
    var brand = req.body.brand;
    var logo = req.body.logo;
    var newspaperid = req.body.newspaperid;
//    var mobile = req.body.mobile;

            var NewNewspaperCommentsSection = new NewspaperCommentsSection({
            sub_id : userid,
            message : message,
            username : username,
            brand : brand,
            newspaper_id : newspaperid,
            Companylogo_final_path : logo,
            commentDate: moment().format('MMMM Do YYYY'),
            commentTime: moment().format('LTS'),
            delStatus : "1"
        });
           
           
           
   
        NewspaperCommentsSection.createNewspaperCommentsSection(NewNewspaperCommentsSection, function(err, NewspaperCommentsSection){
                    if(err) throw err;
                    console.log(NewspaperCommentsSection);
        });
        
          User.findOne({},function(err, docs){
              var mobile = docs.mobile;
              console.log(mobile);
              
           if(err) throw err;
  else
            msg91.send(mobile, message, function(err, response){
            console.log(err);
            console.log(response); 
                
            });
   
                    res.redirect('back');
    	 });
    }

 });


    //< !---------------------------------------------------------------------------------------------------Magazine Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Magazine Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Magazine Ongoing--------------------------------------------------------------------------------------------- !>



router.get('/ongoingMagazine/:id/:username', function(req, res){
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var allocateUser = req.params.allocateUser;
    var session = req.params.username;
    var id = req.params.id;

    console.log(id);
    console.log(session);
    console.log(allocateUser);
          

    OngoingMagazine.find({ toWhom: session}).sort({magazine_date: -1, magazine_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('ongoingMagazine',{OngoingMagazine : docs});
    });
      
    }
});



router.get('/OngoingGiveMeAComment-Magazine/:id/:username', function(req, res){
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var session = req.params.username;
    var id = req.params.id;
        var logopath = req.body.logopath;
        console.log(logopath);
    
        MagazineCommentsSection.find({sub_id: req.params.id}, function(err, docs){
        if(err) throw err;
        else  res.render('OngoingGiveMeAComment-Magazine',{MagazineCommentsSection : docs});
    });
        
    }
    
});
   
    
router.get('/OngoingMagazineLargeView/:id/:username',  function(req, res){
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var id = req.params.id;
    console.log(id);
    
                    OngoingMagazine.findByIdAndUpdate({_id: req.params.id},
	                   {
				  Seen   : "Seen"
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{ 
                    OngoingMagazine.find({ _id: req.params.id}, function(err, docs){
                        if(err) throw err;
                        else  res.render('OngoingMagazineLargeView',{OngoingMagazine : docs});
                    });
				 }
			 });

    }
});
    



    //PART -1
    
    router.post('/OngoingMagazine/:id/:username',  function(req, res){
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var userid = req.body.userid;
    var username = req.body.username;
    var message = req.body.message;
    var brand = req.body.brand;
    var logo = req.body.logo;
    var magazineid = req.body.magazineid;
//    var mobile = req.body.mobile;

            var NewMagazineCommentsSection = new MagazineCommentsSection({
            sub_id : userid,
            message : message,
            username : username,
            brand : brand,
            magazine_id : magazineid,
            Companylogo_final_path : logo,
            commentDate: moment().format('MMMM Do YYYY'),
            commentTime: moment().format('LTS'),
            delStatus : "1"
        });
           
           
           
   
        MagazineCommentsSection.createMagazineCommentsSection(NewMagazineCommentsSection, function(err, MagazineCommentsSection){
                    if(err) throw err;
                    console.log(MagazineCommentsSection);
        });
        
            
          User.findOne({},function(err, docs){
              var mobile = docs.mobile;
              console.log(mobile);
              
           if(err) throw err;
  else
            msg91.send(mobile, message, function(err, response){
            console.log(err);
            console.log(response); 
                
            });
   
                    res.redirect('back');
    	 });
    }
        
    	 });






    //< !------------------------------------------------------------------------------------Theatre Ongoing--------------------------------------------------------------------------------------------- !>
    //< !------------------------------------------------------------------------------------Theatre Ongoing--------------------------------------------------------------------------------------------- !>
    //< !------------------------------------------------------------------------------------Theatre Ongoing--------------------------------------------------------------------------------------------- !>



router.get('/OngoingTheatre/:id/:username', function(req, res){
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var allocateUser = req.params.allocateUser;
    var session = req.params.username;
    var id = req.params.id;

    console.log(id);
    console.log(session);
    console.log(allocateUser);
          

    OngoingTheatre.find({ toWhom: session}).sort({theatre_date: -1, theatre_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('OngoingTheatre',{OngoingTheatre : docs});
    });
        
    }

});



router.get('/OngoingGiveMeAComment-Theatre/:id/:username', function(req, res){
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var session = req.params.username;
    var id = req.params.id;
        var logopath = req.body.logopath;
        console.log(logopath);
    
        TheatreCommentsSection.find({sub_id: req.params.id}, function(err, docs){
        if(err) throw err;
        else  res.render('OngoingGiveMeAComment-Theatre',{TheatreCommentsSection : docs});
    });
        
    }
    
});
   
    
router.get('/OngoingTheatreLargeView/:id/:username',  function(req, res){
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var id = req.params.id;
    console.log(id);
                OngoingTheatre.findByIdAndUpdate({_id: req.params.id},
	                   {
				  Seen   : "Seen"
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{ 
                            OngoingTheatre.find({ _id: req.params.id}, function(err, docs){
                                if(err) throw err;
                                else  res.render('OngoingTheatreLargeView',{OngoingTheatre : docs});
                            });
				 }
			 });

    }
});
    

    
    //PART -1
    
    router.post('/OngoingTheatre/:id/:username',  function(req, res){
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var userid = req.body.userid;
    var username = req.body.username;
    var message = req.body.message;
    var brand = req.body.brand;
    var logo = req.body.logo;
    var theatreid = req.body.theatreid;
//    var mobile = req.body.mobile;

            var NewTheatreCommentsSection = new TheatreCommentsSection({
            sub_id : userid,
            message : message,
            username : username,
            brand : brand,
            tv_id : theatreid,
            Companylogo_final_path : logo,
            commentDate: moment().format('MMMM Do YYYY'),
            commentTime: moment().format('LTS'),
            delStatus : "1"
        });
           
           
           
   
        TheatreCommentsSection.createTheatreCommentsSection(NewTheatreCommentsSection, function(err, TheatreCommentsSection){
                    if(err) throw err;
                    console.log(TheatreCommentsSection);
        });
        
            
           User.findOne({},function(err, docs){
              var mobile = docs.mobile;
              console.log(mobile);
              
           if(err) throw err;
  else
            msg91.send(mobile, message, function(err, response){
            console.log(err);
            console.log(response); 
                
            });
   
                    res.redirect('back');
    	 });
    }
    	 });






    //< !-----------------------------------------------------------------------------------Tv Ongoing--------------------------------------------------------------------------------------------- !>
    //< !-----------------------------------------------------------------------------------Tv Ongoing--------------------------------------------------------------------------------------------- !>
    //< !-----------------------------------------------------------------------------------Tv Ongoing--------------------------------------------------------------------------------------------- !>



router.get('/OngoingTv/:id/:username', function(req, res){
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var allocateUser = req.params.allocateUser;
    var session = req.params.username;
    var id = req.params.id;

    console.log(id);
    console.log(session);
    console.log(allocateUser);
          

    OngoingTv.find({ toWhom: session}).sort({tv_date: -1, tv_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('OngoingTv',{OngoingTv : docs});
    });
    }

});


router.get('/OngoingGiveMeAComment-Tv/:id/:username', function(req, res){
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var session = req.params.username;
    var id = req.params.id;
        var logopath = req.body.logopath;
        console.log(logopath);
    
        TvCommentsSection.find({sub_id: req.params.id}, function(err, docs){
        if(err) throw err;
        else  res.render('OngoingGiveMeAComment-Tv',{TvCommentsSection : docs});
    });
        
    }
    
});
   
    
router.get('/OngoingTvLargeView/:id/:username',  function(req, res){
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var id = req.params.id;
    console.log(id);
    
            OngoingTv.findByIdAndUpdate({_id: req.params.id},
	                   {
				  Seen   : "Seen"
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{ 
    
                        OngoingTv.find({ _id: req.params.id}, function(err, docs){
                            if(err) throw err;
                            else  res.render('OngoingTvLargeView',{OngoingTv : docs});
                        });
				 }
			 });
    
    }
    
});
    


    
    //PART -1
    
    router.post('/OngoingTv/:id/:username',  function(req, res){
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var userid = req.body.userid;
    var username = req.body.username;
    var message = req.body.message;
    var brand = req.body.brand;
    var logo = req.body.logo;
    var tvid = req.body.tvid;
//    var mobile = req.body.mobile;

            var NewTvCommentsSection = new TvCommentsSection({
            sub_id : userid,
            message : message,
            username : username,
            brand : brand,
            tv_id : tvid,
            Companylogo_final_path : logo,
            commentDate: moment().format('MMMM Do YYYY'),
            commentTime: moment().format('LTS'),
            delStatus : "1"
        });
           
           
           
   
        TvCommentsSection.createTvCommentsSection(NewTvCommentsSection, function(err, TvCommentsSection){
                    if(err) throw err;
                    console.log(TvCommentsSection);
        });
        
            
  
          User.findOne({},function(err, docs){
              var mobile = docs.mobile;
              console.log(mobile);
              
           if(err) throw err;
  else
            msg91.send(mobile, message, function(err, response){
            console.log(err);
            console.log(response); 
                
            });
   
                    res.redirect('back');
    	 });
    }
    	 });





    //< !--------------------------------------------------------------------------------Digital Ongoing--------------------------------------------------------------------------------------------- !>
    //< !--------------------------------------------------------------------------------Digital Ongoing--------------------------------------------------------------------------------------------- !>
    //< !--------------------------------------------------------------------------------Digital Ongoing--------------------------------------------------------------------------------------------- !>



router.get('/OngoingDigital/:id/:username', function(req, res){
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var allocateUser = req.params.allocateUser;
    var session = req.params.username;
    var id = req.params.id;

    console.log(id);
    console.log(session);
    console.log(allocateUser);
          

    OngoingDigital.find({ toWhom: session}).sort({digital_date: -1, digital_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('OngoingDigital',{OngoingDigital : docs});
    });
      
    }
});


router.get('/OngoingGiveMeAComment-Digital/:id/:username', function(req, res){
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var session = req.params.username;
    var id = req.params.id;
        var logopath = req.body.logopath;
        console.log(logopath);
    
        DigitalCommentsSection.find({sub_id: req.params.id}, function(err, docs){
        if(err) throw err;
        else  res.render('OngoingGiveMeAComment-Digital',{DigitalCommentsSection : docs});
    });
    }
    
});
   
    
router.get('/OngoingDigitalLargeView/:id/:username',  function(req, res){
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var id = req.params.id;
    console.log(id);
        OngoingDigital.findByIdAndUpdate({_id: req.params.id},
	                   {
				  Seen   : "Seen"
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{ 
                                OngoingDigital.find({ _id: req.params.id}, function(err, docs){
                                    if(err) throw err;
                                    else  res.render('OngoingDigitalLargeView',{OngoingDigital : docs});
                                });
				 }
			 });

    }
});
    

    
    //PART -1
    
    router.post('/OngoingDigital/:id/:username',  function(req, res){
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var userid = req.body.userid;
    var username = req.body.username;
    var message = req.body.message;
    var brand = req.body.brand;
    var logo = req.body.logo;
    var digitalid = req.body.digitalid;
//    var mobile = req.body.mobile;

            var NewDigitalCommentsSection = new DigitalCommentsSection({
            sub_id : userid,
            message : message,
            username : username,
            brand : brand,
            digital_id : digitalid,
            Companylogo_final_path : logo,
            commentDate: moment().format('MMMM Do YYYY'),
            commentTime: moment().format('LTS'),
            delStatus : "1"
        });
           
           
           
   
        DigitalCommentsSection.createDigitalCommentsSection(NewDigitalCommentsSection, function(err, DigitalCommentsSection){
                    if(err) throw err;
                    console.log(DigitalCommentsSection);
        });
        
            
  
          User.findOne({},function(err, docs){
              var mobile = docs.mobile;
              console.log(mobile);
              
           if(err) throw err;
  else
            msg91.send(mobile, message, function(err, response){
            console.log(err);
            console.log(response); 
                
            });
   
                    res.redirect('back');
    	 });
    }
        
    	 });










    //< !---------------------------------------------------------------------------------------------------Videos Section--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Videos Section--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Videos Section--------------------------------------------------------------------------------------------- !>




    //< !--------------------------------------------------------------------------------------2d Ongoing--------------------------------------------------------------------------------------------- !>
    //< !--------------------------------------------------------------------------------------2d Ongoing--------------------------------------------------------------------------------------------- !>
    //< !--------------------------------------------------------------------------------------2d Ongoing--------------------------------------------------------------------------------------------- !>


router.get('/view-Ongoing-2d/:id/:username', function(req,res){
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var session = req.params.username;
        Twod.find({toWhom: session}).sort({twod_date: -1, twod_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-Ongoing-2d',{Twod : docs});
    });   
        
    }
});




router.get('/giveMeAComment-TwoD/:id/:username', function(req, res){
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var session = req.params.username;
    var id = req.params.id;
        var logopath = req.body.logopath;
        console.log(logopath);
    
        TwodCommentsSection.find({sub_id: req.params.id}, function(err, docs){
        if(err) throw err;
        else  res.render('OngoingGiveMeAComment-TwoD',{TwodCommentsSection : docs});
    });
        
    }
    
});
   
    
router.get('/OngoingTwoDLargeView/:id/:username',  function(req, res){
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var id = req.params.id;
    console.log(id);
    
    Twod.findByIdAndUpdate({_id: req.params.id},
	                   {
				  Seen   : "Seen"
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{
                        Twod.find({ _id: req.params.id}, function(err, docs){
                         if(err) throw err;
                         else  res.render('OngoingTwoDLargeView',{Twod : docs});
                            });
				 }
			 });
    
    
    }
    
});
    



    //PART -1
    
    router.post('/view-Ongoing-2d/:id/:username',  function(req, res){
        
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var userid = req.body.userid;
    var username = req.body.username;
    var message = req.body.message;
    var brand = req.body.brand;
    var logo = req.body.logo;
    var TwoD = req.body.TwoD;
//    var mobile = req.body.mobile;

            var NewTwodCommentsSection = new TwodCommentsSection({
            sub_id : userid,
            message : message,
            username : username,
            brand : brand,
            twod_id : TwoD,
            Companylogo_final_path : logo,
            commentDate: moment().format('MMMM Do YYYY'),
            commentTime: moment().format('LTS'),
            delStatus : "1"
        });
           
           
           
   
        TwodCommentsSection.createTwodCommentsSection(NewTwodCommentsSection, function(err, TwodCommentsSection){
                    if(err) throw err;
                    console.log(TwodCommentsSection);
        });
        
            
            User.findOne({},function(err, docs){
              var mobile = docs.mobile;
              console.log(mobile);
              
           if(err) throw err;
  else
            msg91.send(mobile, message, function(err, response){
            console.log(err);
            console.log(response); 
                
            });
   
                    res.redirect('back');
    	 });
    }
        
    	 });
    	 

    







    //< !----------------------------------------------------------------------------------------3d Ongoing--------------------------------------------------------------------------------------------- !>
    //< !----------------------------------------------------------------------------------------3d Ongoing--------------------------------------------------------------------------------------------- !>
    //< !----------------------------------------------------------------------------------------3d Ongoing--------------------------------------------------------------------------------------------- !>



router.get('/OngoingThreeD/:id/:username', function(req, res){
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var allocateUser = req.params.allocateUser;
    var session = req.params.username;
    var id = req.params.id;

    console.log(id);
    console.log(session);
    console.log(allocateUser);
          

    OngoingThreeD.find({ toWhom: session}).sort({threed_date: -1, threed_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('OngoingThreeD',{OngoingThreeD : docs});
    });
     
    }

});


router.get('/giveMeAComment-ThreeD/:id/:username', function(req, res){
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var session = req.params.username;
    var id = req.params.id;
        var logopath = req.body.logopath;
        console.log(logopath);
    
        ThreedCommentsSection.find({sub_id: req.params.id}, function(err, docs){
        if(err) throw err;
        else  res.render('OngoingGiveMeAComment-ThreeD',{ThreedCommentsSection : docs});
    });
    }
    
});
   
    
router.get('/OngoingThreeDLargeView/:id/:username',  function(req, res){
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var id = req.params.id;
    console.log(id);
        OngoingThreeD.findByIdAndUpdate({_id: req.params.id},
	                   {
				  Seen   : "Seen"
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{ 
                    OngoingThreeD.find({ _id: req.params.id}, function(err, docs){
                        if(err) throw err;
                        else  res.render('OngoingThreeDLargeView',{OngoingThreeD : docs});
                    });
				 }
			 });
    
    
    }
    
});
    


    //PART -1
    
    router.post('/OngoingThreeD/:id/:username',  function(req, res){
        
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var userid = req.body.userid;
    var username = req.body.username;
    var message = req.body.message;
    var brand = req.body.brand;
    var logo = req.body.logo;
    var ThreeD = req.body.ThreeD;
//    var mobile = req.body.mobile;

            var NewThreedCommentsSection = new ThreedCommentsSection({
            sub_id : userid,
            message : message,
            username : username,
            brand : brand,
            threed_id : ThreeD,
            Companylogo_final_path : logo,
            commentDate: moment().format('MMMM Do YYYY'),
            commentTime: moment().format('LTS'),
            delStatus : "1"
        });
           
           
           
   
        ThreedCommentsSection.createThreedCommentsSection(NewThreedCommentsSection, function(err, ThreedCommentsSection){
                    if(err) throw err;
                    console.log(ThreedCommentsSection);
        });
        
            
          User.findOne({},function(err, docs){
              var mobile = docs.mobile;
              console.log(mobile);
              
           if(err) throw err;
  else
            msg91.send(mobile, message, function(err, response){
            console.log(err);
            console.log(response); 
                
            });
   
                    res.redirect('back');
    	 });
    }
        
    	 });
    	 






    //< !-----------------------------------------------------------------------------------Explainer Ongoing--------------------------------------------------------------------------------------------- !>
    //< !-----------------------------------------------------------------------------------Explainer Ongoing--------------------------------------------------------------------------------------------- !>
    //< !-----------------------------------------------------------------------------------Explainer Ongoing--------------------------------------------------------------------------------------------- !>



router.get('/OngoingExplainer/:id/:username', function(req, res){
    
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var allocateUser = req.params.allocateUser;
    var session = req.params.username;
    var id = req.params.id;

    console.log(id);
    console.log(session);
    console.log(allocateUser);
          

    OngoingExplainer.find({ toWhom: session}).sort({explainer_date: -1, explainer_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('OngoingExplainer',{OngoingExplainer : docs});
    });
      
    }
});


router.get('/OngoingGiveMeAComment-Explainer/:id/:username', function(req, res){
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var session = req.params.username;
    var id = req.params.id;
        var logopath = req.body.logopath;
        console.log(logopath);
    
        ExplainerCommentsSection.find({sub_id: req.params.id}, function(err, docs){
        if(err) throw err;
        else  res.render('OngoingGiveMeAComment-Explainer',{ExplainerCommentsSection : docs});
    });
    
    }
});
   
    
router.get('/OngoingExplainerLargeView/:id/:username',  function(req, res){
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var id = req.params.id;
    console.log(id);

            OngoingExplainer.findByIdAndUpdate({_id: req.params.id},
	                   {
				  Seen   : "Seen"
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{ 
                    OngoingExplainer.find({ _id: req.params.id}, function(err, docs){
                        if(err) throw err;
                        else  res.render('OngoingExplainerLargeView',{OngoingExplainer : docs});
                    });
				 }
			 });
        
    }
});
    




    //PART -1
    
    router.post('/OngoingExplainer/:id/:username',  function(req, res){
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var userid = req.body.userid;
    var username = req.body.username;
    var message = req.body.message;
    var brand = req.body.brand;
    var logo = req.body.logo;
    var explainerid = req.body.explainerid;
//    var mobile = req.body.mobile;

            var NewExplainerCommentsSection = new ExplainerCommentsSection({
            sub_id : userid,
            message : message,
            username : username,
            brand : brand,
            explainer_id : explainerid,
            Companylogo_final_path : logo,
            commentDate: moment().format('MMMM Do YYYY'),
            commentTime: moment().format('LTS'),
            delStatus : "1"
        });
           
           
           
   
        ExplainerCommentsSection.createExplainerCommentsSection(NewExplainerCommentsSection, function(err, ExplainerCommentsSection){
                    if(err) throw err;
                    console.log(ExplainerCommentsSection);
        });
        
            
          User.findOne({},function(err, docs){
              var mobile = docs.mobile;
              console.log(mobile);
              
           if(err) throw err;
  else
            msg91.send(mobile, message, function(err, response){
            console.log(err);
            console.log(response); 
                
            });
   
                    res.redirect('back');
    	 });
    }
        
    	 });
    	 



    //< !--------------------------------------------------------------------------------------Greeting Ongoing--------------------------------------------------------------------------------------------- !>
    //< !--------------------------------------------------------------------------------------Greeting Ongoing--------------------------------------------------------------------------------------------- !>
    //< !--------------------------------------------------------------------------------------Greeting Ongoing--------------------------------------------------------------------------------------------- !>



router.get('/OngoingGreeting/:id/:username', function(req, res){
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var allocateUser = req.params.allocateUser;
    var session = req.params.username;
    var id = req.params.id;

    console.log(id);
    console.log(session);
    console.log(allocateUser);
          

    OngoingGreeting.find({ toWhom: session}).sort({greeting_date: -1, greeting_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('OngoingGreeting',{OngoingGreeting : docs});
    });
      
    }
});


router.get('/OngoingGiveMeAComment-Greeting/:id/:username', function(req, res){
    
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var session = req.params.username;
    var id = req.params.id;
        var logopath = req.body.logopath;
        console.log(logopath);
    
    
        GreetingCommentsSection.find({sub_id: req.params.id}, function(err, docs){
        if(err) throw err;
        else  res.render('OngoingGiveMeAComment-Greeting',{GreetingCommentsSection : docs});
    });
        
    }
    
});
   
    
router.get('/OngoingGreetingLargeView/:id/:username',  function(req, res){
    
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var id = req.params.id;
    console.log(id);
        OngoingGreeting.findByIdAndUpdate({_id: req.params.id},
	                   {
				  Seen   : "Seen"
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{ 
                    OngoingGreeting.find({ _id: req.params.id}, function(err, docs){
                        if(err) throw err;
                        else  res.render('OngoingGreetingLargeView',{OngoingGreeting : docs});
                    });
				 }
			 });
        
    }
    
});
    

    //PART -1
    
    router.post('/OngoingGreeting/:id/:username',  function(req, res){
        
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var userid = req.body.userid;
    var username = req.body.username;
    var message = req.body.message;
    var brand = req.body.brand;
    var logo = req.body.logo;
    var greetingid = req.body.greetingid;
    var mobile = req.body.mobile;

            var NewGreetingCommentsSection = new GreetingCommentsSection({
            sub_id : userid,
            message : message,
            username : username,
            brand : brand,
            greeting_id : greetingid,
            Companylogo_final_path : logo,
            commentDate: moment().format('MMMM Do YYYY'),
            commentTime: moment().format('LTS'),
            delStatus : "1"
        });
           
           
           
   
        GreetingCommentsSection.createGreetingCommentsSection(NewGreetingCommentsSection, function(err, GreetingCommentsSection){
                    if(err) throw err;
                    console.log(GreetingCommentsSection);
        });
        
            
  
          User.findOne({},function(err, docs){
              var mobile = docs.mobile;
              console.log(mobile);
              
           if(err) throw err;
  else
            msg91.send(mobile, message, function(err, response){
            console.log(err);
            console.log(response); 
                
            });
   
                    res.redirect('back');
    	 });
    }
        
    	 });
    	 


    //< !--------------------------------------------------------------------------------------Promotional Ongoing--------------------------------------------------------------------------------------------- !>
    //< !--------------------------------------------------------------------------------------Promotional Ongoing--------------------------------------------------------------------------------------------- !>
    //< !--------------------------------------------------------------------------------------Promotional Ongoing--------------------------------------------------------------------------------------------- !>



router.get('/OngoingPromotional/:id/:username', function(req, res){
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var allocateUser = req.params.allocateUser;
    var session = req.params.username;
    var id = req.params.id;

    console.log(id);
    console.log(session);
    console.log(allocateUser);
          

    OngoingPromotional.find({ toWhom: session}).sort({promotional_date: -1, promotional_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('OngoingPromotional',{OngoingPromotional : docs});
    });
      
    }
});


router.get('/OngoingGiveMeAComment-Promotional/:id/:username', function(req, res){
    
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var session = req.params.username;
    var id = req.params.id;
        var logopath = req.body.logopath;
        console.log(logopath);
    
    
        PromotionalCommentsSection.find({sub_id: req.params.id}, function(err, docs){
        if(err) throw err;
        else  res.render('OngoingGiveMeAComment-Promotional',{PromotionalCommentsSection : docs});
    });
        
    }
    
});
   
    
router.get('/OngoingPromotionalLargeView/:id/:username',  function(req, res){
    
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var id = req.params.id;
    console.log(id);
        OngoingPromotional.findByIdAndUpdate({_id: req.params.id},
	                   {
				  Seen   : "Seen"
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{ 
                    OngoingPromotional.find({ _id: req.params.id}, function(err, docs){
                        if(err) throw err;
                        else  res.render('OngoingPromotionalLargeView',{OngoingPromotional : docs});
                    });
				 }
			 });
        
    }
    
});
    

    //PART -1
    
    router.post('/OngoingPromotional/:id/:username',  function(req, res){
        
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var userid = req.body.userid;
    var username = req.body.username;
    var message = req.body.message;
    var brand = req.body.brand;
    var logo = req.body.logo;
    var promotionalid = req.body.promotionalid;
    var mobile = req.body.mobile;

            var NewPromotionalCommentsSection = new PromotionalCommentsSection({
            sub_id : userid,
            message : message,
            username : username,
            brand : brand,
            promotional_id : promotionalid,
            Companylogo_final_path : logo,
            commentDate: moment().format('MMMM Do YYYY'),
            commentTime: moment().format('LTS'),
            delStatus : "1"
        });
           
           
           
   
        PromotionalCommentsSection.createPromotionalCommentsSection(NewPromotionalCommentsSection, function(err, PromotionalCommentsSection){
                    if(err) throw err;
                    console.log(PromotionalCommentsSection);
        });
        
            
  
          User.findOne({},function(err, docs){
              var mobile = docs.mobile;
              console.log(mobile);
              
           if(err) throw err;
  else
            msg91.send(mobile, message, function(err, response){
            console.log(err);
            console.log(response); 
                
            });
   
                    res.redirect('back');
    	 });
    }
        
    	 });
    	 


    



    //< !--------------------------------------------------------------------------------------Scribe Ongoing--------------------------------------------------------------------------------------------- !>
    //< !--------------------------------------------------------------------------------------Scribe Ongoing--------------------------------------------------------------------------------------------- !>
    //< !--------------------------------------------------------------------------------------Scribe Ongoing--------------------------------------------------------------------------------------------- !>



router.get('/OngoingScribe/:id/:username', function(req, res){
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var allocateUser = req.params.allocateUser;
    var session = req.params.username;
    var id = req.params.id;

    console.log(id);
    console.log(session);
    console.log(allocateUser);
          

    OngoingScribe.find({ toWhom: session}).sort({scribe_date: -1, scribe_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('OngoingScribe',{OngoingScribe : docs});
    });
      
    }
});


router.get('/OngoingGiveMeAComment-Scribe/:id/:username', function(req, res){
    
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var session = req.params.username;
    var id = req.params.id;
        var logopath = req.body.logopath;
        console.log(logopath);
    
    
        ScribeCommentsSection.find({sub_id: req.params.id}, function(err, docs){
        if(err) throw err;
        else  res.render('OngoingGiveMeAComment-Scribe',{ScribeCommentsSection : docs});
    });
        
    }
    
});
   
    
router.get('/OngoingScribeLargeView/:id/:username',  function(req, res){
    
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var id = req.params.id;
    console.log(id);
        OngoingScribe.findByIdAndUpdate({_id: req.params.id},
	                   {
				  Seen   : "Seen"
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{ 
                    OngoingScribe.find({ _id: req.params.id}, function(err, docs){
                        if(err) throw err;
                        else  res.render('OngoingScribeLargeView',{OngoingScribe : docs});
                    });
				 }
			 });
        
    }
    
});
    

    //PART -1
    
    router.post('/OngoingScribe/:id/:username',  function(req, res){
        
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var userid = req.body.userid;
    var username = req.body.username;
    var message = req.body.message;
    var brand = req.body.brand;
    var logo = req.body.logo;
    var scribeid = req.body.scribeid;
    var mobile = req.body.mobile;

            var NewScribeCommentsSection = new ScribeCommentsSection({
            sub_id : userid,
            message : message,
            username : username,
            brand : brand,
            scribe_id : scribeid,
            Companylogo_final_path : logo,
            commentDate: moment().format('MMMM Do YYYY'),
            commentTime: moment().format('LTS'),
            delStatus : "1"
        });
           
           
           
   
        ScribeCommentsSection.createScribeCommentsSection(NewScribeCommentsSection, function(err, ScribeCommentsSection){
                    if(err) throw err;
                    console.log(ScribeCommentsSection);
        });
        
            
  
          User.findOne({},function(err, docs){
              var mobile = docs.mobile;
              console.log(mobile);
              
           if(err) throw err;
  else
            msg91.send(mobile, message, function(err, response){
            console.log(err);
            console.log(response); 
                
            });
   
                    res.redirect('back');
    	 });
    }
        
    	 });
    	 


    



    //< !-----------------------------------------------------------------------------------Voice Ongoing--------------------------------------------------------------------------------------------- !>
    //< !-----------------------------------------------------------------------------------Voice Ongoing--------------------------------------------------------------------------------------------- !>
    //< !-----------------------------------------------------------------------------------Voice Ongoing--------------------------------------------------------------------------------------------- !>



router.get('/OngoingVoiceOver/:id/:username', function(req, res){
    
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var allocateUser = req.params.allocateUser;
    var session = req.params.username;
    var id = req.params.id;

    console.log(id);
    console.log(session);
    console.log(allocateUser);
          

    OngoingVoiceOver.find({ toWhom: session}).sort({voice_date: -1, voice_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('OngoingVoiceOver',{OngoingVoiceOver : docs});
    });
      
    }
});


router.get('/OngoingGiveMeAComment-Voice/:id/:username', function(req, res){
    
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var session = req.params.username;
    var id = req.params.id;
        var logopath = req.body.logopath;
        console.log(logopath);
    
        VoiceCommentsSection.find({sub_id: req.params.id}, function(err, docs){
        if(err) throw err;
        else  res.render('OngoingGiveMeAComment-Voice',{VoiceCommentsSection : docs});
    });
        
    }
    
});
   
    
router.get('/OngoingVoiceLargeView/:id/:username',  function(req, res){
    
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var id = req.params.id;
    console.log(id);
            OngoingVoiceOver.findByIdAndUpdate({_id: req.params.id},
	                   {
				  Seen   : "Seen"
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{ 
                    OngoingVoiceOver.find({ _id: req.params.id}, function(err, docs){
                        if(err) throw err;
                        else  res.render('OngoingVoiceLargeView',{OngoingVoiceOver : docs});
                    });
                }
			 });
    }
    
});
    
    //PART -1
    
    router.post('/OngoingVoice/:id/:username',  function(req, res){
        
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var userid = req.body.userid;
    var username = req.body.username;
    var message = req.body.message;
    var brand = req.body.brand;
    var logo = req.body.logo;
    var voiceid = req.body.voiceid;
//    var mobile = req.body.mobile;

            var NewVoiceCommentsSection = new VoiceCommentsSection({
            sub_id : userid,
            message : message,
            username : username,
            brand : brand,
            voice_id : voiceid,
            Companylogo_final_path : logo,
            commentDate: moment().format('MMMM Do YYYY'),
            commentTime: moment().format('LTS'),
            delStatus : "1"
        });
           
           
           
   
        VoiceCommentsSection.createVoiceCommentsSection(NewVoiceCommentsSection, function(err, VoiceCommentsSection){
                    if(err) throw err;
                    console.log(VoiceCommentsSection);
        });
        
           User.findOne({},function(err, docs){
              var mobile = docs.mobile;
              console.log(mobile);
              
           if(err) throw err;
  else
            msg91.send(mobile, message, function(err, response){
            console.log(err);
            console.log(response); 
                
            });
   
                    res.redirect('back');
    	 });
    }
        
    	 });
    	 


    //< !---------------------------------------------------------------------------------------------------Branding Ongoing-------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Branding Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Branding Ongoing--------------------------------------------------------------------------------------------- !>






    //< !-------------------------------------------------------------------------------Logo Ongoing--------------------------------------------------------------------------------------------- !>
    //< !-------------------------------------------------------------------------------Logo Ongoing--------------------------------------------------------------------------------------------- !>
    //< !-------------------------------------------------------------------------------Logo Ongoing--------------------------------------------------------------------------------------------- !>



router.get('/OngoingLogo/:id/:username', function(req, res){
    
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var allocateUser = req.params.allocateUser;
    var session = req.params.username;
    var id = req.params.id;

    Logo.find({ toWhom: session}).sort({logo_date: -1, logo_time: 1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('OngoingLogo',{Logo : docs});
    });


    }
});


router.get('/giveMeAComment/:id/:username', function(req, res){
    
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var session = req.params.username;
    var id = req.params.id;
        var logopath = req.body.logopath;
        console.log(logopath);
    
        CommentsSection.find({sub_id: req.params.id}, function(err, docs){
        if(err) throw err;
        else  res.render('OngoingGiveMeAComment',{CommentsSection : docs});
    });
        
    }
    
});
   
    


router.get('/OngoingLogoLargeView/:id/:username',  function(req, res){
    
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var id = req.params.id;
    console.log(id);
                Logo.findByIdAndUpdate({_id: req.params.id},
	                   {
				  Seen   : "Seen"
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{ 
                        Logo.find({ _id: req.params.id}, function(err, docs){
                            if(err) throw err;
                            else  res.render('OngoingLogoLargeView',{Logo : docs});
                        });
                }
			 });
        
    }
});
    


    
    //PART -1
    
    router.post('/OngoingLogo/:id/:username',  function(req, res){
        
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var userid = req.body.userid;
    var username = req.body.username;
    var message = req.body.message;
    var brand = req.body.brand;
    var logo = req.body.logo;
    var logoid = req.body.logoid;
//    var mobile = req.body.mobile;

            var NewCommentsSection = new CommentsSection({
            sub_id : userid,
            message : message,
            username : username,
            brand : brand,
            logo_id : logoid,
            Companylogo_final_path : logo,
            commentDate: moment().format('MMMM Do YYYY'),
            commentTime: moment().format('LTS'),
            delStatus : "1"
        });
           
           
           
   
        CommentsSection.createCommentsSection(NewCommentsSection, function(err, CommentsSection){
                    if(err) throw err;
                    console.log(CommentsSection);
        });
        
          User.findOne({},function(err, docs){
              var mobile = docs.mobile;
              console.log(mobile);
              
           if(err) throw err;
  else
            msg91.send(mobile, message, function(err, response){
            console.log(err);
            console.log(response); 
                
            });
   
                    res.redirect('back');
    	 });
        
    }
    	 });
    	 



    //< !-------------------------------------------------------------------------------Stationery Ongoing--------------------------------------------------------------------------------------------- !>
    //< !-------------------------------------------------------------------------------Stationery Ongoing--------------------------------------------------------------------------------------------- !>
    //< !-------------------------------------------------------------------------------Stationery Ongoing--------------------------------------------------------------------------------------------- !>



router.get('/OngoingStationery/:id/:username', function(req, res){
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var allocateUser = req.params.allocateUser;
    var session = req.params.username;
    var id = req.params.id;

    console.log(id);
    console.log(session);
    console.log(allocateUser);
          

    OngoingStationery.find({ toWhom: session}).sort({stationery_date: -1, stationery_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('OngoingStationery',{OngoingStationery : docs});
    });
      
    }
});




router.get('/giveMeAComment-Stationery/:id/:username', function(req, res){
    
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var session = req.params.username;
    var id = req.params.id;
        var logopath = req.body.logopath;
        console.log(logopath);
    
        StationeryCommentsSection.find({sub_id: req.params.id}, function(err, docs){
        if(err) throw err;
        else  res.render('OngoingGiveMeAComment-Stationery',{StationeryCommentsSection : docs});
    });
        
    }
    
});
   
    
router.get('/OngoingStationeryLargeView/:id/:username',  function(req, res){
    
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var id = req.params.id;
    console.log(id);

    
                    OngoingStationery.findByIdAndUpdate({_id: req.params.id},
	                   {
				  Seen   : "Seen"
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{
                        OngoingStationery.find({ _id: req.params.id}, function(err, docs){
                            if(err) throw err;
                            else  res.render('OngoingStationeryLargeView',{OngoingStationery : docs});
                        });
                }
			 });
        
    }
    
});
    



    
    //PART -1
    
    router.post('/OngoingStationery/:id/:username',  function(req, res){
        
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var userid = req.body.userid;
    var username = req.body.username;
    var message = req.body.message;
    var brand = req.body.brand;
    var logo = req.body.logo;
    var stationeryid = req.body.stationeryid;
//    var mobile = req.body.mobile;

            var NewStationeryCommentsSection = new StationeryCommentsSection({
            sub_id : userid,
            message : message,
            username : username,
            brand : brand,
            stationery_id : stationeryid,
            Companylogo_final_path : logo,
            commentDate: moment().format('MMMM Do YYYY'),
            commentTime: moment().format('LTS'),
            delStatus : "1"
        });
           
           
           
   
        StationeryCommentsSection.createStationeryCommentsSection(NewStationeryCommentsSection, function(err, StationeryCommentsSection){
                    if(err) throw err;
                    console.log(StationeryCommentsSection);
        });
        
          User.findOne({},function(err, docs){
              var mobile = docs.mobile;
              console.log(mobile);
              
           if(err) throw err;
  else
            msg91.send(mobile, message, function(err, response){
            console.log(err);
            console.log(response); 
                
            });
   
                    res.redirect('back');
    	 });
        
    }
    	 });
    	 


    //< !---------------------------------------------------------------------------------------------------Brochure Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Brochure Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Brochure Ongoing--------------------------------------------------------------------------------------------- !>



router.get('/OngoingBrochure/:id/:username', function(req, res){
    
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var allocateUser = req.params.allocateUser;
    var session = req.params.username;
    var id = req.params.id;

    console.log(id);
    console.log(session);
    console.log(allocateUser);
          

    OngoingBrochure.find({ toWhom: session}).sort({brochure_date: -1, brochure_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('OngoingBrochure',{OngoingBrochure : docs});
    });
    
    }

});





router.get('/giveMeAComment-Brochure/:id/:username', function(req, res){
    
    
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var session = req.params.username;
    var id = req.params.id;
        var logopath = req.body.logopath;
        console.log(logopath);
    
        BrochureCommentsSection.find({sub_id: req.params.id}, function(err, docs){
        if(err) throw err;
        else  res.render('OngoingGiveMeAComment-Brochure',{BrochureCommentsSection : docs});
    });
        
    }
    
});
   


router.get('/OngoingBrochureLargeView/:id/:username',  function(req, res){
    
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var id = req.params.id;
    console.log(id);
                OngoingBrochure.findByIdAndUpdate({_id: req.params.id},
	                   {
				  Seen   : "Seen"
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{
                            OngoingBrochure.find({ _id: req.params.id}, function(err, docs){
                                if(err) throw err;
                                else  res.render('OngoingBrochureLargeView',{OngoingBrochure : docs});
                            });
                }
			 });
        
    }
});
    




    
    //PART -1
    
    router.post('/OngoingBrochure/:id/:username',  function(req, res){
        
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var userid = req.body.userid;
    var username = req.body.username;
    var message = req.body.message;
    var brand = req.body.brand;
    var logo = req.body.logo;
    var brochureid = req.body.brochureid;
//    var mobile = req.body.mobile;

            var NewBrochureCommentsSection = new BrochureCommentsSection({
            sub_id : userid,
            message : message,
            username : username,
            brand : brand,
            brochure_id : brochureid,
            Companylogo_final_path : logo,
            commentDate: moment().format('MMMM Do YYYY'),
            commentTime: moment().format('LTS'),
            delStatus : "1"
        });
           
           
           
   
        BrochureCommentsSection.createBrochureCommentsSection(NewBrochureCommentsSection, function(err, BrochureCommentsSection){
                    if(err) throw err;
                    console.log(BrochureCommentsSection);
        });
        
            
          User.findOne({},function(err, docs){
              var mobile = docs.mobile;
              console.log(mobile);
              
           if(err) throw err;
  else
            msg91.send(mobile, message, function(err, response){
            console.log(err);
            console.log(response); 
                
            });
   
                    res.redirect('back');
    	 });
        
    }
    	 });
    	 


    //< !---------------------------------------------------------------------------------------Menu Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------Menu Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------Menu Ongoing--------------------------------------------------------------------------------------------- !>



router.get('/OngoingMenu/:id/:username', function(req, res){
    
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var allocateUser = req.params.allocateUser;
    var session = req.params.username;
    var id = req.params.id;

    console.log(id);
    console.log(session);
    console.log(allocateUser);
          

    OngoingMenu.find({ toWhom: session}).sort({menu_date: -1, menu_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('OngoingMenu',{OngoingMenu : docs});
    });
      
    }
});





router.get('/giveMeAComment-Menu/:id/:username', function(req, res){
    
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var session = req.params.username;
    var id = req.params.id;
        var logopath = req.body.logopath;
        console.log(logopath);
    
        MenuCommentsSection.find({sub_id: req.params.id}, function(err, docs){
        if(err) throw err;
        else  res.render('OngoingGiveMeAComment-Menu',{MenuCommentsSection : docs});
    });
        
    }
    
});
   

   


router.get('/OngoingMenuLargeView/:id/:username',  function(req, res){
    
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var id = req.params.id;
                    OngoingMenu.findByIdAndUpdate({_id: req.params.id},
	                   {
				  Seen   : "Seen"
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{
                                    OngoingMenu.find({ _id: req.params.id}, function(err, docs){
                                        if(err) throw err;
                                        else  res.render('OngoingMenuLargeView',{OngoingMenu : docs});
                                    });
                }
			 });

    }
});
    

   //PART -1
    
    router.post('/OngoingMenu/:id/:username',  function(req, res){
        
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var userid = req.body.userid;
    var username = req.body.username;
    var message = req.body.message;
    var brand = req.body.brand;
    var logo = req.body.logo;
    var menuid = req.body.menuid;
//    var mobile = req.body.mobile;

            var NewMenuCommentsSection = new MenuCommentsSection({
            sub_id : userid,
            message : message,
            username : username,
            brand : brand,
            menu_id : menuid,
            Companylogo_final_path : logo,
            commentDate: moment().format('MMMM Do YYYY'),
            commentTime: moment().format('LTS'),
            delStatus : "1"
        });
           
           
           
   
        MenuCommentsSection.createMenuCommentsSection(NewMenuCommentsSection, function(err, MenuCommentsSection){
                    if(err) throw err;
                    console.log(MenuCommentsSection);
        });
        
            User.findOne({},function(err, docs){
              var mobile = docs.mobile;
              console.log(mobile);
              
           if(err) throw err;
  else
            msg91.send(mobile, message, function(err, response){
            console.log(err);
            console.log(response); 
                
            });
   
                    res.redirect('back');
    	 });
        
    }
        
    	 });
    	 



    //< !---------------------------------------------------------------------------------------------------Landing Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Landing Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Landing Ongoing--------------------------------------------------------------------------------------------- !>



router.get('/OngoingLanding/:id/:username', function(req, res){
    
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var allocateUser = req.params.allocateUser;
    var session = req.params.username;
    var id = req.params.id;

    console.log(id);
    console.log(session);
    console.log(allocateUser);
          

    OngoingLanding.find({ toWhom: session}).sort({landing_date: -1, landing_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('OngoingLanding',{OngoingLanding : docs});
    });
      
    }
});



router.get('/giveMeAComment-Landing/:id/:username', function(req, res){
    
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var session = req.params.username;
    var id = req.params.id;
        var logopath = req.body.logopath;
        console.log(logopath);
    
    
        LandingCommentsSection.find({sub_id: req.params.id}, function(err, docs){
        if(err) throw err;
        else  res.render('OngoingGiveMeAComment-Landing',{LandingCommentsSection : docs});
    });
        
    }
    
});
   

   
router.get('/OngoingLandingLargeView/:id/:username',  function(req, res){
    
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var id = req.params.id;
    
                        OngoingLanding.findByIdAndUpdate({_id: req.params.id},
	                   {
				  Seen   : "Seen"
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{
                                OngoingLanding.find({ _id: req.params.id}, function(err, docs){
                                    if(err) throw err;
                                    else  res.render('OngoingLandingLargeView',{OngoingLanding : docs});
                                });
                }
			 });

    }
});
    

   //PART -1
    
    router.post('/OngoingLanding/:id/:username',  function(req, res){
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var userid = req.body.userid;
    var username = req.body.username;
    var message = req.body.message;
    var brand = req.body.brand;
    var logo = req.body.logo;
    var landingid = req.body.landingid;
//    var mobile = req.body.mobile;

            var NewLandingCommentsSection = new LandingCommentsSection({
            sub_id : userid,
            message : message,
            username : username,
            brand : brand,
            landing_id : landingid,
            Companylogo_final_path : logo,
            commentDate: moment().format('MMMM Do YYYY'),
            commentTime: moment().format('LTS'),
            delStatus : "1"
        });
           
           
           
   
        LandingCommentsSection.createLandingCommentsSection(NewLandingCommentsSection, function(err, LandingCommentsSection){
                    if(err) throw err;
                    console.log(LandingCommentsSection);
        });
        
          User.findOne({},function(err, docs){
              var mobile = docs.mobile;
              console.log(mobile);
              
           if(err) throw err;
  else
            msg91.send(mobile, message, function(err, response){
            console.log(err);
            console.log(response); 
                
            });
   
                    res.redirect('back');
    	 });
        
    }
    	 });
    	 



    //< !---------------------------------------------------------------------------------------------------Package Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Package Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Package Ongoing--------------------------------------------------------------------------------------------- !>



router.get('/OngoingPackage/:id/:username', function(req, res){
    
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var allocateUser = req.params.allocateUser;
    var session = req.params.username;
    var id = req.params.id;

    console.log(id);
    console.log(session);
    console.log(allocateUser);
          

    OngoingPackage.find({ toWhom: session}).sort({package_date: -1, package_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('OngoingPackage',{OngoingPackage : docs});
    });
      
        
    }

});




    

router.get('/giveMeAComment-Package/:id/:username', function(req, res){
    
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var session = req.params.username;
    var id = req.params.id;
        var logopath = req.body.logopath;
        console.log(logopath);
    
        PackageCommentsSection.find({sub_id: req.params.id}, function(err, docs){
        if(err) throw err;
        else  res.render('OngoingGiveMeAComment-Package',{PackageCommentsSection : docs});
    });
        
        
    }
    
});
   

   
router.get('/OngoingPackageLargeView/:id/:username',  function(req, res){
    
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var id = req.params.id;
    
        
                        OngoingPackage.findByIdAndUpdate({_id: req.params.id},
	                   {
				  Seen   : "Seen"
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{
                            OngoingPackage.find({ _id: req.params.id}, function(err, docs){
                                if(err) throw err;
                                else  res.render('OngoingPackageLargeView',{OngoingPackage : docs});
                            });
                }
			 });
    
    }
    
});
    

   //PART -1
    
    router.post('/OngoingPackage/:id/:username',  function(req, res){
        
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var userid = req.body.userid;
    var username = req.body.username;
    var message = req.body.message;
    var brand = req.body.brand;
    var logo = req.body.logo;
    var packageid = req.body.packageid;
//    var mobile = req.body.mobile;

            var NewPackageCommentsSection = new PackageCommentsSection({
            sub_id : userid,
            message : message,
            username : username,
            brand : brand,
            package_id : packageid,
            Companylogo_final_path : logo,
            commentDate: moment().format('MMMM Do YYYY'),
            commentTime: moment().format('LTS'),
            delStatus : "1"
        });
           
           
           
   
        PackageCommentsSection.createPackageCommentsSection(NewPackageCommentsSection, function(err, PackageCommentsSection){
                    if(err) throw err;
                    console.log(PackageCommentsSection);
        });
        
          User.findOne({},function(err, docs){
              var mobile = docs.mobile;
              console.log(mobile);
              
           if(err) throw err;
  else
            msg91.send(mobile, message, function(err, response){
            console.log(err);
            console.log(response); 
                
            });
   
                    res.redirect('back');
    	 });
        
    }
    	 });



    //< !---------------------------------------------------------------------------------------------------Banner Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Banner Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Banner Ongoing--------------------------------------------------------------------------------------------- !>



router.get('/OngoingBanner/:id/:username', function(req, res){
    
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var allocateUser = req.params.allocateUser;
    var session = req.params.username;
    var id = req.params.id;

    console.log(id);
    console.log(session);
    console.log(allocateUser);
          

    OngoingBanner.find({ toWhom: session}).sort({banner_date: -1, banner_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('OngoingBanner',{OngoingBanner : docs});
    });
      
    }
});


router.get('/giveMeAComment-Banner/:id/:username', function(req, res){
    
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var session = req.params.username;
    var id = req.params.id;
        var logopath = req.body.logopath;
        console.log(logopath);
    
        BannerCommentsSection.find({sub_id: req.params.id}, function(err, docs){
        if(err) throw err;
        else  res.render('OngoingGiveMeAComment-Banner',{BannerCommentsSection : docs});
    });
        
    }
    
});
   

   
router.get('/OngoingBannerLargeView/:id/:username',  function(req, res){
    
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var id = req.params.id;
                        OngoingBanner.findByIdAndUpdate({_id: req.params.id},
	                   {
				  Seen   : "Seen"
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{
                        OngoingBanner.find({ _id: req.params.id}, function(err, docs){
                            if(err) throw err;
                            else  res.render('OngoingBannerLargeView',{OngoingBanner : docs});
                        });
                }
			 });
        
    }
});
    
   //PART -1
    
    router.post('/OngoingBanner/:id/:username',  function(req, res){
        
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var userid = req.body.userid;
    var username = req.body.username;
    var message = req.body.message;
    var brand = req.body.brand;
    var logo = req.body.logo;
    var bannerid = req.body.bannerid;
//    var mobile = req.body.mobile;

            var NewBannerCommentsSection = new BannerCommentsSection({
            sub_id : userid,
            message : message,
            username : username,
            brand : brand,
            banner_id : bannerid,
            Companylogo_final_path : logo,
            commentDate: moment().format('MMMM Do YYYY'),
            commentTime: moment().format('LTS'),
            delStatus : "1"
        });
           
           
           
   
        BannerCommentsSection.createBannerCommentsSection(NewBannerCommentsSection, function(err, BannerCommentsSection){
                    if(err) throw err;
                    console.log(BannerCommentsSection);
        });
        
            
          User.findOne({},function(err, docs){
              var mobile = docs.mobile;
              console.log(mobile);
              
           if(err) throw err;
  else
            msg91.send(mobile, message, function(err, response){
            console.log(err);
            console.log(response); 
                
            });
   
                    res.redirect('back');
    	 });
        
    }
        
    	 });




    //< !---------------------------------------------------------------------------------------------------Shirt Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Shirt Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Shirt Ongoing--------------------------------------------------------------------------------------------- !>



router.get('/OngoingShirt/:id/:username', function(req, res){
    
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var allocateUser = req.params.allocateUser;
    var session = req.params.username;
    var id = req.params.id;

    console.log(id);
    console.log(session);
    console.log(allocateUser);
          

    OngoingShirt.find({ toWhom: session}).sort({shirt_date: -1, shirt_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('OngoingShirt',{OngoingShirt : docs});
    });
      
    }
});




router.get('/giveMeAComment-Shirt/:id/:username', function(req, res){
    
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var session = req.params.username;
    var id = req.params.id;
        var logopath = req.body.logopath;
        console.log(logopath);
    
        ShirtCommentsSection.find({sub_id: req.params.id}, function(err, docs){
        if(err) throw err;
        else  res.render('OngoingGiveMeAComment-Shirt',{ShirtCommentsSection : docs});
    });
        
    }
    
});
   

   
router.get('/OngoingShirtLargeView/:id/:username',  function(req, res){
    
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var id = req.params.id;
                            OngoingShirt.findByIdAndUpdate({_id: req.params.id},
	                   {
				  Seen   : "Seen"
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{
                                OngoingShirt.find({ _id: req.params.id}, function(err, docs){
                                    if(err) throw err;
                                    else  res.render('OngoingShirtLargeView',{OngoingShirt : docs});
                                });
                }
			 });

    }
});
    

   //PART -1
    
    router.post('/OngoingShirt/:id/:username',  function(req, res){
        
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var userid = req.body.userid;
    var username = req.body.username;
    var message = req.body.message;
    var brand = req.body.brand;
    var logo = req.body.logo;
    var shirtid = req.body.shirtid;
//    var mobile = req.body.mobile;

            var NewShirtCommentsSection = new ShirtCommentsSection({
            sub_id : userid,
            message : message,
            username : username,
            brand : brand,
            shirt_id : shirtid,
            Companylogo_final_path : logo,
            commentDate: moment().format('MMMM Do YYYY'),
            commentTime: moment().format('LTS'),
            delStatus : "1"
        });
           
           
           
   
        ShirtCommentsSection.createShirtCommentsSection(NewShirtCommentsSection, function(err, ShirtCommentsSection){
                    if(err) throw err;
                    console.log(ShirtCommentsSection);
        });
          User.findOne({},function(err, docs){
              var mobile = docs.mobile;
              console.log(mobile);
              
           if(err) throw err;
  else
            msg91.send(mobile, message, function(err, response){
            console.log(err);
            console.log(response); 
                
            });
   
                    res.redirect('back');
    	 });
        
    }
    	 });




    //< !---------------------------------------------------------------------------------------------------In-shop Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------In-shop Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------In-shop Ongoing--------------------------------------------------------------------------------------------- !>



router.get('/OngoingShop/:id/:username', function(req, res){
    
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var allocateUser = req.params.allocateUser;
    var session = req.params.username;
    var id = req.params.id;

    console.log(id);
    console.log(session);
    console.log(allocateUser);
          

    OngoingShop.find({ toWhom: session}).sort({shop_date: -1, shop_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('OngoingShop',{OngoingShop : docs});
    });
        
    }
});





router.get('/giveMeAComment-Shop/:id/:username', function(req, res){
    
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var session = req.params.username;
    var id = req.params.id;
        var logopath = req.body.logopath;
        console.log(logopath);
    
        ShopCommentsSection.find({sub_id: req.params.id}, function(err, docs){
        if(err) throw err;
        else  res.render('OngoingGiveMeAComment-Shop',{ShopCommentsSection : docs});
    });
        
        
    }
    
});
   

   
router.get('/OngoingShopLargeView/:id/:username',  function(req, res){
    
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var id = req.params.id;
    
                                OngoingShop.findByIdAndUpdate({_id: req.params.id},
	                   {
				  Seen   : "Seen"
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{
                        OngoingShop.find({ _id: req.params.id}, function(err, docs){
                            if(err) throw err;
                            else  res.render('OngoingShopLargeView',{OngoingShop : docs});
                        });
                }
			 });
    }
    
});

    
   //PART -1
    
    router.post('/OngoingShop/:id/:username',  function(req, res){
        
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var userid = req.body.userid;
    var username = req.body.username;
    var message = req.body.message;
    var brand = req.body.brand;
    var logo = req.body.logo;
    var shopid = req.body.shopid;
//    var mobile = req.body.mobile;

            var NewShopCommentsSection = new ShopCommentsSection({
            sub_id : userid,
            message : message,
            username : username,
            brand : brand,
            shop_id : shopid,
            Companylogo_final_path : logo,
            commentDate: moment().format('MMMM Do YYYY'),
            commentTime: moment().format('LTS'),
            delStatus : "1"
        });
           
           
           
   
        ShopCommentsSection.createShopCommentsSection(NewShopCommentsSection, function(err, ShopCommentsSection){
                    if(err) throw err;
                    console.log(ShopCommentsSection);
        });
        
          User.findOne({},function(err, docs){
              var mobile = docs.mobile;
              console.log(mobile);
              
           if(err) throw err;
  else
            msg91.send(mobile, message, function(err, response){
            console.log(err);
            console.log(response); 
                
            });
   
                    res.redirect('back');
    	 });
        
    }
    	 });





    //< !---------------------------------------------------------------------------------------------------Hoarding Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Hoarding Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Hoarding Ongoing--------------------------------------------------------------------------------------------- !>



    router.get('/OngoingHoarding/:id/:username', function(req, res){
    
        if(!req.user){
    res.redirect('/');
}
else
{


var allocateUser = req.params.allocateUser;
var session = req.params.username;
var id = req.params.id;

console.log(id);
console.log(session);
console.log(allocateUser);
  

OngoingHoarding.find({ toWhom: session}).sort({hoarding_date: -1, hoarding_time: -1}).exec(function(err, docs){
if(err) throw err;
else  res.render('OngoingHoarding',{OngoingHoarding : docs});
});

}

});





router.get('/giveMeAComment-Hoarding/:id/:username', function(req, res){


        if(!req.user){
    res.redirect('/');
}
else
{


var session = req.params.username;
var id = req.params.id;
var logopath = req.body.logopath;
console.log(logopath);

HoardingCommentsSection.find({sub_id: req.params.id}, function(err, docs){
if(err) throw err;
else  res.render('OngoingGiveMeAComment-Hoarding',{HoardingCommentsSection : docs});
});

}

});



router.get('/OngoingHoardingLargeView/:id/:username',  function(req, res){

        if(!req.user){
    res.redirect('/');
}
else
{


var id = req.params.id;
console.log(id);
        OngoingHoarding.findByIdAndUpdate({_id: req.params.id},
               {
          Seen   : "Seen"
       }, function(err, docs){
         if(err) res.json(err);
        else
        {
                    OngoingHoarding.find({ _id: req.params.id}, function(err, docs){
                        if(err) throw err;
                        else  res.render('OngoingHoardingLargeView',{OngoingHoarding : docs});
                    });
        }
     });

}
});






//PART -1

router.post('/OngoingHoarding/:id/:username',  function(req, res){

            if(!req.user){
    res.redirect('/');
}
else
{


var userid = req.body.userid;
var username = req.body.username;
var message = req.body.message;
var brand = req.body.brand;
var logo = req.body.logo;
var hoardingid = req.body.hoardingid;
//    var mobile = req.body.mobile;

    var NewHoardingCommentsSection = new HoardingCommentsSection({
    sub_id : userid,
    message : message,
    username : username,
    brand : brand,
    hoarding_id : hoardingid,
    Companylogo_final_path : logo,
    commentDate: moment().format('MMMM Do YYYY'),
    commentTime: moment().format('LTS'),
    delStatus : "1"
});
   
   
   

HoardingCommentsSection.createHoardingCommentsSection(NewHoardingCommentsSection, function(err, HoardingCommentsSection){
            if(err) throw err;
            console.log(HoardingCommentsSection);
});

    
  User.findOne({},function(err, docs){
      var mobile = docs.mobile;
      console.log(mobile);
      
   if(err) throw err;
else
    msg91.send(mobile, message, function(err, response){
    console.log(err);
    console.log(response); 
        
    });

            res.redirect('back');
 });

}
 });
 

    //< !--------------------------------------------------------------------------------------------Miscellaneous Ongoing--------------------------------------------------------------------------------------------- !>
    //< !--------------------------------------------------------------------------------------------Miscellaneous Ongoing--------------------------------------------------------------------------------------------- !>
    //< !--------------------------------------------------------------------------------------------Miscellaneous Ongoing--------------------------------------------------------------------------------------------- !>



router.get('/OngoingMiscellaneous/:id/:username', function(req, res){
    
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var session = req.params.username;
    var id = req.params.id;

    console.log(id);
    console.log(session);
          

    Miscellaneous.find({ toWhom: session}).sort({Miscellaneous_date: -1, Miscellaneous_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('OngoingMiscellaneous',{Miscellaneous : docs});
    });
        
    }
});






router.get('/giveMeAComment-Miscellaneous/:id/:username', function(req, res){
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var session = req.params.username;
    var id = req.params.id;
        var logopath = req.body.logopath;
        console.log(logopath);
    
        MiscellaneousCommentsSection.find({sub_id: req.params.id}, function(err, docs){
        if(err) throw err;
        else  res.render('OngoingGiveMeAComment-Miscellaneous',{MiscellaneousCommentsSection : docs});
    });
        
    }
    
});
   

   
router.get('/OngoingMiscellaneousLargeView/:id/:username',  function(req, res){
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var id = req.params.id;
            Miscellaneous.findByIdAndUpdate({_id: req.params.id},
	                   {
				  Seen   : "Seen"
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{
                        Miscellaneous.find({ _id: req.params.id}, function(err, docs){
                            if(err) throw err;
                            else  res.render('OngoingMiscellaneousLargeView',{Miscellaneous : docs});
                        });
                }
			 });

    }
});

   //PART -1
    
    router.post('/OngoingMiscellaneous/:id/:username',  function(req, res){
        
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var userid = req.body.userid;
    var username = req.body.username;
    var message = req.body.message;
    var brand = req.body.brand;
    var logo = req.body.logo;
    var miscellaneousid = req.body.miscellaneousid;
//    var mobile = req.body.mobile;

            var NewMiscellaneousCommentsSection = new MiscellaneousCommentsSection({
            sub_id : userid,
            message : message,
            username : username,
            brand : brand,
            miscellaneous_id : miscellaneousid,
            Companylogo_final_path : logo,
            commentDate: moment().format('MMMM Do YYYY'),
            commentTime: moment().format('LTS'),
            delStatus : "1"
        });
           
           
           
   
        MiscellaneousCommentsSection.createMiscellaneousCommentsSection(NewMiscellaneousCommentsSection, function(err, MiscellaneousCommentsSection){
                    if(err) throw err;
                    console.log(MiscellaneousCommentsSection);
        });
        
          User.findOne({},function(err, docs){
              var mobile = docs.mobile;
              console.log(mobile);
              
           if(err) throw err;
  else
            msg91.send(mobile, message, function(err, response){
            console.log(err);
            console.log(response); 
                
            });
   
                    res.redirect('back');
    	 });
        
    }
    	 });





         
    //< !--------------------------------------------------------------------------------------------Gif Ongoing--------------------------------------------------------------------------------------------- !>
    //< !--------------------------------------------------------------------------------------------Gif Ongoing--------------------------------------------------------------------------------------------- !>
    //< !--------------------------------------------------------------------------------------------Gif Ongoing--------------------------------------------------------------------------------------------- !>



router.get('/OngoingGif/:id/:username', function(req, res){
    
    if(!req.user){
res.redirect('/');
}
else
{


var session = req.params.username;
var id = req.params.id;

console.log(id);
console.log(session);


Gif.find({ toWhom: session}).sort({gif_date: -1, gif_time: -1}).exec(function(err, docs){
if(err) throw err;
else  res.render('OngoingGif',{Gif : docs});
});

}
});






router.get('/giveMeAComment-Gif/:id/:username', function(req, res){
    if(!req.user){
res.redirect('/');
}
else
{

var session = req.params.username;
var id = req.params.id;
var logopath = req.body.logopath;
console.log(logopath);

GifCommentsSection.find({sub_id: req.params.id}, function(err, docs){
if(err) throw err;
else  res.render('OngoingGiveMeAComment-Gif',{GifCommentsSection : docs});
});

}

});



router.get('/OngoingGifLargeView/:id/:username',  function(req, res){
    if(!req.user){
res.redirect('/');
}
else
{


var id = req.params.id;
Gif.findByIdAndUpdate({_id: req.params.id},
           {
      Seen   : "Seen"
   }, function(err, docs){
     if(err) res.json(err);
    else
    {
            Gif.find({ _id: req.params.id}, function(err, docs){
                if(err) throw err;
                else  res.render('OngoingGifLargeView',{Gif : docs});
            });
    }
 });

}
});

//PART -1

router.post('/OngoingGif/:id/:username',  function(req, res){

        if(!req.user){
res.redirect('/');
}
else
{

var userid = req.body.userid;
var username = req.body.username;
var message = req.body.message;
var brand = req.body.brand;
var logo = req.body.logo;
var gifid = req.body.gifid;
//    var mobile = req.body.mobile;

var NewGifCommentsSection = new GifCommentsSection({
sub_id : userid,
message : message,
username : username,
brand : brand,
gif_id : gifid,
Companylogo_final_path : logo,
commentDate: moment().format('MMMM Do YYYY'),
commentTime: moment().format('LTS'),
delStatus : "1"
});




GifCommentsSection.createGifCommentsSection(NewGifCommentsSection, function(err, GifCommentsSection){
        if(err) throw err;
        console.log(GifCommentsSection);
});

User.findOne({},function(err, docs){
  var mobile = docs.mobile;
  console.log(mobile);
  
if(err) throw err;
else
msg91.send(mobile, message, function(err, response){
console.log(err);
console.log(response); 
    
});

        res.redirect('back');
});

}
});





    //< !---------------------------------------------------------------------------------------Scripts Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------Scripts Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------Scripts Ongoing--------------------------------------------------------------------------------------------- !>



router.get('/OngoingScripts/:id/:username', function(req, res){
    
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var allocateUser = req.params.allocateUser;
    var session = req.params.username;
    var id = req.params.id;

    console.log(id);
    console.log(session);
    console.log(allocateUser);
          

    Scripts.find({ toWhom: session}).sort({scripts_date: -1, scripts_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('OngoingScripts',{Scripts : docs});
    });
        
    }
});






router.get('/giveMeAComment-Scripts/:id/:username', function(req, res){
    
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var session = req.params.username;
    var id = req.params.id;
        var logopath = req.body.logopath;
        console.log(logopath);
    
        ScriptsCommentsSection.find({sub_id: req.params.id}, function(err, docs){
        if(err) throw err;
        else  res.render('OngoingGiveMeAComment-Scripts',{ScriptsCommentsSection : docs});
    });
        
    }
    
});
   

   
router.get('/OngoingScriptsLargeView/:id/:username',  function(req, res){
    
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var id = req.params.id;
    
                Scripts.findByIdAndUpdate({_id: req.params.id},
	                   {
				  Seen   : "Seen"
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{
                            Scripts.find({ _id: req.params.id}, function(err, docs){
                                if(err) throw err;
                                else  res.render('OngoingScriptsLargeView',{Scripts : docs});
                            });
                }
			 });
    
    
    }
    
});

   //PART -1
    
    router.post('/OngoingScripts/:id/:username',  function(req, res){
        
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var userid = req.body.userid;
    var username = req.body.username;
    var message = req.body.message;
    var brand = req.body.brand;
    var logo = req.body.logo;
    var scriptsid = req.body.scriptsid;
//    var mobile = req.body.mobile;

            var NewScriptsCommentsSection = new ScriptsCommentsSection({
            sub_id : userid,
            message : message,
            username : username,
            brand : brand,
            scripts_id : scriptsid,
            Companylogo_final_path : logo,
            commentDate: moment().format('MMMM Do YYYY'),
            commentTime: moment().format('LTS'),
            delStatus : "1"
        });
           
           
           
   
        ScriptsCommentsSection.createScriptsCommentsSection(NewScriptsCommentsSection, function(err, ScriptsCommentsSection){
                    if(err) throw err;
                    console.log(ScriptsCommentsSection);
        });
        
          User.findOne({},function(err, docs){
              var mobile = docs.mobile;
              console.log(mobile);
              
           if(err) throw err;
  else
            msg91.send(mobile, message, function(err, response){
            console.log(err);
            console.log(response); 
                
            });
   
                    res.redirect('back');
    	 });
        
    }
    	 });







module.exports =router;