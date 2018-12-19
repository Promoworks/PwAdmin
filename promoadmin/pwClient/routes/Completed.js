const express = require("express");
const router = express.Router();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const moment = require('moment');
var download = require('download-file');


var Clientuser = require('../models/clientuser');
var User = require('../models/user');



    //< !---------------------------------------------------------------------------------------------------Ads Model--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Ads Model--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Ads Model--------------------------------------------------------------------------------------------- !>



var Newspaper = require('../models/newspaper');
var OngoingMagazine = require('../models/ongoingMagazine');
var OngoingTheatre = require('../models/OngoingTheatre');
var OngoingTv = require('../models/OngoingTv');
var OngoingDigital = require('../models/OngoingDigital');


//var CompletedNewspaper = require('../models/CompletedNewspaper');
//var CompletedMagazine = require('../models/CompletedMagazine');
//var CompletedTheatre = require('../models/CompletedTheatre');
//var CompletedTv = require('../models/CompletedTv');
//var CompletedDigital = require('../models/CompletedDigital');



    //< !---------------------------------------------------------------------------------------------------Videos Model--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Videos Model--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Videos Model--------------------------------------------------------------------------------------------- !>


var Twod = require('../models/twod');
var OngoingVoiceOver = require('../models/OngoingVoiceOver');
var OngoingThreeD = require('../models/OngoingThreeD');
var OngoingExplainer = require('../models/OngoingExplainer');
var OngoingPromotional = require('../models/OngoingPromotional');
var OngoingScribe = require('../models/OngoingScribe');
var OngoingGreeting = require('../models/OngoingGreeting');


//var CompletedTwod = require('../models/CompletedTwod');
//var CompletedThreeD = require('../models/CompletedThreeD');
//var CompletedExplainer = require('../models/CompletedExplainer');
//var CompletedGreeting = require('../models/CompletedGreeting');
//var CompletedVoiceOver = require('../models/CompletedVoiceOver');
//var CompletedPromotional = require('../models/CompletedPromotional');
//var CompletedScribe = require('../models/CompletedScribe');






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



//var CompletedLogo = require('../models/CompletedLogo');
//var CompletedStationery = require('../models/CompletedStationery');
//var CompletedBrochure = require('../models/CompletedBrochure');
//var CompletedMenu = require('../models/CompletedMenu');
//var CompletedLanding = require('../models/CompletedLanding');
//var CompletedPackage = require('../models/CompletedPackage');
//var CompletedBanner = require('../models/CompletedBanner');
//var CompletedShirt = require('../models/CompletedShirt');
//var CompletedShop = require('../models/CompletedShop');





    //< !-------------------------------------------------------------------------------------------Gif--------------------------------------------------------------------------------------------- !>
    //< !-------------------------------------------------------------------------------------------Gif--------------------------------------------------------------------------------------------- !>
    //< !-------------------------------------------------------------------------------------------Gif--------------------------------------------------------------------------------------------- !>


    var Gif = require('../models/Gif');



    //< !-------------------------------------------------------------------------------------------Miscellaneous--------------------------------------------------------------------------------------------- !>
    //< !-------------------------------------------------------------------------------------------Miscellaneous--------------------------------------------------------------------------------------------- !>
    //< !-------------------------------------------------------------------------------------------Miscellaneous--------------------------------------------------------------------------------------------- !>


var Miscellaneous = require('../models/Miscellaneous');
//var CompletedMiscellaneous = require('../models/CompletedMiscellaneous');








    //< !---------------------------------------------------------------------------------------------------Scripts--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Scripts--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Scripts--------------------------------------------------------------------------------------------- !>



var Scripts = require('../models/Scripts');
//var CompletedScripts = require('../models/CompletedScripts');




    //< !----------------------------------------------------------------------------------------------Completed Logo--------------------------------------------------------------------------------------------- !>
    //< !----------------------------------------------------------------------------------------------Completed Logo--------------------------------------------------------------------------------------------- !>
    //< !----------------------------------------------------------------------------------------------Completed Logo--------------------------------------------------------------------------------------------- !>




router.get('/finished/', function(req, res){
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
     res.render('finished');
        
    }
});

router.get('/CompletedLogo/:id/:username', function(req, res){
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var session = req.params.username;
    var id = req.params.id;

    console.log(id);
    console.log(session);
          

    Logo.find({ toWhom: session}).sort({logo_date: -1, logo_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('CompletedLogo',{CompletedLogo : docs});
    });
      
    }
});




    
//Once submit has been hit
router.post('/CompletedLogo/:id', function(req, res){
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
                        toWhom : req.body.username,
                        basedonIdComments : req.body.message
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
                    

                    
                    
				   res.redirect('/Completed/finished/');
				}
		 });
    }
    	 });





router.get('/CompletedLogoLargeView/:id/:username',  function(req, res){
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var id = req.params.id;
    console.log(id);
    
    Logo.findByIdAndUpdate({_id: req.params.id},
	                   {
				  Downloaded   : "Downloaded"
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{ 
                        Logo.find({ _id: req.params.id}, function(err, docs){
                         if(err) throw err;
                         else  res.render('CompletedLogoLargeView',{CompletedLogo : docs});
                            });
				 }
			 });
    
    
    }
    
});


router.get('/CompletedDown', function(req, res){
    res.redirect('back');
});


router.post('/CompletedDown', function(req, res){
    var file = req.body.down;
    console.log(file);
    var url = file;
    
download("url", "url");
//    var options = {
//    directory: "Downloads"
//}
//    
//    download(url, options, function(err){
//    if (err) throw err
//    console.log("meow");
//}) 
    
    res.redirect('back');
});

    //< !----------------------------------------------------------------------------------------Completed Stationery--------------------------------------------------------------------------------------------- !>
    //< !----------------------------------------------------------------------------------------Completed Stationery--------------------------------------------------------------------------------------------- !>
    //< !----------------------------------------------------------------------------------------Completed Stationery--------------------------------------------------------------------------------------------- !>





router.get('/CompletedStationery/:id/:username', function(req, res){
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var session = req.params.username;
    var id = req.params.id;

    console.log(id);
    console.log(session);
          

    OngoingStationery.find({ toWhom: session}).sort({stationery_date: -1, stationery_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('CompletedStationery',{CompletedStationery : docs});
    });
      
    }
});




    
//Once submit has been hit
router.post('/CompletedStationery/:id', function(req, res){
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
                        toWhom : req.body.username,
                        basedonIdComments : req.body.message
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
                    

                    
                    
				   res.redirect('/Completed/finished/');
				}
		 });
    }
    	 });




router.get('/CompletedStationeryLargeView/:id/:username',  function(req, res){
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var id = req.params.id;
    console.log(id);
    
    OngoingStationery.findByIdAndUpdate({_id: req.params.id},
	                   {
				  Downloaded   : "Downloaded"
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{ 
                        OngoingStationery.find({ _id: req.params.id}, function(err, docs){
                         if(err) throw err;
                         else  res.render('CompletedStationeryLargeView',{CompletedStationery : docs});
                            });
				 }
			 });
    
    
    }
    
});



    //< !---------------------------------------------------------------------------------------------Completed Brochure--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------Completed Brochure--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------Completed Brochure--------------------------------------------------------------------------------------------- !>





router.get('/CompletedBrochure/:id/:username', function(req, res){
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var session = req.params.username;
    var id = req.params.id;

    console.log(id);
    console.log(session);
          

    OngoingBrochure.find({ toWhom: session}).sort({brochure_date: -1, brochure_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('CompletedBrochure',{CompletedBrochure : docs});
    });
        
    }

});




    
//Once submit has been hit
router.post('/CompletedBrochure/:id', function(req, res){
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
                        toWhom : req.body.username,
                        basedonIdComments : req.body.message
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
                    

                    
                    
				   res.redirect('/Completed/finished/');
				}
		 });
        
    }

    	 });




router.get('/CompletedBrochureLargeView/:id/:username',  function(req, res){
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var id = req.params.id;
    console.log(id);
    
    OngoingBrochure.findByIdAndUpdate({_id: req.params.id},
	                   {
				  Downloaded   : "Downloaded"
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{ 
                        OngoingBrochure.find({ _id: req.params.id}, function(err, docs){
                         if(err) throw err;
                         else  res.render('CompletedBrochureLargeView',{CompletedBrochure : docs});
                            });
				 }
			 });
    
    
    }
    
});



    //< !---------------------------------------------------------------------------------------------Completed Menu--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------Completed Menu--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------Completed Menu--------------------------------------------------------------------------------------------- !>





router.get('/CompletedMenu/:id/:username', function(req, res){
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var session = req.params.username;
    var id = req.params.id;

    console.log(id);
    console.log(session);
          

    OngoingMenu.find({ toWhom: session}).sort({menu_date: -1, menu_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('CompletedMenu',{CompletedMenu : docs});
    });
        
        }

});




    
//Once submit has been hit
router.post('/CompletedMenu/:id', function(req, res){
    
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
                        toWhom : req.body.username,
                        basedonIdComments : req.body.message
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
                    

                    
                    
				   res.redirect('/Completed/finished/');
				}
		 });

    }
    
    	 });






router.get('/CompletedMenuLargeView/:id/:username',  function(req, res){
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var id = req.params.id;
    console.log(id);
    
    OngoingMenu.findByIdAndUpdate({_id: req.params.id},
	                   {
				  Downloaded   : "Downloaded"
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{ 
                        OngoingMenu.find({ _id: req.params.id}, function(err, docs){
                         if(err) throw err;
                         else  res.render('CompletedMenuLargeView',{CompletedMenu : docs});
                            });
				 }
			 });
    
    
    }
    
});



    //< !---------------------------------------------------------------------------------------------Completed Landing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------Completed Landing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------Completed Landing--------------------------------------------------------------------------------------------- !>





router.get('/CompletedLanding/:id/:username', function(req, res){
    
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var session = req.params.username;
    var id = req.params.id;

    console.log(id);
    console.log(session);
          

    OngoingLanding.find({ toWhom: session}).sort({landing_date: -1, landing_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('CompletedLanding',{CompletedLanding : docs});
    })
      
    }
});




    
//Once submit has been hit
router.post('/CompletedLanding/:id', function(req, res){
    
        
        
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
                        toWhom : req.body.username,
                        basedonIdComments : req.body.message
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
                    

                    
                    
				   res.redirect('/Completed/finished/');
				}
		 });
    }
    	 });









router.get('/CompletedLandingLargeView/:id/:username',  function(req, res){
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var id = req.params.id;
    console.log(id);
    
    OngoingLanding.findByIdAndUpdate({_id: req.params.id},
	                   {
				  Downloaded   : "Downloaded"
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{ 
                        OngoingLanding.find({ _id: req.params.id}, function(err, docs){
                         if(err) throw err;
                         else  res.render('CompletedLandingLargeView',{CompletedLanding : docs});
                            });
				 }
			 });
    
    
    }
    
});




    //< !---------------------------------------------------------------------------------------------Completed Package--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------Completed Package--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------Completed Package--------------------------------------------------------------------------------------------- !>





router.get('/CompletedPackage/:id/:username', function(req, res){
    
        
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
        else  res.render('CompletedPackage',{CompletedPackage : docs});
    });
      
    }

});




    
//Once submit has been hit
router.post('/CompletedPackage/:id', function(req, res){
    
        
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
                        toWhom : req.body.username,
                        basedonIdComments : req.body.message
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
                    

                    
                    
				   res.redirect('/Completed/finished/');
				}
		 });
    }
    	 });







router.get('/CompletedPackageLargeView/:id/:username',  function(req, res){
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var id = req.params.id;
    console.log(id);
    
    OngoingPackage.findByIdAndUpdate({_id: req.params.id},
	                   {
				  Downloaded   : "Downloaded"
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{ 
                        OngoingPackage.find({ _id: req.params.id}, function(err, docs){
                         if(err) throw err;
                         else  res.render('CompletedPackageLargeView',{CompletedPackage : docs});
                            });
				 }
			 });
    
    
    }
    
});







    //< !---------------------------------------------------------------------------------------------Completed Menu--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------Completed Menu--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------Completed Menu--------------------------------------------------------------------------------------------- !>





    router.get('/CompletedMenu/:id/:username', function(req, res){
        if(!req.user){
    res.redirect('/');
}
else
{

var session = req.params.username;
var id = req.params.id;

console.log(id);
console.log(session);
  

OngoingMenu.find({ toWhom: session}).sort({menu_date: -1, menu_time: -1}).exec(function(err, docs){
if(err) throw err;
else  res.render('CompletedMenu',{CompletedMenu : docs});
});

}

});





//Once submit has been hit
router.post('/CompletedMenu/:id', function(req, res){

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
                toWhom : req.body.username,
                basedonIdComments : req.body.message
       }, function(err){
         if(err) res.json(err);
        else
        {
            

            
            
           res.redirect('/Completed/finished/');
        }
 });

}

 });






router.get('/CompletedMenuLargeView/:id/:username',  function(req, res){
        if(!req.user){
    res.redirect('/');
}
else
{

var id = req.params.id;
console.log(id);

OngoingMenu.findByIdAndUpdate({_id: req.params.id},
               {
          Downloaded   : "Downloaded"
       }, function(err, docs){
         if(err) res.json(err);
        else
        { 
                OngoingMenu.find({ _id: req.params.id}, function(err, docs){
                 if(err) throw err;
                 else  res.render('CompletedMenuLargeView',{CompletedMenu : docs});
                    });
         }
     });


}

});



    //< !---------------------------------------------------------------------------------------------Completed Banner--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------Completed Banner--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------Completed Banner--------------------------------------------------------------------------------------------- !>





router.get('/CompletedBanner/:id/:username', function(req, res){
    
    
        
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var session = req.params.username;
    var id = req.params.id;

    console.log(id);
    console.log(session);
          

    OngoingBanner.find({ toWhom: session}).sort({banner_date: -1, banner_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('CompletedBanner',{CompletedBanner : docs});
    });
      
    }
});




    
//Once submit has been hit
router.post('/CompletedBanner/:id', function(req, res){
    
    
        
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
                        toWhom : req.body.username,
                        basedonIdComments : req.body.message
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
                    

                    
                    
				   res.redirect('/Completed/finished/');
				}
		 });
        
    }

    	 });




router.get('/CompletedBannerLargeView/:id/:username',  function(req, res){
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var id = req.params.id;
    console.log(id);
    
    OngoingBanner.findByIdAndUpdate({_id: req.params.id},
	                   {
				  Downloaded   : "Downloaded"
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{ 
                        OngoingBanner.find({ _id: req.params.id}, function(err, docs){
                         if(err) throw err;
                         else  res.render('CompletedBannerLargeView',{CompletedBanner : docs});
                            });
				 }
			 });
    
    
    }
    
});



    //< !---------------------------------------------------------------------------------------------Completed Shirt--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------Completed Shirt--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------Completed Shirt--------------------------------------------------------------------------------------------- !>





router.get('/CompletedShirt/:id/:username', function(req, res){
    
        
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
        
    var session = req.params.username;
    var id = req.params.id;

    console.log(id);
    console.log(session);
          

    OngoingShirt.find({ toWhom: session}).sort({shirt_date: -1, shirt_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('CompletedShirt',{CompletedShirt : docs});
    });
      
        
    }

});




    
//Once submit has been hit
router.post('/CompletedShirt/:id', function(req, res){
    
        
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
                        toWhom : req.body.username,
                        basedonIdComments : req.body.message
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
                    

                    
                    
				   res.redirect('/Completed/finished/');
				}
		 });
        
    }

    	 });




router.get('/CompletedShirtLargeView/:id/:username',  function(req, res){
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var id = req.params.id;
    console.log(id);
    
    OngoingShirt.findByIdAndUpdate({_id: req.params.id},
	                   {
				  Downloaded   : "Downloaded"
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{ 
                        OngoingShirt.find({ _id: req.params.id}, function(err, docs){
                         if(err) throw err;
                         else  res.render('CompletedShirtLargeView',{CompletedShirt : docs});
                            });
				 }
			 });
    
    
    }
    
});



    //< !---------------------------------------------------------------------------------------------Completed Shop--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------Completed Shop--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------Completed Shop--------------------------------------------------------------------------------------------- !>





router.get('/CompletedShop/:id/:username', function(req, res){
    
        
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
        
    var session = req.params.username;
    var id = req.params.id;

    console.log(id);
    console.log(session);
          

    OngoingShop.find({ toWhom: session}).sort({shop_date: -1, shop_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('CompletedShop',{CompletedShop : docs});
    });
        
    }
      

});




    
//Once submit has been hit
router.post('/CompletedShop/:id', function(req, res){
    
    
        
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
                        toWhom : req.body.username,
                        basedonIdComments : req.body.message
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
                    

                    
                    
				   res.redirect('/Completed/finished/');
				}
		 });
        
    }

    	 });




router.get('/CompletedShopLargeView/:id/:username',  function(req, res){
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var id = req.params.id;
    console.log(id);
    
    OngoingShop.findByIdAndUpdate({_id: req.params.id},
	                   {
				  Downloaded   : "Downloaded"
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{ 
                        OngoingShop.find({ _id: req.params.id}, function(err, docs){
                         if(err) throw err;
                         else  res.render('CompletedShopLargeView',{CompletedShop : docs});
                            });
				 }
			 });
    
    
    }
    
});






    //< !---------------------------------------------------------------------------------------------Completed Hoarding--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------Completed Hoarding--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------Completed Hoarding--------------------------------------------------------------------------------------------- !>





    router.get('/CompletedHoarding/:id/:username', function(req, res){
    
        
        if(!req.user){
    res.redirect('/');
}
else
{



var session = req.params.username;
var id = req.params.id;

console.log(id);
console.log(session);
  

OngoingHoarding.find({ toWhom: session}).sort({hoarding_date: -1, hoarding_time: -1}).exec(function(err, docs){
if(err) throw err;
else  res.render('CompletedHoarding',{CompletedHoarding : docs});
});

}


});





//Once submit has been hit
router.post('/CompletedHoarding/:id', function(req, res){



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
                toWhom : req.body.username,
                basedonIdComments : req.body.message
       }, function(err){
         if(err) res.json(err);
        else
        {
            

            
            
           res.redirect('/Completed/finished/');
        }
 });

}

 });




router.get('/CompletedHoardingLargeView/:id/:username',  function(req, res){
        if(!req.user){
    res.redirect('/');
}
else
{

var id = req.params.id;
console.log(id);

OngoingHoarding.findByIdAndUpdate({_id: req.params.id},
               {
          Downloaded   : "Downloaded"
       }, function(err, docs){
         if(err) res.json(err);
        else
        { 
                OngoingHoarding.find({ _id: req.params.id}, function(err, docs){
                 if(err) throw err;
                 else  res.render('CompletedHoardingLargeView',{CompletedHoarding : docs});
                    });
         }
     });


}

});




    //< !---------------------------------------------------------------------------------------------Completed Newspaper--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------Completed Newspaper--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------Completed Newspaper--------------------------------------------------------------------------------------------- !>





router.get('/CompletedNewspaper/:id/:username', function(req, res){
    
        
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
        else  res.render('CompletedNewspaper',{CompletedNewspaper : docs});
    });
      
    }
});




    
//Once submit has been hit
router.post('/CompletedNewspaper/:id', function(req, res){
    
    
        
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
                        toWhom : req.body.username,
                        basedonIdComments : req.body.message
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
                    

                    
                    
				   res.redirect('/Completed/finished/');
				}
		 });
        
    }

    	 });




router.get('/CompletedNewspaperLargeView/:id/:username',  function(req, res){
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var id = req.params.id;
    console.log(id);
    
    Newspaper.findByIdAndUpdate({_id: req.params.id},
	                   {
				  Downloaded   : "Downloaded"
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{ 
                        Newspaper.find({ _id: req.params.id}, function(err, docs){
                         if(err) throw err;
                         else  res.render('CompletedNewspaperLargeView',{CompletedNewspaper : docs});
                            });
				 }
			 });
    
    
    }
    
});




    //< !---------------------------------------------------------------------------------------------Completed Magazine--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------Completed Magazine--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------Completed Magazine--------------------------------------------------------------------------------------------- !>





router.get('/CompletedMagazine/:id/:username', function(req, res){
    
        
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
        
    var session = req.params.username;
    var id = req.params.id;

    console.log(id);
    console.log(session);
          

    OngoingMagazine.find({ toWhom: session}).sort({magazine_date: -1, magazine_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('CompletedMagazine',{CompletedMagazine : docs});
    });
      
    }
});




    
//Once submit has been hit
router.post('/CompletedMagazine/:id', function(req, res){
    
        
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
                        toWhom : req.body.username,
                        basedonIdComments : req.body.message
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
                    

                    
                    
				   res.redirect('/Completed/finished/');
				}
		 });
        
        
    }

    	 });






router.get('/CompletedMagazineLargeView/:id/:username',  function(req, res){
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var id = req.params.id;
    console.log(id);
    
    OngoingMagazine.findByIdAndUpdate({_id: req.params.id},
	                   {
				  Downloaded   : "Downloaded"
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{ 
                        OngoingMagazine.find({ _id: req.params.id}, function(err, docs){
                         if(err) throw err;
                         else  res.render('CompletedMagazineLargeView',{CompletedMagazine : docs});
                            });
				 }
			 });
    
    
    }
    
});


    //< !---------------------------------------------------------------------------------------------Completed Theatre--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------Completed Theatre--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------Completed Theatre--------------------------------------------------------------------------------------------- !>





router.get('/CompletedTheatre/:id/:username', function(req, res){
    
    
        
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
        
    var session = req.params.username;
    var id = req.params.id;

    console.log(id);
    console.log(session);
          

    OngoingTheatre.find({ toWhom: session}).sort({theatre_date: -1, theatre_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('CompletedTheatre',{CompletedTheatre : docs});
    });
        
    }

});




    
//Once submit has been hit
router.post('/CompletedTheatre/:id', function(req, res){
    
    
        
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
                        toWhom : req.body.username,
                        basedonIdComments : req.body.message
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
                    

                    
                    
				   res.redirect('/Completed/finished/');
				}
		 });
        
        
    }

    	 });




router.get('/CompletedTheatreLargeView/:id/:username',  function(req, res){
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var id = req.params.id;
    console.log(id);
    
    OngoingTheatre.findByIdAndUpdate({_id: req.params.id},
	                   {
				  Downloaded   : "Downloaded"
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{ 
                        OngoingTheatre.find({ _id: req.params.id}, function(err, docs){
                         if(err) throw err;
                         else  res.render('CompletedTheatreLargeView',{CompletedTheatre : docs});
                            });
				 }
			 });
    
    
    }
    
});



    //< !---------------------------------------------------------------------------------------------Completed Tv--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------Completed Tv--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------Completed Tv--------------------------------------------------------------------------------------------- !>





router.get('/CompletedTv/:id/:username', function(req, res){
    
        
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
        
    var session = req.params.username;
    var id = req.params.id;

    console.log(id);
    console.log(session);
          

    OngoingTv.find({ toWhom: session}).sort({tv_date: -1, tv_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('CompletedTv',{CompletedTv : docs});
    });
        
    }
      

});




    
//Once submit has been hit
router.post('/CompletedTv/:id', function(req, res){
    
    
        
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
                        toWhom : req.body.username,
                        basedonIdComments : req.body.message
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
                    

                    
                    
				   res.redirect('/Completed/finished/');
				}
		 });
        
    }

    	 });





router.get('/CompletedTvLargeView/:id/:username',  function(req, res){
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var id = req.params.id;
    console.log(id);
    
    OngoingTv.findByIdAndUpdate({_id: req.params.id},
	                   {
				  Downloaded   : "Downloaded"
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{ 
                        OngoingTv.find({ _id: req.params.id}, function(err, docs){
                         if(err) throw err;
                         else  res.render('CompletedTvLargeView',{CompletedTv : docs});
                            });
				 }
			 });
    
    
    }
    
});



    //< !---------------------------------------------------------------------------------------------Completed Digital--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------Completed Digital--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------Completed Digital--------------------------------------------------------------------------------------------- !>





router.get('/CompletedDigital/:id/:username', function(req, res){
    
    
        
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
        
    var session = req.params.username;
    var id = req.params.id;

    console.log(id);
    console.log(session);
          

    OngoingDigital.find({ toWhom: session}).sort({digital_date: -1, digital_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('CompletedDigital',{CompletedDigital : docs});
    });
        
    }
      

});




    
//Once submit has been hit
router.post('/CompletedTheatre/:id', function(req, res){
    
    
        
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
                        toWhom : req.body.username,
                        basedonIdComments : req.body.message
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
                    

                    
                    
				   res.redirect('/Completed/finished/');
				}
		 });
        
    }

    	 });





router.get('/CompletedDigitalLargeView/:id/:username',  function(req, res){
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var id = req.params.id;
    console.log(id);
    
    OngoingDigital.findByIdAndUpdate({_id: req.params.id},
	                   {
				  Downloaded   : "Downloaded"
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{ 
                        OngoingDigital.find({ _id: req.params.id}, function(err, docs){
                         if(err) throw err;
                         else  res.render('CompletedDigitalLargeView',{CompletedDigital : docs});
                            });
				 }
			 });
    
    
    }
    
});



    //< !---------------------------------------------------------------------------------------------Completed Twod--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------Completed Twod--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------Completed Twod--------------------------------------------------------------------------------------------- !>





router.get('/CompletedTwod/:id/:username', function(req, res){
    
        
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
        
    var session = req.params.username;
    var id = req.params.id;

    console.log(id);
    console.log(session);
          

    Twod.find({ toWhom: session}).sort({twod_date: -1, twod_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('CompletedTwod',{CompletedTwod : docs});
    });
        
    }

});
    
//Once submit has been hit
router.post('/CompletedTwod/:id', function(req, res){
        
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
	Twod.update({_id: req.params.id},
	                   {
                       twod_final_path : req.body.image,
                        toWhom : req.body.username,
                        basedonIdComments : req.body.message
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
                    

                    
                    
				   res.redirect('/Completed/finished/');
				}
		 });
    }
    	 });




router.get('/CompletedTwoDLargeView/:id/:username',  function(req, res){
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var id = req.params.id;
    console.log(id);
    
    Twod.findByIdAndUpdate({_id: req.params.id},
	                   {
				  Downloaded   : "Downloaded"
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{ 
                        Twod.find({ _id: req.params.id}, function(err, docs){
                         if(err) throw err;
                         else  
                             
                             res.header("Access-Control-Allow-Origin", "*");
                             res.render('CompletedTwoDLargeView',{CompletedTwod : docs});
                            });
				 }
			 });
    
    
    }
    
});




    //< !---------------------------------------------------------------------------------------------Completed ThreeD--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------Completed ThreeD--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------Completed ThreeD--------------------------------------------------------------------------------------------- !>





router.get('/CompletedThreeD/:id/:username', function(req, res){
    
        
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
        
    var session = req.params.username;
    var id = req.params.id;

    console.log(id);
    console.log(session);
          

    OngoingThreeD.find({ toWhom: session}).sort({threed_date: -1, threed_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('CompletedThreeD',{CompletedThreeD : docs});
    });
     
    }

});




    
//Once submit has been hit
router.post('/CompletedThreeD/:id', function(req, res){
    
        
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
                       threed_final_path : req.body.image,
                        toWhom : req.body.username,
                        basedonIdComments : req.body.message
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
                    

                    
                    
				   res.redirect('/Completed/finished/');
				}
		 });
    }
    	 });






router.get('/CompletedThreeDLargeView/:id/:username',  function(req, res){
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var id = req.params.id;
    console.log(id);
    
    OngoingThreeD.findByIdAndUpdate({_id: req.params.id},
	                   {
				  Downloaded   : "Downloaded"
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{ 
                        OngoingThreeD.find({ _id: req.params.id}, function(err, docs){
                         if(err) throw err;
                         else  res.render('CompletedThreeDLargeView',{CompletedThreeD : docs});
                            });
				 }
			 });
    
    
    }
    
});


    //< !---------------------------------------------------------------------------------------------Completed Explainer--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------Completed Explainer--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------Completed Explainer--------------------------------------------------------------------------------------------- !>





router.get('/CompletedExplainer/:id/:username', function(req, res){
    
        
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var session = req.params.username;
    var id = req.params.id;

    console.log(id);
    console.log(session);
          

    OngoingExplainer.find({ toWhom: session}).sort({explainer_date: -1, explainer_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('CompletedExplainer',{CompletedExplainer : docs});
    });
      
    }
});




    
//Once submit has been hit
router.post('/CompletedExplainer/:id', function(req, res){
    
        
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
                        toWhom : req.body.username,
                        basedonIdComments : req.body.message
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
                    

                    
                    
				   res.redirect('/Completed/finished/');
				}
		 });
        
    }

    	 });







router.get('/CompletedExplainerLargeView/:id/:username',  function(req, res){
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var id = req.params.id;
    console.log(id);
    
    OngoingExplainer.findByIdAndUpdate({_id: req.params.id},
	                   {
				  Downloaded   : "Downloaded"
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{ 
                        OngoingExplainer.find({ _id: req.params.id}, function(err, docs){
                         if(err) throw err;
                         else  res.render('CompletedExplainerLargeView',{CompletedExplainer : docs});
                            });
				 }
			 });
    
    
    }
    
});
    //< !---------------------------------------------------------------------------------------------Completed Greeting--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------Completed Greeting--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------Completed Greeting--------------------------------------------------------------------------------------------- !>





router.get('/CompletedGreeting/:id/:username', function(req, res){
    
        
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
        
    var session = req.params.username;
    var id = req.params.id;

    console.log(id);
    console.log(session);
          

    OngoingGreeting.find({ toWhom: session}).sort({greeting_date: -1, greeting_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('CompletedGreeting',{CompletedGreeting : docs});
    });
      

    }
});




    
//Once submit has been hit
router.post('/CompletedGreeting/:id', function(req, res){
    
        
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
                        toWhom : req.body.username,
                        basedonIdComments : req.body.message
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
                    

                    
                    
				   res.redirect('/Completed/finished/');
				}
		 });
        
    }

    	 });





router.get('/CompletedGreetingLargeView/:id/:username',  function(req, res){
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var id = req.params.id;
    console.log(id);
    
    OngoingGreeting.findByIdAndUpdate({_id: req.params.id},
	                   {
				  Downloaded   : "Downloaded"
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{ 
                        OngoingGreeting.find({ _id: req.params.id}, function(err, docs){
                         if(err) throw err;
                         else  res.render('CompletedGreetingLargeView',{CompletedGreeting : docs});
                            });
				 }
			 });
    
    
    }
    
});

    //< !--------------------------------------------------------------------------------------Completed Promotional--------------------------------------------------------------------------------------------- !>
    //< !--------------------------------------------------------------------------------------Completed Promotional--------------------------------------------------------------------------------------------- !>
    //< !--------------------------------------------------------------------------------------Completed Promotional--------------------------------------------------------------------------------------------- !>





router.get('/CompletedPromotional/:id/:username', function(req, res){
    
        
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
        
    var session = req.params.username;
    var id = req.params.id;

    console.log(id);
    console.log(session);
          

    OngoingPromotional.find({ toWhom: session}).sort({promotional_date: -1, promotional_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('CompletedPromotional',{CompletedPromotional : docs});
    });
      

    }
});




    
//Once submit has been hit
router.post('/CompletedPromotional/:id', function(req, res){
    
        
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
                        toWhom : req.body.username,
                        basedonIdComments : req.body.message
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
                    

                    
                    
				   res.redirect('/Completed/finished/');
				}
		 });
        
    }

    	 });





router.get('/CompletedPromotionalLargeView/:id/:username',  function(req, res){
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var id = req.params.id;
    console.log(id);
    
    OngoingPromotional.findByIdAndUpdate({_id: req.params.id},
	                   {
				  Downloaded   : "Downloaded"
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{ 
                        OngoingPromotional.find({ _id: req.params.id}, function(err, docs){
                         if(err) throw err;
                         else  res.render('CompletedPromotionalLargeView',{CompletedPromotional : docs});
                            });
				 }
			 });
    
    
    }
    
});

    //< !--------------------------------------------------------------------------------------Completed Scribe--------------------------------------------------------------------------------------------- !>
    //< !--------------------------------------------------------------------------------------Completed Scribe--------------------------------------------------------------------------------------------- !>
    //< !--------------------------------------------------------------------------------------Completed Scribe--------------------------------------------------------------------------------------------- !>





router.get('/CompletedScribe/:id/:username', function(req, res){
    
        
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
        
    var session = req.params.username;
    var id = req.params.id;

    console.log(id);
    console.log(session);
          

    OngoingScribe.find({ toWhom: session}).sort({scribe_date: -1, scribe_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('CompletedScribe',{CompletedScribe : docs});
    });
      

    }
});




    
//Once submit has been hit
router.post('/CompletedScribe/:id', function(req, res){
    
        
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
                        toWhom : req.body.username,
                        basedonIdComments : req.body.message
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
                    

                    
                    
				   res.redirect('/Completed/finished/');
				}
		 });
        
    }

    	 });





router.get('/CompletedScribeLargeView/:id/:username',  function(req, res){
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var id = req.params.id;
    console.log(id);
    
    OngoingScribe.findByIdAndUpdate({_id: req.params.id},
	                   {
				  Downloaded   : "Downloaded"
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{ 
                        OngoingScribe.find({ _id: req.params.id}, function(err, docs){
                         if(err) throw err;
                         else  res.render('CompletedScribeLargeView',{CompletedScribe : docs});
                            });
				 }
			 });
    
    
    }
    
});


    //< !---------------------------------------------------------------------------------------------Completed VoiceOver--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------Completed VoiceOver--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------Completed VoiceOver--------------------------------------------------------------------------------------------- !>





router.get('/CompletedVoiceOver/:id/:username', function(req, res){
    
        
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
        
    var session = req.params.username;
    var id = req.params.id;

    console.log(id);
    console.log(session);
          

    OngoingVoiceOver.find({ toWhom: session}).sort({voice_date: -1, voice_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('CompletedVoiceOver',{CompletedVoiceOver : docs});
    });
      
    }

});




    
//Once submit has been hit
router.post('/CompletedVoiceOver/:id', function(req, res){
    
        
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
                       voice_final_path : req.body.image,
                        toWhom : req.body.username,
                        basedonIdComments : req.body.message
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
                    

                    
                    
				   res.redirect('/Completed/finished/');
				}
		 });
        
    }

    	 });


router.get('/CompletedVoiceOverLargeView/:id/:username',  function(req, res){
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var id = req.params.id;
    console.log(id);
    
    OngoingVoiceOver.findByIdAndUpdate({_id: req.params.id},
	                   {
				  Downloaded   : "Downloaded"
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{ 
                        OngoingVoiceOver.find({ _id: req.params.id}, function(err, docs){
                         if(err) throw err;
                         else  res.render('CompletedVoiceOverLargeView',{CompletedVoiceOver : docs});
                            });
				 }
			 });
    
    
    }
    
});



    //< !---------------------------------------------------------------------------------------------Completed Gif--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------Completed Gif--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------Completed Gif--------------------------------------------------------------------------------------------- !>





    router.get('/CompletedGif/:id/:username', function(req, res){
    
        
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
else  res.render('CompletedGif',{Gif : docs});
});

}


});





//Once submit has been hit
router.post('/CompletedGif/:id', function(req, res){



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
Gif.update({_id: req.params.id},
               {
                gif_final_path : req.body.image,
                toWhom : req.body.username,
                basedonIdComments : req.body.message
       }, function(err){
         if(err) res.json(err);
        else
        {
            

            
            
           res.redirect('/Completed/finished/');
        }
 });

}

 });




router.get('/CompletedGifLargeView/:id/:username',  function(req, res){
        if(!req.user){
    res.redirect('/');
}
else
{

var id = req.params.id;
console.log(id);

Gif.findByIdAndUpdate({_id: req.params.id},
               {
          Downloaded   : "Downloaded"
       }, function(err, docs){
         if(err) res.json(err);
        else
        { 
            Gif.find({ _id: req.params.id}, function(err, docs){
                 if(err) throw err;
                 else  res.render('CompletedGifLargeView',{Gif : docs});
                    });
         }
     });


}

});





    //< !-------------------------------------------------------------------------------------Completed Miscellaneous--------------------------------------------------------------------------------------------- !>
    //< !-------------------------------------------------------------------------------------Completed Miscellaneous--------------------------------------------------------------------------------------------- !>
    //< !-------------------------------------------------------------------------------------Completed Miscellaneous--------------------------------------------------------------------------------------------- !>





router.get('/CompletedMiscellaneous/:id/:username', function(req, res){
        
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
        
    var session = req.params.username;
    var id = req.params.id;

    console.log(id);
    console.log(session);
          

    Miscellaneous.find({ toWhom: session}).sort({miscellaneous_date: -1, miscellaneous_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('CompletedMiscellaneous',{CompletedMiscellaneous : docs});
    });
      
    }
});




    
//Once submit has been hit
router.post('/CompletedMiscellaneous/:id', function(req, res){
    
        
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
                        toWhom : req.body.username,
                        basedonIdComments : req.body.message
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
                    

                    
                    
				   res.redirect('/Completed/finished/');
				}
		 });
        
    }

    	 });





router.get('/CompletedMiscellaneousLargeView/:id/:username',  function(req, res){
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var id = req.params.id;
    console.log(id);
    
    Miscellaneous.findByIdAndUpdate({_id: req.params.id},
	                   {
				  Downloaded   : "Downloaded"
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{ 
                        Miscellaneous.find({ _id: req.params.id}, function(err, docs){
                         if(err) throw err;
                         else  res.render('CompletedMiscellaneousLargeView',{CompletedMiscellaneous : docs});
                            });
				 }
			 });
    
    
    }
    
});


    //< !-----------------------------------------------------------------------------------------Completed Scripts--------------------------------------------------------------------------------------------- !>
    //< !-----------------------------------------------------------------------------------------Completed Scripts--------------------------------------------------------------------------------------------- !>
    //< !-----------------------------------------------------------------------------------------Completed Scripts--------------------------------------------------------------------------------------------- !>





router.get('/CompletedScripts/:id/:username', function(req, res){
    
        
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
          

    Scripts.find({ toWhom: session}).sort({script_date: -1, script_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('CompletedScripts',{CompletedScripts : docs});
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
	Scripts.update({_id: req.params.id},
	                   {
                       script_final_path : req.body.image,
                        toWhom : req.body.username,
                        basedonIdComments : req.body.message
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
                    

                    
                    
				   res.redirect('/Completed/finished/');
				}
		 });
    }

    	 });





router.get('/CompletedScriptsLargeView/:id/:username',  function(req, res){
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var id = req.params.id;
    console.log(id);
    
    Scripts.findByIdAndUpdate({_id: req.params.id},
	                   {
				  Downloaded   : "Downloaded"
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{ 
                        Scripts.find({ _id: req.params.id}, function(err, docs){
                         if(err) throw err;
                         else  res.render('CompletedScriptsLargeView',{CompletedScripts : docs});
                            });
				 }
			 });
    
    
    }
    
});

module.exports =router;