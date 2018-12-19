const express = require("express");
const router = express.Router();
var Clientuser = require('../models/clientuser');
var User = require('../models/user');

//<!-------------------------------------------------------------------------------------------------Videos Comments ----------------------------------------------------------------------------------->//
//<!-------------------------------------------------------------------------------------------------Videos Comments ----------------------------------------------------------------------------------->//
//<!-------------------------------------------------------------------------------------------------Videos Comments ----------------------------------------------------------------------------------->//
var TwodCommentsSection = require('../models/TwodCommentsSection');
var ThreedCommentsSection = require('../models/ThreedCommentsSection');
var ExplainerCommentsSection = require('../models/ExplainerCommentsSection');
var GreetingCommentsSection = require('../models/GreetingCommentsSection');
var PromotionalCommentsSection = require('../models/PromotionalCommentsSection');
var ScribeCommentsSection = require('../models/ScribeCommentsSection');
var VoiceCommentsSection = require('../models/VoiceCommentsSection');

//<!-------------------------------------------------------------------------------------------------Branding Comments ----------------------------------------------------------------------------------->//
//<!-------------------------------------------------------------------------------------------------Branding Comments ----------------------------------------------------------------------------------->//
//<!-------------------------------------------------------------------------------------------------Branding Comments ----------------------------------------------------------------------------------->//

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

//<!-------------------------------------------------------------------------------------------------Ads Comments ----------------------------------------------------------------------------------->//
//<!-------------------------------------------------------------------------------------------------Ads Comments ----------------------------------------------------------------------------------->//
//<!-------------------------------------------------------------------------------------------------Ads Comments ----------------------------------------------------------------------------------->//
var NewspaperCommentsSection = require('../models/NewspaperCommentsSection');
var MagazineCommentsSection = require('../models/MagazineCommentsSection');
var TheatreCommentsSection = require('../models/TheatreCommentsSection');
var TvCommentsSection = require('../models/TvCommentsSection');
var DigitalCommentsSection = require('../models/DigitalCommentsSection');


//<!-------------------------------------------------------------------------------------------------Miscellaneous Comments ----------------------------------------------------------------------------------->//
//<!-------------------------------------------------------------------------------------------------Miscellaneous Comments ----------------------------------------------------------------------------------->//
//<!-------------------------------------------------------------------------------------------------Miscellaneous Comments ----------------------------------------------------------------------------------->//
var MiscellaneousCommentsSection = require('../models/MiscellaneousCommentsSection');



//<!-------------------------------------------------------------------------------------------------Gif Comments ----------------------------------------------------------------------------------->//
//<!-------------------------------------------------------------------------------------------------Gif Comments ----------------------------------------------------------------------------------->//
//<!-------------------------------------------------------------------------------------------------Gif Comments ----------------------------------------------------------------------------------->//
var GifCommentsSection = require('../models/GifCommentsSection');




//<!-------------------------------------------------------------------------------------------------Scripts Comments ----------------------------------------------------------------------------------->//
//<!-------------------------------------------------------------------------------------------------Scripts Comments ----------------------------------------------------------------------------------->//
//<!-------------------------------------------------------------------------------------------------Scripts Comments ----------------------------------------------------------------------------------->//
var ScriptsCommentsSection = require('../models/ScriptsCommentsSection');


var moment = require('moment');
var path = require('path');
var fs = require('fs');
var multer  = require('multer');




//<!-------------------------------------------------------------------------------------------------Logo Comments ----------------------------------------------------------------------------------->//
//<!-------------------------------------------------------------------------------------------------Logo Comments ----------------------------------------------------------------------------------->//
//<!-------------------------------------------------------------------------------------------------Logo Comments ----------------------------------------------------------------------------------->//

router.get('/pickClient-Ongoing-logo-Comments', function(req,res){
    
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
        
    Clientuser.find({},function(err, docs){
        if(err) throw err;
        else res.render('pickClient-Ongoing-logo-Comments', {Clientuser : docs});
    });
        
        
    }
    
});



router.post('/view-Ongoing-logo-Comments', function(req,res){
    
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var clientname = req.body.clientname;
    console.log(clientname);
    var brand = "Logo-Designs"
    console.log(brand);

    CommentsSection.find({username: clientname, brand: brand},function(err, docs){
        if(err) throw err; 
        else res.render('view-Ongoing-logo-Comments', {CommentsSection : docs});
    });
        
    }
    
});

//Once submit has been hit
router.post('/post-Ongoing-logo-Comments/:id', function(req, res){
    
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
        
    var AdminName = "Pw";
    console.log(AdminName);   


	CommentsSection.update({_id: req.params.id},
	                   {
                        AdminName : AdminName,
                        AdminComments : req.body.adminComments,
                        AdminDate : moment().format('MMMM Do YYYY'),
                        AdminTime : moment().format('LTS')
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{
                    console.log(docs);
				   res.redirect('/Comments/pickClient-Ongoing-logo-Comments');
				}
		 });
    }
    	 });


//Delete Clients

router.get('/deleteComments/:id', function(req, res){
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
        
	CommentsSection.findByIdAndRemove({_id: req.params.id}, 
	   function(err){
		if(err) throw err;
		else res.redirect('/Comments/pickClient-Ongoing-logo-Comments');
	});
        
        
    }
    
});


//<!-------------------------------------------------------------------------------------------------Stationery Comments ----------------------------------------------------------------------------------->//
//<!-------------------------------------------------------------------------------------------------Stationery Comments ----------------------------------------------------------------------------------->//
//<!-------------------------------------------------------------------------------------------------Stationery Comments ----------------------------------------------------------------------------------->//



router.get('/pickClient-Ongoing-stationery-Comments', function(req,res){
    
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
        
    Clientuser.find({},function(err, docs){
        if(err) throw err;
        else res.render('pickClient-Ongoing-stationery-Comments', {Clientuser : docs});
    });
        
        
    }
    
});



router.post('/view-Ongoing-stationery-Comments', function(req,res){
    
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
        
    var clientname = req.body.clientname;
    console.log(clientname);
    var brand = "Stationery-Designs"
    console.log(brand);

    StationeryCommentsSection.find({username: clientname, brand: brand},function(err, docs){
        if(err) throw err; 
        else res.render('view-Ongoing-stationery-Comments', {StationeryCommentsSection : docs});
    });
        
        
    }
    
});

//Once submit has been hit
router.post('/post-Ongoing-stationery-Comments/:id', function(req, res){
    
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var AdminName = "Pw";
    console.log(AdminName);   


	StationeryCommentsSection.update({_id: req.params.id},
	                   {
                        AdminName : AdminName,
                        AdminComments : req.body.adminComments,
                        AdminDate : moment().format('MMMM Do YYYY'),
                        AdminTime : moment().format('LTS')
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{
                    console.log(docs);
				   res.redirect('/Comments/pickClient-Ongoing-stationery-Comments');
				}
		 });
    }
    	 });


//Delete Clients

router.get('/deleteComments/:id', function(req, res){
    
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
	StationeryCommentsSection.findByIdAndRemove({_id: req.params.id}, 
	   function(err){
		if(err) throw err;
		else res.redirect('/Comments/pickClient-Ongoing-stationery-Comments');
	});
        
        
    }
});



//<!-------------------------------------------------------------------------------------------------Brochure Comments ----------------------------------------------------------------------------------->//
//<!-------------------------------------------------------------------------------------------------Brochure Comments ----------------------------------------------------------------------------------->//
//<!-------------------------------------------------------------------------------------------------Brochure Comments ----------------------------------------------------------------------------------->//



router.get('/pickClient-Ongoing-brochure-Comments', function(req,res){
    
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
        
    Clientuser.find({},function(err, docs){
        if(err) throw err;
        else res.render('pickClient-Ongoing-brochure-Comments', {Clientuser : docs});
    });
        
        
    }
});



router.post('/view-Ongoing-brochure-Comments', function(req,res){
    
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var clientname = req.body.clientname;
    console.log(clientname);
    var brand = "Brochure-Designs"
    console.log(brand);

    BrochureCommentsSection.find({username: clientname, brand: brand},function(err, docs){
        if(err) throw err; 
        else res.render('view-Ongoing-brochure-Comments', {BrochureCommentsSection : docs});
    });
        
    }
});

//Once submit has been hit
router.post('/post-Ongoing-brochure-Comments/:id', function(req, res){
    
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var AdminName = "Pw";
    console.log(AdminName);   


	BrochureCommentsSection.update({_id: req.params.id},
	                   {
                        AdminName : AdminName,
                        AdminComments : req.body.adminComments,
                        AdminDate : moment().format('MMMM Do YYYY'),
                        AdminTime : moment().format('LTS')
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{
                    console.log(docs);
				   res.redirect('/Comments/pickClient-Ongoing-brochure-Comments');
				}
		 });
}
    	 });


//Delete Clients

router.get('/deleteComments/:id', function(req, res){
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
	BrochureCommentsSection.findByIdAndRemove({_id: req.params.id}, 
	   function(err){
		if(err) throw err;
		else res.redirect('/Comments/pickClient-Ongoing-brochure-Comments');
	});
        
    }
    
});





//<!-------------------------------------------------------------------------------------------------Menu Comments ----------------------------------------------------------------------------------->//
//<!-------------------------------------------------------------------------------------------------Menu Comments ----------------------------------------------------------------------------------->//
//<!-------------------------------------------------------------------------------------------------Menu Comments ----------------------------------------------------------------------------------->//



router.get('/pickClient-Ongoing-menu-Comments', function(req,res){
    
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    Clientuser.find({},function(err, docs){
        if(err) throw err;
        else res.render('pickClient-Ongoing-menu-Comments', {Clientuser : docs});
    });
        
    }
    
});



router.post('/view-Ongoing-menu-Comments', function(req,res){
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var clientname = req.body.clientname;
    console.log(clientname);
    var brand = "Menu-Designs"
    console.log(brand);

    MenuCommentsSection.find({username: clientname, brand: brand},function(err, docs){
        if(err) throw err; 
        else res.render('view-Ongoing-menu-Comments', {MenuCommentsSection : docs});
    });
        
    }
    
});

//Once submit has been hit
router.post('/post-Ongoing-menu-Comments/:id', function(req, res){
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var AdminName = "Pw";
    console.log(AdminName);   


	MenuCommentsSection.update({_id: req.params.id},
	                   {
                        AdminName : AdminName,
                        AdminComments : req.body.adminComments,
                        AdminDate : moment().format('MMMM Do YYYY'),
                        AdminTime : moment().format('LTS')
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{
                    console.log(docs);
				   res.redirect('/Comments/pickClient-Ongoing-menu-Comments');
				}
		 });
    }
    	 });


//Delete Clients

router.get('/deleteComments/:id', function(req, res){
    
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
	MenuCommentsSection.findByIdAndRemove({_id: req.params.id}, 
	   function(err){
		if(err) throw err;
		else res.redirect('/Comments/pickClient-Ongoing-menu-Comments');
	});
        
    }
});







//<!-------------------------------------------------------------------------------------------------Landing Comments ----------------------------------------------------------------------------------->//
//<!-------------------------------------------------------------------------------------------------Landing Comments ----------------------------------------------------------------------------------->//
//<!-------------------------------------------------------------------------------------------------Landing Comments ----------------------------------------------------------------------------------->//



router.get('/pickClient-Ongoing-landing-Comments', function(req,res){
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    Clientuser.find({},function(err, docs){
        if(err) throw err;
        else res.render('pickClient-Ongoing-landing-Comments', {Clientuser : docs});
    });
        
    }
});



router.post('/view-Ongoing-landing-Comments', function(req,res){
    
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var clientname = req.body.clientname;
    console.log(clientname);
    var brand = "Landing-Designs"
    console.log(brand);

    LandingCommentsSection.find({username: clientname, brand: brand},function(err, docs){
        if(err) throw err; 
        else res.render('view-Ongoing-landing-Comments', {LandingCommentsSection : docs});
    });
        
    }
});

//Once submit has been hit
router.post('/post-Ongoing-landing-Comments/:id', function(req, res){
    
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var AdminName = "Pw";
    console.log(AdminName);   


	LandingCommentsSection.update({_id: req.params.id},
	                   {
                        AdminName : AdminName,
                        AdminComments : req.body.adminComments,
                        AdminDate : moment().format('MMMM Do YYYY'),
                        AdminTime : moment().format('LTS')
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{
                    console.log(docs);
				   res.redirect('/Comments/pickClient-Ongoing-landing-Comments');
				}
		 });
    }
    	 });


//Delete Clients

router.get('/deleteComments/:id', function(req, res){
    
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
	LandingCommentsSection.findByIdAndRemove({_id: req.params.id}, 
	   function(err){
		if(err) throw err;
		else res.redirect('/Comments/pickClient-Ongoing-landing-Comments');
	});
        
    }
});









//<!-------------------------------------------------------------------------------------------------Package Comments ----------------------------------------------------------------------------------->//
//<!-------------------------------------------------------------------------------------------------Package Comments ----------------------------------------------------------------------------------->//
//<!-------------------------------------------------------------------------------------------------Package Comments ----------------------------------------------------------------------------------->//



router.get('/pickClient-Ongoing-package-Comments', function(req,res){
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
    Clientuser.find({},function(err, docs){
        if(err) throw err;
        else res.render('pickClient-Ongoing-package-Comments', {Clientuser : docs});
    });
        
    }
});



router.post('/view-Ongoing-package-Comments', function(req,res){
    
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var clientname = req.body.clientname;
    console.log(clientname);
    var brand = "Package-Designs"
    console.log(brand);

    PackageCommentsSection.find({username: clientname, brand: brand},function(err, docs){
        if(err) throw err; 
        else res.render('view-Ongoing-package-Comments', {CommentsSection : docs});
    });
    }
});

//Once submit has been hit
router.post('/post-Ongoing-package-Comments/:id', function(req, res){
    
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
        
    var AdminName = "Pw";
    console.log(AdminName);   


	PackageCommentsSection.update({_id: req.params.id},
	                   {
                        AdminName : AdminName,
                        AdminComments : req.body.adminComments,
                        AdminDate : moment().format('MMMM Do YYYY'),
                        AdminTime : moment().format('LTS')
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{
                    console.log(docs);
				   res.redirect('/Comments/pickClient-Ongoing-package-Comments');
				}
		 });
    }
    	 });


//Delete Clients

router.get('/deleteComments/:id', function(req, res){
    
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
	PackageCommentsSection.findByIdAndRemove({_id: req.params.id}, 
	   function(err){
		if(err) throw err;
		else res.redirect('/Comments/pickClient-Ongoing-package-Comments');
	});
        
    }
    
});








//<!-------------------------------------------------------------------------------------------------Banner Comments ----------------------------------------------------------------------------------->//
//<!-------------------------------------------------------------------------------------------------Banner Comments ----------------------------------------------------------------------------------->//
//<!-------------------------------------------------------------------------------------------------Banner Comments ----------------------------------------------------------------------------------->//



router.get('/pickClient-Ongoing-banner-Comments', function(req,res){
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
        
    Clientuser.find({},function(err, docs){
        if(err) throw err;
        else res.render('pickClient-Ongoing-banner-Comments', {Clientuser : docs});
    });
        
    }
    
});



router.post('/view-Ongoing-banner-Comments', function(req,res){
    
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
        
    var clientname = req.body.clientname;
    console.log(clientname);
    var brand = "Banner-Designs"
    console.log(brand);

    BannerCommentsSection.find({username: clientname, brand: brand},function(err, docs){
        if(err) throw err; 
        else res.render('view-Ongoing-banner-Comments', {BannerCommentsSection : docs});
    });
        
        
    }
    
});

//Once submit has been hit
router.post('/post-Ongoing-banner-Comments/:id', function(req, res){
    
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var AdminName = "Pw";
    console.log(AdminName);   


	BannerCommentsSection.update({_id: req.params.id},
	                   {
                        AdminName : AdminName,
                        AdminComments : req.body.adminComments,
                        AdminDate : moment().format('MMMM Do YYYY'),
                        AdminTime : moment().format('LTS')
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{
                    console.log(docs);
				   res.redirect('/Comments/pickClient-Ongoing-banner-Comments');
				}
		 });
    }
    	 });


//Delete Clients

router.get('/deleteComments/:id', function(req, res){
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
	BannerCommentsSection.findByIdAndRemove({_id: req.params.id}, 
	   function(err){
		if(err) throw err;
		else res.redirect('/Comments/pickClient-Ongoing-banner-Comments');
	});
        
    }
});













//<!-------------------------------------------------------------------------------------------------Hoarding Comments ----------------------------------------------------------------------------------->//
//<!-------------------------------------------------------------------------------------------------Hoarding Comments ----------------------------------------------------------------------------------->//
//<!-------------------------------------------------------------------------------------------------Hoarding Comments ----------------------------------------------------------------------------------->//



router.get('/pickClient-Ongoing-hoarding-Comments', function(req,res){
    if(!req.user){
res.redirect('/');
}
else
{



Clientuser.find({},function(err, docs){
if(err) throw err;
else res.render('pickClient-Ongoing-hoarding-Comments', {Clientuser : docs});
});

}

});



router.post('/view-Ongoing-hoarding-Comments', function(req,res){

    if(!req.user){
res.redirect('/');
}
else
{



var clientname = req.body.clientname;
console.log(clientname);
var brand = "Hoarding-Designs"
console.log(brand);

HoardingCommentsSection.find({username: clientname, brand: brand},function(err, docs){
if(err) throw err; 
else res.render('view-Ongoing-hoarding-Comments', {HoardingCommentsSection : docs});
});


}

});

//Once submit has been hit
router.post('/post-Ongoing-hoarding-Comments/:id', function(req, res){

    if(!req.user){
res.redirect('/');
}
else
{


var AdminName = "Pw";
console.log(AdminName);   


HoardingCommentsSection.update({_id: req.params.id},
       {
        AdminName : AdminName,
        AdminComments : req.body.adminComments,
        AdminDate : moment().format('MMMM Do YYYY'),
        AdminTime : moment().format('LTS')
}, function(err, docs){
 if(err) res.json(err);
else
{
    console.log(docs);
   res.redirect('/Comments/pickClient-Ongoing-hoarding-Comments');
}
});
}
});


//Delete Clients

router.get('/deleteComments/:id', function(req, res){
    if(!req.user){
res.redirect('/');
}
else
{


HoardingCommentsSection.findByIdAndRemove({_id: req.params.id}, 
function(err){
if(err) throw err;
else res.redirect('/Comments/pickClient-Ongoing-hoarding-Comments');
});

}
});








//<!-------------------------------------------------------------------------------------------------Shirt Comments ----------------------------------------------------------------------------------->//
//<!-------------------------------------------------------------------------------------------------Shirt Comments ----------------------------------------------------------------------------------->//
//<!-------------------------------------------------------------------------------------------------Shirt Comments ----------------------------------------------------------------------------------->//



router.get('/pickClient-Ongoing-shirt-Comments', function(req,res){
    
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    Clientuser.find({},function(err, docs){
        if(err) throw err;
        else res.render('pickClient-Ongoing-shirt-Comments', {Clientuser : docs});
    });
        
        
    }
    
});



router.post('/view-Ongoing-shirt-Comments', function(req,res){
    
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var clientname = req.body.clientname;
    console.log(clientname);
    var brand = "Shirt-Designs"
    console.log(brand);

    ShirtCommentsSection.find({username: clientname, brand: brand},function(err, docs){
        if(err) throw err; 
        else res.render('view-Ongoing-shirt-Comments', {ShirtCommentsSection : docs});
    });
        
        
    }
    
});

//Once submit has been hit
router.post('/post-Ongoing-shirt-Comments/:id', function(req, res){
    
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var AdminName = "Pw";
    console.log(AdminName);   


	ShirtCommentsSection.update({_id: req.params.id},
	                   {
                        AdminName : AdminName,
                        AdminComments : req.body.adminComments,
                        AdminDate : moment().format('MMMM Do YYYY'),
                        AdminTime : moment().format('LTS')
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{
                    console.log(docs);
				   res.redirect('/Comments/pickClient-Ongoing-shirt-Comments');
				}
		 });
    }

    	 });


//Delete Clients

router.get('/deleteComments/:id', function(req, res){
    
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
	ShirtCommentsSection.findByIdAndRemove({_id: req.params.id}, 
	   function(err){
		if(err) throw err;
		else res.redirect('/Comments/pickClient-Ongoing-shirt-Comments');
	});
        
    }
    
    
});



//<!-------------------------------------------------------------------------------------------------Shop Comments ----------------------------------------------------------------------------------->//
//<!-------------------------------------------------------------------------------------------------Shop Comments ----------------------------------------------------------------------------------->//
//<!-------------------------------------------------------------------------------------------------Shop Comments ----------------------------------------------------------------------------------->//



router.get('/pickClient-Ongoing-shop-Comments', function(req,res){
    
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    Clientuser.find({},function(err, docs){
        if(err) throw err;
        else res.render('pickClient-Ongoing-shop-Comments', {Clientuser : docs});
    });
        
    }
    
});



router.post('/view-Ongoing-shop-Comments', function(req,res){
    
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var clientname = req.body.clientname;
    console.log(clientname);
    var brand = "Shop-Designs"
    console.log(brand);

    ShopCommentsSection.find({username: clientname, brand: brand},function(err, docs){
        if(err) throw err; 
        else res.render('view-Ongoing-shop-Comments', {ShopCommentsSection : docs});
    });
        
    }
    
    
});

//Once submit has been hit
router.post('/post-Ongoing-shop-Comments/:id', function(req, res){
    
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
        
    var AdminName = "Pw";
    console.log(AdminName);   


	ShopCommentsSection.update({_id: req.params.id},
	                   {
                        AdminName : AdminName,
                        AdminComments : req.body.adminComments,
                        AdminDate : moment().format('MMMM Do YYYY'),
                        AdminTime : moment().format('LTS')
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{
                    console.log(docs);
				   res.redirect('/Comments/pickClient-Ongoing-shop-Comments');
				}
		 });
    }
    	 });


//Delete Clients

router.get('/deleteComments/:id', function(req, res){
    
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
	ShopCommentsSection.findByIdAndRemove({_id: req.params.id}, 
	   function(err){
		if(err) throw err;
		else res.redirect('/Comments/pickClient-Ongoing-shop-Comments');
	});
        
    }
    
});






//<!-------------------------------------------------------------------------------------------------Videos Section ----------------------------------------------------------------------------------->//
//<!-------------------------------------------------------------------------------------------------Videos Section ----------------------------------------------------------------------------------->//
//<!-------------------------------------------------------------------------------------------------Videos Section ----------------------------------------------------------------------------------->//




//<!-------------------------------------------------------------------------------------------------2D Comments ----------------------------------------------------------------------------------->//
//<!-------------------------------------------------------------------------------------------------2D Comments ----------------------------------------------------------------------------------->//
//<!-------------------------------------------------------------------------------------------------2D Comments ----------------------------------------------------------------------------------->//



router.get('/pickClient-Ongoing-twod-Comments', function(req,res){
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
        
    Clientuser.find({},function(err, docs){
        if(err) throw err;
        else res.render('pickClient-Ongoing-twod-Comments', {Clientuser : docs});
    });
        
    }
    
});



router.post('/view-Ongoing-twod-Comments', function(req,res){
    
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var clientname = req.body.clientname;
    console.log(clientname);
    var brand = "2D-Videos"
    console.log(brand);

    TwodCommentsSection.find({username: clientname, brand: brand},function(err, docs){
        if(err) throw err; 
        else res.render('view-Ongoing-twod-Comments', {TwodCommentsSection : docs});
    });
        
    }
    
});

//Once submit has been hit
router.post('/post-Ongoing-twod-Comments/:id', function(req, res){
    
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var AdminName = "Pw";
    console.log(AdminName);   


	TwodCommentsSection.update({_id: req.params.id},
	                   {
                        AdminName : AdminName,
                        AdminComments : req.body.adminComments,
                        AdminDate : moment().format('MMMM Do YYYY'),
                        AdminTime : moment().format('LTS')
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{
                    console.log(docs);
				   res.redirect('/Comments/pickClient-Ongoing-twod-Comments');
				}
		 });
    }
    	 });


//Delete Clients

router.get('/deleteComments/:id', function(req, res){
    
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
	TwodCommentsSection.findByIdAndRemove({_id: req.params.id}, 
	   function(err){
		if(err) throw err;
		else res.redirect('/Comments/pickClient-Ongoing-twod-Comments');
	});
        
    }
    
});





//<!-------------------------------------------------------------------------------------------------3D Comments ----------------------------------------------------------------------------------->//
//<!-------------------------------------------------------------------------------------------------3D Comments ----------------------------------------------------------------------------------->//
//<!-------------------------------------------------------------------------------------------------3D Comments ----------------------------------------------------------------------------------->//



router.get('/pickClient-Ongoing-threed-Comments', function(req,res){
    
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    Clientuser.find({},function(err, docs){
        if(err) throw err;
        else res.render('pickClient-Ongoing-threed-Comments', {Clientuser : docs});
    });
        
    }
    
});



router.post('/view-Ongoing-threed-Comments', function(req,res){
    
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var clientname = req.body.clientname;
    console.log(clientname);
    var brand = "3D-Videos"
    console.log(brand);

    ThreedCommentsSection.find({username: clientname, brand: brand},function(err, docs){
        if(err) throw err; 
        else res.render('view-Ongoing-threed-Comments', {ThreedCommentsSection : docs});
    });
    }
    
});

//Once submit has been hit
router.post('/post-Ongoing-threed-Comments/:id', function(req, res){
    
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var AdminName = "Pw";
    console.log(AdminName);   


	ThreedCommentsSection.update({_id: req.params.id},
	                   {
                        AdminName : AdminName,
                        AdminComments : req.body.adminComments,
                        AdminDate : moment().format('MMMM Do YYYY'),
                        AdminTime : moment().format('LTS')
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{
                    console.log(docs);
				   res.redirect('/Comments/pickClient-Ongoing-threed-Comments');
				}
		 });
    }
    	 });


//Delete Clients

router.get('/deleteComments/:id', function(req, res){
    
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
	ThreedCommentsSection.findByIdAndRemove({_id: req.params.id}, 
	   function(err){
		if(err) throw err;
		else res.redirect('/Comments/pickClient-Ongoing-threed-Comments');
	});
        
    }
    
});





//<!-------------------------------------------------------------------------------------------------Explainer Comments ----------------------------------------------------------------------------------->//
//<!-------------------------------------------------------------------------------------------------Explainer Comments ----------------------------------------------------------------------------------->//
//<!-------------------------------------------------------------------------------------------------Explainer Comments ----------------------------------------------------------------------------------->//



router.get('/pickClient-Ongoing-explainer-Comments', function(req,res){
    
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    Clientuser.find({},function(err, docs){
        if(err) throw err;
        else res.render('pickClient-Ongoing-explainer-Comments', {Clientuser : docs});
    });
        
    }
    
});



router.post('/view-Ongoing-explainer-Comments', function(req,res){
    
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var clientname = req.body.clientname;
    console.log(clientname);
    var brand = "Explainer-Videos"
    console.log(brand);

    ExplainerCommentsSection.find({username: clientname, brand: brand},function(err, docs){
        if(err) throw err; 
        else res.render('view-Ongoing-explainer-Comments', {ExplainerCommentsSection : docs});
    });
        
    }
    
});

//Once submit has been hit
router.post('/post-Ongoing-explainer-Comments/:id', function(req, res){
    
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var AdminName = "Pw";
    console.log(AdminName);   


	ExplainerCommentsSection.update({_id: req.params.id},
	                   {
                        AdminName : AdminName,
                        AdminComments : req.body.adminComments,
                        AdminDate : moment().format('MMMM Do YYYY'),
                        AdminTime : moment().format('LTS')
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{
                    console.log(docs);
				   res.redirect('/Comments/pickClient-Ongoing-explainer-Comments');
				}
		 });
    }
    	 });


//Delete Clients

router.get('/deleteComments/:id', function(req, res){
    
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
        
	ExplainerCommentsSection.findByIdAndRemove({_id: req.params.id}, 
	   function(err){
		if(err) throw err;
		else res.redirect('/Comments/pickClient-Ongoing-explainer-Comments');
	});
        
        
    }
});




//<!-------------------------------------------------------------------------------------------------Greeting Comments ----------------------------------------------------------------------------------->//
//<!-------------------------------------------------------------------------------------------------Greeting Comments ----------------------------------------------------------------------------------->//
//<!-------------------------------------------------------------------------------------------------Greeting Comments ----------------------------------------------------------------------------------->//



router.get('/pickClient-Ongoing-greeting-Comments', function(req,res){
    
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    Clientuser.find({},function(err, docs){
        if(err) throw err;
        else res.render('pickClient-Ongoing-greeting-Comments', {Clientuser : docs});
    });
        
    }
    
    
});



router.post('/view-Ongoing-greeting-Comments', function(req,res){
    
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var clientname = req.body.clientname;
    console.log(clientname);
    var brand = "Greeting-Videos"
    console.log(brand);

    GreetingCommentsSection.find({username: clientname, brand: brand},function(err, docs){
        if(err) throw err; 
        else res.render('view-Ongoing-greeting-Comments', {GreetingCommentsSection : docs});
    });
        
    }
    
});

//Once submit has been hit
router.post('/post-Ongoing-greeting-Comments/:id', function(req, res){
    
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var AdminName = "Pw";
    console.log(AdminName);   


	GreetingCommentsSection.update({_id: req.params.id},
	                   {
                        AdminName : AdminName,
                        AdminComments : req.body.adminComments,
                        AdminDate : moment().format('MMMM Do YYYY'),
                        AdminTime : moment().format('LTS')
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{
                    console.log(docs);
				   res.redirect('/Comments/pickClient-Ongoing-greeting-Comments');
				}
		 });
        
    }
    

    	 });


//Delete Clients

router.get('/deleteComments/:id', function(req, res){
    
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
	GreetingCommentsSection.findByIdAndRemove({_id: req.params.id}, 
	   function(err){
		if(err) throw err;
		else res.redirect('/Comments/pickClient-Ongoing-greeting-Comments');
	});
        
    }
    
});





//<!-------------------------------------------------------------------------------------------------Promotional Comments ----------------------------------------------------------------------------------->//
//<!-------------------------------------------------------------------------------------------------Promotional Comments ----------------------------------------------------------------------------------->//
//<!-------------------------------------------------------------------------------------------------Promotional Comments ----------------------------------------------------------------------------------->//



router.get('/pickClient-Ongoing-promotional-Comments', function(req,res){
    
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    Clientuser.find({},function(err, docs){
        if(err) throw err;
        else res.render('pickClient-Ongoing-promotional-Comments', {Clientuser : docs});
    });
        
    }
    
    
});



router.post('/view-Ongoing-promotional-Comments', function(req,res){
    
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var clientname = req.body.clientname;
    console.log(clientname);
    var brand = "Promotional-Videos"
    console.log(brand);

    PromotionalCommentsSection.find({username: clientname, brand: brand},function(err, docs){
        if(err) throw err; 
        else res.render('view-Ongoing-promotional-Comments', {PromotionalCommentsSection : docs});
    });
        
    }
    
});

//Once submit has been hit
router.post('/post-Ongoing-promotional-Comments/:id', function(req, res){
    
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var AdminName = "Pw";
    console.log(AdminName);   


	PromotionalCommentsSection.update({_id: req.params.id},
	                   {
                        AdminName : AdminName,
                        AdminComments : req.body.adminComments,
                        AdminDate : moment().format('MMMM Do YYYY'),
                        AdminTime : moment().format('LTS')
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{
                    console.log(docs);
				   res.redirect('/Comments/pickClient-Ongoing-promotional-Comments');
				}
		 });
        
    }
    

    	 });


//Delete Clients

router.get('/deleteComments/:id', function(req, res){
    
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
	PromotionalCommentsSection.findByIdAndRemove({_id: req.params.id}, 
	   function(err){
		if(err) throw err;
		else res.redirect('/Comments/pickClient-Ongoing-promotional-Comments');
	});
        
    }
    
});





//<!-------------------------------------------------------------------------------------------------Scribe Comments ----------------------------------------------------------------------------------->//
//<!-------------------------------------------------------------------------------------------------Scribe Comments ----------------------------------------------------------------------------------->//
//<!-------------------------------------------------------------------------------------------------Scribe Comments ----------------------------------------------------------------------------------->//



router.get('/pickClient-Ongoing-scribe-Comments', function(req,res){
    
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    Clientuser.find({},function(err, docs){
        if(err) throw err;
        else res.render('pickClient-Ongoing-scribe-Comments', {Clientuser : docs});
    });
        
    }
    
    
});



router.post('/view-Ongoing-scribe-Comments', function(req,res){
    
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var clientname = req.body.clientname;
    console.log(clientname);
    var brand = "Scribe-Videos"
    console.log(brand);

    ScribeCommentsSection.find({username: clientname, brand: brand},function(err, docs){
        if(err) throw err; 
        else res.render('view-Ongoing-scribe-Comments', {ScribeCommentsSection : docs});
    });
        
    }
    
});

//Once submit has been hit
router.post('/post-Ongoing-scribe-Comments/:id', function(req, res){
    
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var AdminName = "Pw";
    console.log(AdminName);   


	ScribeCommentsSection.update({_id: req.params.id},
	                   {
                        AdminName : AdminName,
                        AdminComments : req.body.adminComments,
                        AdminDate : moment().format('MMMM Do YYYY'),
                        AdminTime : moment().format('LTS')
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{
                    console.log(docs);
				   res.redirect('/Comments/pickClient-Ongoing-scribe-Comments');
				}
		 });
        
    }
    

    	 });


//Delete Clients

router.get('/deleteComments/:id', function(req, res){
    
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
	ScribeCommentsSection.findByIdAndRemove({_id: req.params.id}, 
	   function(err){
		if(err) throw err;
		else res.redirect('/Comments/pickClient-Ongoing-scribe-Comments');
	});
        
    }
    
});




//<!-------------------------------------------------------------------------------------------------Voice Comments ----------------------------------------------------------------------------------->//
//<!-------------------------------------------------------------------------------------------------Voice Comments ----------------------------------------------------------------------------------->//
//<!-------------------------------------------------------------------------------------------------Voice Comments ----------------------------------------------------------------------------------->//



router.get('/pickClient-Ongoing-voice-Comments', function(req,res){
    
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    Clientuser.find({},function(err, docs){
        if(err) throw err;
        else res.render('pickClient-Ongoing-voice-Comments', {Clientuser : docs});
    });
        
    }
});



router.post('/view-Ongoing-voice-Comments', function(req,res){
    
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var clientname = req.body.clientname;
    console.log(clientname);
    var brand = "Voice-Audio"
    console.log(brand);

    VoiceCommentsSection.find({username: clientname, brand: brand},function(err, docs){
        if(err) throw err; 
        else res.render('view-Ongoing-voice-Comments', {VoiceCommentsSection : docs});
    });
        
    }
});

//Once submit has been hit
router.post('/post-Ongoing-voice-Comments/:id', function(req, res){
    
                        if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var AdminName = "Pw";
    console.log(AdminName);   


	VoiceCommentsSection.update({_id: req.params.id},
	                   {
                        AdminName : AdminName,
                        AdminComments : req.body.adminComments,
                        AdminDate : moment().format('MMMM Do YYYY'),
                        AdminTime : moment().format('LTS')
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{
                    console.log(docs);
				   res.redirect('/Comments/pickClient-Ongoing-voice-Comments');
				}
		 });
}
    	 });


//Delete Clients

router.get('/deleteComments/:id', function(req, res){
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
	VoiceCommentsSection.findByIdAndRemove({_id: req.params.id}, 
	   function(err){
		if(err) throw err;
		else res.redirect('/Comments/pickClient-Ongoing-voice-Comments');
	});
        
    }
    
});





//<!-------------------------------------------------------------------------------------------------Ads Comments ----------------------------------------------------------------------------------->//
//<!-------------------------------------------------------------------------------------------------Ads Comments ----------------------------------------------------------------------------------->//
//<!-------------------------------------------------------------------------------------------------Ads Comments ----------------------------------------------------------------------------------->//




//<!-------------------------------------------------------------------------------------------------Newspaper Comments ----------------------------------------------------------------------------------->//
//<!-------------------------------------------------------------------------------------------------Newspaper Comments ----------------------------------------------------------------------------------->//
//<!-------------------------------------------------------------------------------------------------Newspaper Comments ----------------------------------------------------------------------------------->//



router.get('/pickClient-Ongoing-newspaper-Comments', function(req,res){
    
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    Clientuser.find({},function(err, docs){
        if(err) throw err;
        else res.render('pickClient-Ongoing-newspaper-Comments', {Clientuser : docs});
    });
        
    }
    
});



router.post('/view-Ongoing-newspaper-Comments', function(req,res){
    
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var clientname = req.body.clientname;
    console.log(clientname);
    var brand = "Newspaper-Ads"
    console.log(brand);

    NewspaperCommentsSection.find({username: clientname, brand: brand},function(err, docs){
        if(err) throw err; 
        else res.render('view-Ongoing-newspaper-Comments', {NewspaperCommentsSection : docs});
    });
        
    }
});

//Once submit has been hit
router.post('/post-Ongoing-newspaper-Comments/:id', function(req, res){
    
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var AdminName = "Pw";
    console.log(AdminName);   


	NewspaperCommentsSection.update({_id: req.params.id},
	                   {
                        AdminName : AdminName,
                        AdminComments : req.body.adminComments,
                        AdminDate : moment().format('MMMM Do YYYY'),
                        AdminTime : moment().format('LTS')
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{
                    console.log(docs);
				   res.redirect('/Comments/pickClient-Ongoing-newspaper-Comments');
				}
		 });
    }
    	 });


//Delete Clients

router.get('/deleteComments/:id', function(req, res){
    
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
	NewspaperCommentsSection.findByIdAndRemove({_id: req.params.id}, 
	   function(err){
		if(err) throw err;
		else res.redirect('/Comments/pickClient-Ongoing-newspaper-Comments');
	});
        
    }
});



//<!-------------------------------------------------------------------------------------------------Magazine Comments ----------------------------------------------------------------------------------->//
//<!-------------------------------------------------------------------------------------------------Magazine Comments ----------------------------------------------------------------------------------->//
//<!-------------------------------------------------------------------------------------------------Magazine Comments ----------------------------------------------------------------------------------->//



router.get('/pickClient-Ongoing-magazine-Comments', function(req,res){
                        if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
        
    Clientuser.find({},function(err, docs){
        if(err) throw err;
        else res.render('pickClient-Ongoing-magazine-Comments', {Clientuser : docs});
    });
        
        
    }
    
});



router.post('/view-Ongoing-magazine-Comments', function(req,res){
    
                        if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var clientname = req.body.clientname;
    console.log(clientname);
    var brand = "Magazine-Ads"
    console.log(brand);

    MagazineCommentsSection.find({username: clientname, brand: brand},function(err, docs){
        if(err) throw err; 
        else res.render('view-Ongoing-magazine-Comments', {MagazineCommentsSection : docs});
    });
        
    }
    
});

//Once submit has been hit
router.post('/post-Ongoing-magazine-Comments/:id', function(req, res){
    
                        if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var AdminName = "Pw";
    console.log(AdminName);   


	MagazineCommentsSection.update({_id: req.params.id},
	                   {
                        AdminName : AdminName,
                        AdminComments : req.body.adminComments,
                        AdminDate : moment().format('MMMM Do YYYY'),
                        AdminTime : moment().format('LTS')
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{
                    console.log(docs);
				   res.redirect('/Comments/pickClient-Ongoing-magazine-Comments');
				}
		 });
    }
    	 });


//Delete Clients

router.get('/deleteComments/:id', function(req, res){
    
                        if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
	MagazineCommentsSection.findByIdAndRemove({_id: req.params.id}, 
	   function(err){
		if(err) throw err;
		else res.redirect('/Comments/pickClient-Ongoing-magazine-Comments');
	});
        
    }
    
});


//<!-------------------------------------------------------------------------------------------------Theatre Comments ----------------------------------------------------------------------------------->//
//<!-------------------------------------------------------------------------------------------------Theatre Comments ----------------------------------------------------------------------------------->//
//<!-------------------------------------------------------------------------------------------------Theatre Comments ----------------------------------------------------------------------------------->//



router.get('/pickClient-Ongoing-theatre-Comments', function(req,res){
    
                        if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    Clientuser.find({},function(err, docs){
        if(err) throw err;
        else res.render('pickClient-Ongoing-theatre-Comments', {Clientuser : docs});
    });
        
    }
});



router.post('/view-Ongoing-theatre-Comments', function(req,res){
    
                        if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var clientname = req.body.clientname;
    console.log(clientname);
    var brand = "Theatre-Ads"
    console.log(brand);

    TheatreCommentsSection.find({username: clientname, brand: brand},function(err, docs){
        if(err) throw err; 
        else res.render('view-Ongoing-theatre-Comments', {TheatreCommentsSection : docs});
    });
        
    }
});

//Once submit has been hit
router.post('/post-Ongoing-theatre-Comments/:id', function(req, res){
    
        
                        if(!req.user){
            res.redirect('/');
}
    else
    {
       
        
    var AdminName = "Pw";
    console.log(AdminName);   


	TheatreCommentsSection.update({_id: req.params.id},
	                   {
                        AdminName : AdminName,
                        AdminComments : req.body.adminComments,
                        AdminDate : moment().format('MMMM Do YYYY'),
                        AdminTime : moment().format('LTS')
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{
                    console.log(docs);
				   res.redirect('/Comments/pickClient-Ongoing-theatre-Comments');
				}
		 });
}
    	 });


//Delete Clients

router.get('/deleteComments/:id', function(req, res){
    
                        if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
	TheatreCommentsSection.findByIdAndRemove({_id: req.params.id}, 
	   function(err){
		if(err) throw err;
		else res.redirect('/Comments/pickClient-Ongoing-theatre-Comments');
	});
        
    }
    
});



//<!-------------------------------------------------------------------------------------------------Tv Comments ----------------------------------------------------------------------------------->//
//<!-------------------------------------------------------------------------------------------------Tv Comments ----------------------------------------------------------------------------------->//
//<!-------------------------------------------------------------------------------------------------Tv Comments ----------------------------------------------------------------------------------->//



router.get('/pickClient-Ongoing-tv-Comments', function(req,res){
    
                        if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    Clientuser.find({},function(err, docs){
        if(err) throw err;
        else res.render('pickClient-Ongoing-tv-Comments', {Clientuser : docs});
    });
        
    }
});



router.post('/view-Ongoing-tv-Comments', function(req,res){
    
                        if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var clientname = req.body.clientname;
    console.log(clientname);
    var brand = "Tv-Ads"
    console.log(brand);

    TvCommentsSection.find({username: clientname, brand: brand},function(err, docs){
        if(err) throw err; 
        else res.render('view-Ongoing-tv-Comments', {TvCommentsSection : docs});
    });
        
    }
    
});

//Once submit has been hit
router.post('/post-Ongoing-tv-Comments/:id', function(req, res){
    
                        if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
        
    var AdminName = "Pw";
    console.log(AdminName);   


	TvCommentsSection.update({_id: req.params.id},
	                   {
                        AdminName : AdminName,
                        AdminComments : req.body.adminComments,
                        AdminDate : moment().format('MMMM Do YYYY'),
                        AdminTime : moment().format('LTS')
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{
                    console.log(docs);
				   res.redirect('/Comments/pickClient-Ongoing-tv-Comments');
				}
		 });
    }
    	 });


//Delete Clients

router.get('/deleteComments/:id', function(req, res){
    
                        if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
	TvCommentsSection.findByIdAndRemove({_id: req.params.id}, 
	   function(err){
		if(err) throw err;
		else res.redirect('/Comments/pickClient-Ongoing-tv-Comments');
	});
        
    }
    
});


//<!-------------------------------------------------------------------------------------------------Digital Comments ----------------------------------------------------------------------------------->//
//<!-------------------------------------------------------------------------------------------------Digital Comments ----------------------------------------------------------------------------------->//
//<!-------------------------------------------------------------------------------------------------Digital Comments ----------------------------------------------------------------------------------->//



router.get('/pickClient-Ongoing-digital-Comments', function(req,res){
    
                        if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    Clientuser.find({},function(err, docs){
        if(err) throw err;
        else res.render('pickClient-Ongoing-digital-Comments', {Clientuser : docs});
    });
        
        
    }
    
});



router.post('/view-Ongoing-digital-Comments', function(req,res){
    
                        if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var clientname = req.body.clientname;
    console.log(clientname);
    var brand = "Digital-Ads"
    console.log(brand);

    DigitalCommentsSection.find({username: clientname, brand: brand},function(err, docs){
        if(err) throw err; 
        else res.render('view-Ongoing-digital-Comments', {DigitalCommentsSection : docs});
    });
        
    }
    
    
});

//Once submit has been hit
router.post('/post-Ongoing-digital-Comments/:id', function(req, res){
    
                        if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var AdminName = "Pw";
    console.log(AdminName);   


	DigitalCommentsSection.update({_id: req.params.id},
	                   {
                        AdminName : AdminName,
                        AdminComments : req.body.adminComments,
                        AdminDate : moment().format('MMMM Do YYYY'),
                        AdminTime : moment().format('LTS')
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{
                    console.log(docs);
				   res.redirect('/Comments/pickClient-Ongoing-digital-Comments');
				}
		 });
    }
    	 });


//Delete Clients

router.get('/deleteComments/:id', function(req, res){
    
                        if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
	DigitalCommentsSection.findByIdAndRemove({_id: req.params.id}, 
	   function(err){
		if(err) throw err;
		else res.redirect('/Comments/pickClient-Ongoing-digital-Comments');
	});
        
    }
});


//<!-------------------------------------------------------------------------------------------------Miscellaneous Comments ----------------------------------------------------------------------------------->//
//<!-------------------------------------------------------------------------------------------------Miscellaneous Comments ----------------------------------------------------------------------------------->//
//<!-------------------------------------------------------------------------------------------------Miscellaneous Comments ----------------------------------------------------------------------------------->//



router.get('/pickClient-Ongoing-miscellaneous-Comments', function(req,res){
    
                        if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    Clientuser.find({},function(err, docs){
        if(err) throw err;
        else res.render('pickClient-Ongoing-miscellaneous-Comments', {Clientuser : docs});
    });
        
    }
});



router.post('/view-Ongoing-miscellaneous-Comments', function(req,res){
    
                        if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var clientname = req.body.clientname;
    console.log(clientname);
    var brand = "Miscellaneous"
    console.log(brand);

    MiscellaneousCommentsSection.find({username: clientname, brand: brand},function(err, docs){
        if(err) throw err; 
        else res.render('view-Ongoing-miscellaneous-Comments', {MiscellaneousCommentsSection : docs});
    });
        
    }
});

//Once submit has been hit
router.post('/post-Ongoing-miscellaneous-Comments/:id', function(req, res){
    
                        if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var AdminName = "Pw";
    console.log(AdminName);   


	MiscellaneousCommentsSection.update({_id: req.params.id},
	                   {
                        AdminName : AdminName,
                        AdminComments : req.body.adminComments,
                        AdminDate : moment().format('MMMM Do YYYY'),
                        AdminTime : moment().format('LTS')
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{
                    console.log(docs);
				   res.redirect('/Comments/pickClient-Ongoing-miscellaneous-Comments');
				}
		 });
    }
    	 });


//Delete Clients

router.get('/deleteComments/:id', function(req, res){
    
                        if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
	MiscellaneousCommentsSection.findByIdAndRemove({_id: req.params.id}, 
	   function(err){
		if(err) throw err;
		else res.redirect('/Comments/pickClient-Ongoing-miscellaneous-Comments');
	});
        
    }
});



//<!-------------------------------------------------------------------------------------------------Gif Comments ----------------------------------------------------------------------------------->//
//<!-------------------------------------------------------------------------------------------------Gif Comments ----------------------------------------------------------------------------------->//
//<!-------------------------------------------------------------------------------------------------Gif Comments ----------------------------------------------------------------------------------->//



router.get('/pickClient-Ongoing-gif-Comments', function(req,res){
    
                        if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    Clientuser.find({},function(err, docs){
        if(err) throw err;
        else res.render('pickClient-Ongoing-gif-Comments', {Clientuser : docs});
    });
        
        
    }
});



router.post('/view-Ongoing-gif-Comments', function(req,res){
    
                        if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var clientname = req.body.clientname;
    console.log(clientname);
    var brand = "Gif"
    console.log(brand);

    GifCommentsSection.find({username: clientname, brand: brand},function(err, docs){
        if(err) throw err; 
        else res.render('view-Ongoing-gif-Comments', {GifCommentsSection : docs});
    });
        
    }
});

//Once submit has been hit
router.post('/post-Ongoing-gif-Comments/:id', function(req, res){
    
                        if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var AdminName = "Pw";
    console.log(AdminName);   


	GifCommentsSection.update({_id: req.params.id},
	                   {
                        AdminName : AdminName,
                        AdminComments : req.body.adminComments,
                        AdminDate : moment().format('MMMM Do YYYY'),
                        AdminTime : moment().format('LTS')
			   }, function(err, docs){
			 	if(err) res.json(err);
				else
				{
                    console.log(docs);
				   res.redirect('/Comments/pickClient-Ongoing-gif-Comments');
				}
		 });
    }
    	 });


//Delete Clients

router.get('/deleteComments/:id', function(req, res){
    
                        if(!req.user){
            res.redirect('/');
}
    else
    {
        
	GifCommentsSection.findByIdAndRemove({_id: req.params.id}, 
	   function(err){
		if(err) throw err;
		else res.redirect('/Comments/pickClient-Ongoing-gif-Comments');
	});
        
    }
});











//<!-------------------------------------------------------------------------------------------------Scripts Comments ----------------------------------------------------------------------------------->//
//<!-------------------------------------------------------------------------------------------------Scripts Comments ----------------------------------------------------------------------------------->//
//<!-------------------------------------------------------------------------------------------------Scripts Comments ----------------------------------------------------------------------------------->//



router.get('/pickClient-Ongoing-scripts-Comments', function(req,res){
    
    if(!req.user){
res.redirect('/');
}
else
{


Clientuser.find({},function(err, docs){
if(err) throw err;
else res.render('pickClient-Ongoing-scripts-Comments', {Clientuser : docs});
});


}
});



router.post('/view-Ongoing-scripts-Comments', function(req,res){

    if(!req.user){
res.redirect('/');
}
else
{


var clientname = req.body.clientname;
console.log(clientname);
var brand = "Scripts"
console.log(brand);

ScriptsCommentsSection.find({username: clientname, brand: brand},function(err, docs){
if(err) throw err; 
else res.render('view-Ongoing-scripts-Comments', {ScriptsCommentsSection : docs});
});

}
});

//Once submit has been hit
router.post('/post-Ongoing-scripts-Comments/:id', function(req, res){

    if(!req.user){
res.redirect('/');
}
else
{


var AdminName = "Pw";
console.log(AdminName);   


ScriptsCommentsSection.update({_id: req.params.id},
   {
    AdminName : AdminName,
    AdminComments : req.body.adminComments,
    AdminDate : moment().format('MMMM Do YYYY'),
    AdminTime : moment().format('LTS')
}, function(err, docs){
if(err) res.json(err);
else
{
console.log(docs);
res.redirect('/Comments/pickClient-Ongoing-scripts-Comments');
}
});
}
});


//Delete Clients

router.get('/deleteComments/:id', function(req, res){

    if(!req.user){
res.redirect('/');
}
else
{

ScriptsCommentsSection.findByIdAndRemove({_id: req.params.id}, 
function(err){
if(err) throw err;
else res.redirect('/Comments/pickClient-Ongoing-scripts-Comments');
});

}
});



module.exports = router;