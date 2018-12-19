const express = require("express");
const router = express.Router();
var Clientuser = require('../models/clientuser');
var User = require('../models/user');
var moment = require('moment');
var path = require('path');
var fs = require('fs');
var multer  = require('multer');
var Twod = require('../models/twod');
var OngoingVoiceOver = require('../models/OngoingVoiceOver');
var OngoingThreeD = require('../models/OngoingThreeD');
var OngoingExplainer = require('../models/OngoingExplainer');
var OngoingPromotional = require('../models/OngoingPromotional');
var OngoingScribe = require('../models/OngoingScribe');
var OngoingGreeting = require('../models/OngoingGreeting');
                                                                            //< !------------ Branding------- !>
                                                                            //< !------------ Branding------- !>
                                                                            //< !------------ Branding------- !>
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


                                                                            //< !------------ Ads------- !>
                                                                            //< !------------ Ads------- !>
                                                                            //< !------------ Ads------- !>


var Newspaper = require('../models/newspaper');
var OngoingMagazine = require('../models/ongoingMagazine');
var OngoingTheatre = require('../models/OngoingTheatre');
var OngoingTv = require('../models/OngoingTv');
var OngoingDigital = require('../models/OngoingDigital');




                                                                            //< !------------ Miscellaneous------- !>
                                                                            //< !------------ Miscellaneous------- !>
                                                                            //< !------------ Miscellaneous------- !>


var Miscellaneous = require('../models/Miscellaneous');



                                                                            //< !------------ Gif------- !>
                                                                            //< !------------ Gif------- !>
                                                                            //< !------------ Gif------- !>


var Gif = require('../models/Gif');




                                                                            //< !------------ Scripts------- !>
                                                                            //< !------------ Scripts------- !>
                                                                            //< !------------ Scripts------- !>


var Scripts = require('../models/Scripts');

//< !------------------------------------------------------------------------------------------------------2D Videos--------------------------------------------------------------------------------------------- !>
//< !------------------------------------------------------------------------------------------------------2D Videos --------------------------------------------------------------------------------------------- !>
//< !------------------------------------------------------------------------------------------------------2D Videos --------------------------------------------------------------------------------------------- !>





//Pick Client

router.get('/pick-seperate-disable-2d-clients', function(req,res){
        if(!req.user){
            res.redirect('/');
}
    else
        {
    Clientuser.find({}, function(err, docs){
        if(err) throw err;
        else  res.render('pick-seperate-disable-2d-clients',{Clientuser : docs});
    });
        }
});

    
//Pick Client Post

router.post('/view-seperate-2d-disable-clients', function(req,res){
     
    if(!req.user){
            res.redirect('/');
}
    else
    {
         var person =  req.body.person;
             console.log(person);
    Twod.find({toWhom:person}, function(err, docs){
        if(err) throw err;
        else  res.render('view-seperate-2d-disable-clients',{Twod : docs});
    });
        
    }
});




//< !------------------------------------------------------------------------------------------------------3D Videos--------------------------------------------------------------------------------------------- !>
//< !------------------------------------------------------------------------------------------------------3D Videos --------------------------------------------------------------------------------------------- !>
//< !------------------------------------------------------------------------------------------------------3D Videos --------------------------------------------------------------------------------------------- !>


//Pick Client
router.get('/pick-seperate-3d-disable-clients', function(req,res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
    Clientuser.find({}, function(err, docs){
        if(err) throw err;
        else  res.render('pick-seperate-3d-disable-clients',{Clientuser : docs});
    });
        
    }
    
});

    
//Pick Client Post

router.post('/view-seperate-3d-disable-clients', function(req,res){
    
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
             var person =  req.body.person;
             console.log(person);
    OngoingThreeD.find({toWhom:person}, function(err, docs){
        if(err) throw err;
        else  res.render('view-seperate-3d-disable-clients',{ThreeD : docs});
    });
        
    }
});



//< !----------------------------------------------------------------------------------------------Explainer Videos--------------------------------------------------------------------------------------------- !>
//< !----------------------------------------------------------------------------------------------Explainer Videos --------------------------------------------------------------------------------------------- !>
//< !----------------------------------------------------------------------------------------------Explainer Videos --------------------------------------------------------------------------------------------- !>


//Pick Client
router.get('/pick-seperate-disable-explainer-clients', function(req,res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
    Clientuser.find({}, function(err, docs){
        if(err) throw err;
        else  res.render('pick-seperate-disable-explainer-clients',{Clientuser : docs});
    });
        
    }
    
});

    
//Pick Client Post

router.post('/view-seperate-disable-explainer-clients', function(req,res){
    
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
             var person =  req.body.person;
             console.log(person);
    OngoingExplainer.find({toWhom:person}, function(err, docs){
        if(err) throw err;
        else  res.render('view-seperate-disable-explainer-clients',{Explainer : docs});
    });
        
    }
});





//< !---------------------------------------------------------------------------------------------Disable Greeting--------------------------------------------------------------------------------------------- !>
//< !---------------------------------------------------------------------------------------------Disable Greeting--------------------------------------------------------------------------------------------- !>
//< !---------------------------------------------------------------------------------------------Disable Greeting--------------------------------------------------------------------------------------------- !>


//Pick Client

router.get('/pick-seperate-greeting-disable-clients', function(req,res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
    Clientuser.find({}, function(err, docs){
        if(err) throw err;
        else  res.render('pick-seperate-greeting-disable-clients',{Clientuser : docs});
    });
        
    }
});

    
//Pick Client Post

router.post('/view-seperate-greeting-disable-clients', function(req,res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
             var person =  req.body.person;
             console.log(person);
    OngoingGreeting.find({toWhom:person}, function(err, docs){
        if(err) throw err;
        else  res.render('view-seperate-greeting-disable-clients',{Greeting : docs});
    });
        
    }
    
});






//<!----------------------------------------------------------------------------------------------Promotional------------------------------------------------------------------------------->//
//<!----------------------------------------------------------------------------------------------Promotional------------------------------------------------------------------------------->//
//<!----------------------------------------------------------------------------------------------Promotional------------------------------------------------------------------------------->//




//Pick Client

router.get('/pick-seperate-disable-promotional-clients', function(req,res){
        if(!req.user){
            res.redirect('/');
}
    else
        {
    Clientuser.find({}, function(err, docs){
        if(err) throw err;
        else  res.render('pick-seperate-disable-promotional-clients',{Clientuser : docs});
    });
        }
});

    
//Pick Client Post

router.post('/view-seperate-promotional-disable-clients', function(req,res){
     
    if(!req.user){
            res.redirect('/');
}
    else
    {
         var person =  req.body.person;
             console.log(person);
    OngoingPromotional.find({toWhom:person}, function(err, docs){
        if(err) throw err;
        else  res.render('view-seperate-promotional-disable-clients',{Promotional : docs});
    });
        
    }
});




//<!----------------------------------------------------------------------------------------------Scribe------------------------------------------------------------------------------->//
//<!----------------------------------------------------------------------------------------------Scribe------------------------------------------------------------------------------->//
//<!----------------------------------------------------------------------------------------------Scribe------------------------------------------------------------------------------->//




//Pick Client

router.get('/pick-seperate-disable-scribe-clients', function(req,res){
        if(!req.user){
            res.redirect('/');
}
    else
        {
    Clientuser.find({}, function(err, docs){
        if(err) throw err;
        else  res.render('pick-seperate-disable-scribe-clients',{Clientuser : docs});
    });
        }
});

    
//Pick Client Post

router.post('/view-seperate-scribe-disable-clients', function(req,res){
     
    if(!req.user){
            res.redirect('/');
}
    else
    {
         var person =  req.body.person;
             console.log(person);
    OngoingScribe.find({toWhom:person}, function(err, docs){
        if(err) throw err;
        else  res.render('view-seperate-scribe-disable-clients',{Scribe : docs});
    });
        
    }
});



//< !------------------------------------------------------------------------------------------------------Voice Over--------------------------------------------------------------------------------------------- !>
//< !------------------------------------------------------------------------------------------------------Voice Over --------------------------------------------------------------------------------------------- !>
//< !------------------------------------------------------------------------------------------------------Voice Over --------------------------------------------------------------------------------------------- !>

//Pick Client

router.get('/pick-seperate-voice-disable-clients', function(req,res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
    Clientuser.find({}, function(err, docs){
        if(err) throw err;
        else  res.render('pick-seperate-voice-disable-clients',{Clientuser : docs});
    });
        
    }
});

    
//Pick Client Post

router.post('/view-seperate-voice-disable-clients', function(req,res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
             var person =  req.body.person;
             console.log(person);
    OngoingVoiceOver.find({toWhom:person}, function(err, docs){
        if(err) throw err;
        else  res.render('view-seperate-voice-disable-clients',{Voice : docs});
    });
        
    }
});








//< !----------------------------------------------------------------------------------------------------Logo Design--------------------------------------------------------------------------------------------- !>
//< !----------------------------------------------------------------------------------------------------Logo Design --------------------------------------------------------------------------------------------- !>
//< !----------------------------------------------------------------------------------------------------Logo Design --------------------------------------------------------------------------------------------- !>

//Pick Client

router.get('/pick-seperate-disable-logo-clients', function(req,res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
    Clientuser.find({}, function(err, docs){
        if(err) throw err;
        else  res.render('pick-seperate-disable-logo-clients',{Clientuser : docs});
    });
        
    }
});

    
//Pick Client Post

router.post('/view-seperate-disable-logo-clients', function(req,res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
             var person =  req.body.person;
             console.log(person);
    Logo.find({toWhom:person}, function(err, docs){
        if(err) throw err;
        else  res.render('view-seperate-disable-logo-clients',{Logo : docs});
    });
        
    }
});









//< !---------------------------------------------------------------------------------------------Stationery Design--------------------------------------------------------------------------------------------- !>
//< !---------------------------------------------------------------------------------------------Stationery Design --------------------------------------------------------------------------------------------- !>
//< !---------------------------------------------------------------------------------------------Stationery Design --------------------------------------------------------------------------------------------- !>

//Pick Client

router.get('/pick-seperate-disable-stationery-clients', function(req,res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
    Clientuser.find({}, function(err, docs){
        if(err) throw err;
        else  res.render('pick-seperate-disable-stationery-clients',{Clientuser : docs});
    });
        
    }
});

    
//Pick Client Post

router.post('/view-seperate-disable-stationery-clients', function(req,res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
             var person =  req.body.person;
             console.log(person);
    OngoingStationery.find({toWhom:person}, function(err, docs){
        if(err) throw err;
        else  res.render('view-seperate-disable-stationery-clients',{Stationery : docs});
    });
        
    }
});









//< !---------------------------------------------------------------------------------------------Brochure Design--------------------------------------------------------------------------------------------- !>
//< !---------------------------------------------------------------------------------------------Brochure Design --------------------------------------------------------------------------------------------- !>
//< !---------------------------------------------------------------------------------------------Brochure Design --------------------------------------------------------------------------------------------- !>

//Pick Client

router.get('/pick-seperate-disable-brochure-clients', function(req,res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
    Clientuser.find({}, function(err, docs){
        if(err) throw err;
        else  res.render('pick-seperate-disable-brochure-clients',{Clientuser : docs});
    });
        
    }
});

    
//Pick Client Post

router.post('/view-seperate-disable-brochure-clients', function(req,res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
             var person =  req.body.person;
             console.log(person);
    OngoingBrochure.find({toWhom:person}, function(err, docs){
        if(err) throw err;
        else  res.render('view-seperate-disable-brochure-clients',{Brochure : docs});
    });
        
    }
});









//< !---------------------------------------------------------------------------------------------Menu Design--------------------------------------------------------------------------------------------- !>
//< !---------------------------------------------------------------------------------------------Menu Design --------------------------------------------------------------------------------------------- !>
//< !---------------------------------------------------------------------------------------------Menu Design --------------------------------------------------------------------------------------------- !>

//Pick Client

router.get('/pick-seperate-disable-menu-clients', function(req,res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
    Clientuser.find({}, function(err, docs){
        if(err) throw err;
        else  res.render('pick-seperate-disable-menu-clients',{Clientuser : docs});
    });
        
    }
});

    
//Pick Client Post

router.post('/view-seperate-disable-menu-clients', function(req,res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
             var person =  req.body.person;
             console.log(person);
    OngoingMenu.find({toWhom:person}, function(err, docs){
        if(err) throw err;
        else  res.render('view-seperate-disable-menu-clients',{Menu : docs});
    });
        
    }
});






//< !---------------------------------------------------------------------------------------------Landing Design--------------------------------------------------------------------------------------------- !>
//< !---------------------------------------------------------------------------------------------Landing Design --------------------------------------------------------------------------------------------- !>
//< !---------------------------------------------------------------------------------------------Landing Design --------------------------------------------------------------------------------------------- !>

//Pick Client

router.get('/pick-seperate-disable-landing-clients', function(req,res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
    Clientuser.find({}, function(err, docs){
        if(err) throw err;
        else  res.render('pick-seperate-disable-landing-clients',{Clientuser : docs});
    });
        
    }
});

    
//Pick Client Post

router.post('/view-seperate-disable-landing-clients', function(req,res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
             var person =  req.body.person;
             console.log(person);
    OngoingLanding.find({toWhom:person}, function(err, docs){
        if(err) throw err;
        else  res.render('view-seperate-disable-landing-clients',{Landing : docs});
    });
        
    }
});





//< !---------------------------------------------------------------------------------------------Package Design--------------------------------------------------------------------------------------------- !>
//< !---------------------------------------------------------------------------------------------Package Design --------------------------------------------------------------------------------------------- !>
//< !---------------------------------------------------------------------------------------------Package Design --------------------------------------------------------------------------------------------- !>

//Pick Client

router.get('/pick-seperate-disable-package-clients', function(req,res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
    Clientuser.find({}, function(err, docs){
        if(err) throw err;
        else  res.render('pick-seperate-disable-package-clients',{Clientuser : docs});
    });
        
    }
});

    
//Pick Client Post

router.post('/view-seperate-disable-package-clients', function(req,res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
             var person =  req.body.person;
             console.log(person);
    OngoingPackage.find({toWhom:person}, function(err, docs){
        if(err) throw err;
        else  res.render('view-seperate-disable-package-clients',{Package : docs});
    });
        
    }
});







//< !---------------------------------------------------------------------------------------------Banner Design--------------------------------------------------------------------------------------------- !>
//< !---------------------------------------------------------------------------------------------Banner Design --------------------------------------------------------------------------------------------- !>
//< !---------------------------------------------------------------------------------------------Banner Design --------------------------------------------------------------------------------------------- !>

//Pick Client

router.get('/pick-seperate-disable-banner-clients', function(req,res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
    Clientuser.find({}, function(err, docs){
        if(err) throw err;
        else  res.render('pick-seperate-disable-banner-clients',{Clientuser : docs});
    });
        
    }
});

    
//Pick Client Post

router.post('/view-seperate-disable-banner-clients', function(req,res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
             var person =  req.body.person;
             console.log(person);
    OngoingBanner.find({toWhom:person}, function(err, docs){
        if(err) throw err;
        else  res.render('view-seperate-disable-banner-clients',{Banner : docs});
    });
        
    }
});









//< !---------------------------------------------------------------------------------------------T-shirt Design--------------------------------------------------------------------------------------------- !>
//< !---------------------------------------------------------------------------------------------T-shirt Design --------------------------------------------------------------------------------------------- !>
//< !---------------------------------------------------------------------------------------------T-shirt Design --------------------------------------------------------------------------------------------- !>

//Pick Client

router.get('/pick-seperate-disable-shirt-clients', function(req,res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
    Clientuser.find({}, function(err, docs){
        if(err) throw err;
        else  res.render('pick-seperate-disable-shirt-clients',{Clientuser : docs});
    });
        
    }
});

    
//Pick Client Post

router.post('/view-seperate-disable-shirt-clients', function(req,res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
             var person =  req.body.person;
             console.log(person);
    OngoingShirt.find({toWhom:person}, function(err, docs){
        if(err) throw err;
        else  res.render('view-seperate-disable-shirt-clients',{Shirt : docs});
    });
        
    }
});







//< !---------------------------------------------------------------------------------------------In-Shop Design--------------------------------------------------------------------------------------------- !>
//< !---------------------------------------------------------------------------------------------In-Shop Design --------------------------------------------------------------------------------------------- !>
//< !---------------------------------------------------------------------------------------------In-Shop Design --------------------------------------------------------------------------------------------- !>

//Pick Client

router.get('/pick-seperate-disable-shop-clients', function(req,res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
    Clientuser.find({}, function(err, docs){
        if(err) throw err;
        else  res.render('pick-seperate-disable-shop-clients',{Clientuser : docs});
    });
        
    }
});

    
//Pick Client Post

router.post('/view-seperate-disable-shop-clients', function(req,res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
             var person =  req.body.person;
             console.log(person);
    OngoingShop.find({toWhom:person}, function(err, docs){
        if(err) throw err;
        else  res.render('view-seperate-disable-shop-clients',{Shop : docs});
    });
        
    }
});




//< !---------------------------------------------------------------------------------------------Hoarding Design--------------------------------------------------------------------------------------------- !>
//< !---------------------------------------------------------------------------------------------Hoarding Design --------------------------------------------------------------------------------------------- !>
//< !---------------------------------------------------------------------------------------------Hoarding Design --------------------------------------------------------------------------------------------- !>

//Pick Client

router.get('/pick-seperate-disable-hoarding-clients', function(req,res){
        
    if(!req.user){
        res.redirect('/');
}
else
{
    
Clientuser.find({}, function(err, docs){
    if(err) throw err;
    else  res.render('pick-seperate-disable-hoarding-clients',{Clientuser : docs});
});
    
}
});


//Pick Client Post

router.post('/view-seperate-disable-hoarding-clients', function(req,res){
    
    if(!req.user){
        res.redirect('/');
}
else
{
    
         var person =  req.body.person;
         console.log(person);
OngoingHoarding.find({toWhom:person}, function(err, docs){
    if(err) throw err;
    else  res.render('view-seperate-disable-hoarding-clients',{Shop : docs});
});
    
}
});






//< !---------------------------------------------------------------------------------------------Newspaper Ads--------------------------------------------------------------------------------------------- !>
//< !---------------------------------------------------------------------------------------------Newspaper Ads --------------------------------------------------------------------------------------------- !>
//< !---------------------------------------------------------------------------------------------Newspaper Ads --------------------------------------------------------------------------------------------- !>

//Pick Client

router.get('/pick-seperate-disable-newspaper-clients', function(req,res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
    Clientuser.find({}, function(err, docs){
        if(err) throw err;
        else  res.render('pick-seperate-disable-newspaper-clients',{Clientuser : docs});
    });
        
    }
});

    
//Pick Client Post

router.post('/view-seperate-disable-newspaper-clients', function(req,res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
             var person =  req.body.person;
             console.log(person);
    Newspaper.find({toWhom:person}, function(err, docs){
        if(err) throw err;
        else  res.render('view-seperate-disable-newspaper-clients',{Newspaper : docs});
    });
        
    }
});





//< !---------------------------------------------------------------------------------------------Magazine Ads--------------------------------------------------------------------------------------------- !>
//< !---------------------------------------------------------------------------------------------Magazine Ads --------------------------------------------------------------------------------------------- !>
//< !---------------------------------------------------------------------------------------------Magazine Ads --------------------------------------------------------------------------------------------- !>

//Pick Client

router.get('/pick-seperate-disable-magazine-clients', function(req,res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
    Clientuser.find({}, function(err, docs){
        if(err) throw err;
        else  res.render('pick-seperate-disable-magazine-clients',{Clientuser : docs});
    });
        
    }
});

    
//Pick Client Post

router.post('/view-seperate-disable-magazine-clients', function(req,res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
             var person =  req.body.person;
             console.log(person);
    OngoingMagazine.find({toWhom:person}, function(err, docs){
        if(err) throw err;
        else  res.render('view-seperate-disable-magazine-clients',{Magazine : docs});
    });
        
    }
});







//< !---------------------------------------------------------------------------------------------Theatre Ads--------------------------------------------------------------------------------------------- !>
//< !---------------------------------------------------------------------------------------------Theatre Ads --------------------------------------------------------------------------------------------- !>
//< !---------------------------------------------------------------------------------------------Theatre Ads --------------------------------------------------------------------------------------------- !>

//Pick Client

router.get('/pick-seperate-disable-theatre-clients', function(req,res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
    Clientuser.find({}, function(err, docs){
        if(err) throw err;
        else  res.render('pick-seperate-disable-theatre-clients',{Clientuser : docs});
    });
        
    }
});

    
//Pick Client Post

router.post('/view-seperate-disable-theatre-clients', function(req,res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
             var person =  req.body.person;
             console.log(person);
    OngoingTheatre.find({toWhom:person}, function(err, docs){
        if(err) throw err;
        else  res.render('view-seperate-disable-theatre-clients',{Theatre : docs});
    });
        
    }
});






//< !---------------------------------------------------------------------------------------------Tv Ads--------------------------------------------------------------------------------------------- !>
//< !---------------------------------------------------------------------------------------------Tv Ads --------------------------------------------------------------------------------------------- !>
//< !---------------------------------------------------------------------------------------------Tv Ads --------------------------------------------------------------------------------------------- !>

//Pick Client

router.get('/pick-seperate-disable-tv-clients', function(req,res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
    Clientuser.find({}, function(err, docs){
        if(err) throw err;
        else  res.render('pick-seperate-disable-tv-clients',{Clientuser : docs});
    });
        
    }
});

    
//Pick Client Post

router.post('/view-seperate-disable-tv-clients', function(req,res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
             var person =  req.body.person;
             console.log(person);
    OngoingTv.find({toWhom:person}, function(err, docs){
        if(err) throw err;
        else  res.render('view-seperate-disable-tv-clients',{Tv : docs});
    });
        
    }
});




//< !---------------------------------------------------------------------------------------------Digital Ads--------------------------------------------------------------------------------------------- !>
//< !---------------------------------------------------------------------------------------------Digital Ads --------------------------------------------------------------------------------------------- !>
//< !---------------------------------------------------------------------------------------------Digital Ads --------------------------------------------------------------------------------------------- !>

//Pick Client

router.get('/pick-seperate-disable-digital-clients', function(req,res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
    Clientuser.find({}, function(err, docs){
        if(err) throw err;
        else  res.render('pick-seperate-disable-digital-clients',{Clientuser : docs});
    });
        
    }
});

    
//Pick Client Post

router.post('/view-seperate-disable-digital-clients', function(req,res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
             var person =  req.body.person;
             console.log(person);
    OngoingDigital.find({toWhom:person}, function(err, docs){
        if(err) throw err;
        else  res.render('view-seperate-disable-digital-clients',{Digital : docs});
    });
        
    }
});






//< !---------------------------------------------------------------------------------------------Miscellaneous--------------------------------------------------------------------------------------------- !>
//< !---------------------------------------------------------------------------------------------Miscellaneous--------------------------------------------------------------------------------------------- !>
//< !---------------------------------------------------------------------------------------------Miscellaneous--------------------------------------------------------------------------------------------- !>

//Pick Client

router.get('/pick-seperate-disable-miscellaneous-clients', function(req,res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
    Clientuser.find({}, function(err, docs){
        if(err) throw err;
        else  res.render('pick-seperate-disable-miscellaneous-clients',{Clientuser : docs});
    });
        
    }
});

    
//Pick Client Post

router.post('/view-seperate-disable-miscellaneous-clients', function(req,res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
             var person =  req.body.person;
             console.log(person);
    Miscellaneous.find({toWhom:person}, function(err, docs){
        if(err) throw err;
        else  res.render('view-seperate-disable-miscellaneous-clients',{Miscellaneous : docs});
    });
        
    }
});





//< !---------------------------------------------------------------------------------------------Scripts--------------------------------------------------------------------------------------------- !>
//< !---------------------------------------------------------------------------------------------Scripts--------------------------------------------------------------------------------------------- !>
//< !---------------------------------------------------------------------------------------------Scripts--------------------------------------------------------------------------------------------- !>

//Pick Client

router.get('/pick-seperate-disable-scripts-clients', function(req,res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
    Clientuser.find({}, function(err, docs){
        if(err) throw err;
        else  res.render('pick-seperate-disable-scripts-clients',{Clientuser : docs});
    });
        
    }
});

    
//Pick Client Post

router.post('/view-seperate-disable-scripts-clients', function(req,res){
        
        if(!req.user){
            res.redirect('/');
}
    else
    {
        
             var person =  req.body.person;
             console.log(person);
    Scripts.find({toWhom:person}, function(err, docs){
        if(err) throw err;
        else  res.render('view-seperate-disable-scripts-clients',{Scripts : docs});
    });
        
    }
});





        //< !---------------------------------------------------------------------------------------------Gif--------------------------------------------------------------------------------------------- !>
        //< !---------------------------------------------------------------------------------------------Gif--------------------------------------------------------------------------------------------- !>
        //< !---------------------------------------------------------------------------------------------Gif--------------------------------------------------------------------------------------------- !>

//Pick Client

router.get('/pick-seperate-disable-gif-clients', function(req,res){
        
    if(!req.user){
        res.redirect('/');
}
else
{
    
Clientuser.find({}, function(err, docs){
    if(err) throw err;
    else  res.render('pick-seperate-disable-gif-clients',{Clientuser : docs});
});
    
}
});


//Pick Client Post

router.post('/view-seperate-disable-gif-clients', function(req,res){
    
    if(!req.user){
        res.redirect('/');
}
else
{
    
         var person =  req.body.person;
         console.log(person);
         Gif.find({toWhom:person}, function(err, docs){
    if(err) throw err;
    else  res.render('view-seperate-disable-gif-clients',{Gif : docs});
});
    
}
});







module.exports =router;