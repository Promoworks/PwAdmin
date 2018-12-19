const express = require("express");
const router = express.Router();
const passport = require('passport');
var moment = require('moment');

const msg91 = require("msg91")("217817A7GCYaZrZEq5b0fc359", "PWORKS", "4" );

const LocalStrategy = require('passport-local').Strategy;

var Clientuser = require('../models/clientuser');
var User = require('../models/user');
var CommentsSection = require('../models/CommentsSection');


    //< !---------------------------------------------------------------------------------------------------Ads Model--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Ads Model--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Ads Model--------------------------------------------------------------------------------------------- !>

var Newspaper = require('../models/newspaper');
var OngoingMagazine = require('../models/ongoingMagazine');
var OngoingTheatre = require('../models/OngoingTheatre');
var OngoingTv = require('../models/OngoingTv');
var OngoingDigital = require('../models/OngoingDigital');



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







    //< !---------------------------------------------------------------------------------------------------Gif--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Gif--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Gif--------------------------------------------------------------------------------------------- !>

    var Gif = require('../models/Gif');





    //< !---------------------------------------------------------------------------------------------------Miscellaneous--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Miscellaneous--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Miscellaneous--------------------------------------------------------------------------------------------- !>

var Miscellaneous = require('../models/Miscellaneous');








    //< !---------------------------------------------------------------------------------------------------Scripts--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Scripts--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Scripts--------------------------------------------------------------------------------------------- !>

var Scripts = require('../models/Scripts');




    //< !---------------------------------------------------------------------------------------------------Newsaper Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Newsaper Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Newsaper Ongoing--------------------------------------------------------------------------------------------- !>

router.get('/workHistory', function(req,res){
        
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    res.render('workHistory');
        
    }
});




router.get('/ongoingNews-History/:id/:username', function(req, res){
    
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
        
    var session = req.params.username;
    var id = req.params.id;

    console.log(id);
    console.log(session);
          

    Newspaper.find({ toWhom: session}, function(err, docs){
        if(err) throw err;
        else  res.render('ongoingNews-History',{Newspaper : docs});
    });
      
    }

});






    //< !---------------------------------------------------------------------------------------------------Magazine Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Magazine Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Magazine Ongoing--------------------------------------------------------------------------------------------- !>



router.get('/ongoingMagazine-History/:id/:username', function(req, res){
    
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
          

    OngoingMagazine.find({ toWhom: session}, function(err, docs){
        if(err) throw err;
        else  res.render('ongoingMagazine-History',{OngoingMagazine : docs});
    });
      
    }

});



    //< !---------------------------------------------------------------------------------------------------Theatre Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Theatre Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Theatre Ongoing--------------------------------------------------------------------------------------------- !>



router.get('/OngoingTheatre-History/:id/:username', function(req, res){
    
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
          

    OngoingTheatre.find({ toWhom: session}, function(err, docs){
        if(err) throw err;
        else  res.render('OngoingTheatre-History',{OngoingTheatre : docs});
    });
      
    }
});




    //< !---------------------------------------------------------------------------------------------------Tv Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Tv Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Tv Ongoing--------------------------------------------------------------------------------------------- !>



router.get('/OngoingTv-History/:id/:username', function(req, res){
    
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
          

    OngoingTv.find({ toWhom: session}, function(err, docs){
        if(err) throw err;
        else  res.render('OngoingTv-History',{OngoingTv : docs});
    });
      
    }

});







    //< !---------------------------------------------------------------------------------------------------Digital Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Digital Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Digital Ongoing--------------------------------------------------------------------------------------------- !>



router.get('/OngoingDigital-History/:id/:username', function(req, res){
    
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
          

    OngoingDigital.find({ toWhom: session}, function(err, docs){
        if(err) throw err;
        else  res.render('OngoingDigital-History',{OngoingDigital : docs});
    });
      
    }
});



    //< !---------------------------------------------------------------------------------------------------Videos Section--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Videos Section--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Videos Section--------------------------------------------------------------------------------------------- !>







    //< !---------------------------------------------------------------------------------------------------2d Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------2d Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------2d Ongoing--------------------------------------------------------------------------------------------- !>


router.get('/view-Ongoing-2d-History/:id/:username', function(req,res){
    
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
    var session = req.params.username;
        Twod.find({toWhom: session}, function(err, docs){
        if(err) throw err;
        else  res.render('view-Ongoing-2d-History',{Twod : docs});
    });
        
        
    }
});





    //< !---------------------------------------------------------------------------------------------------3d Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------3d Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------3d Ongoing--------------------------------------------------------------------------------------------- !>



router.get('/OngoingThreeD-History/:id/:username', function(req, res){
    
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
          

    OngoingThreeD.find({ toWhom: session}, function(err, docs){
        if(err) throw err;
        else  res.render('OngoingThreeD-History',{OngoingThreeD : docs});
    });
        
    }
      

});




    //< !---------------------------------------------------------------------------------------------------Explainer Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Explainer Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Explainer Ongoing--------------------------------------------------------------------------------------------- !>



router.get('/OngoingExplainer-History/:id/:username', function(req, res){
    
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
          

    OngoingExplainer.find({ toWhom: session}, function(err, docs){
        if(err) throw err;
        else  res.render('OngoingExplainer-History',{OngoingExplainer : docs});
    });
      
    }

});





    //< !---------------------------------------------------------------------------------------------------Greeting Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Greeting Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Greeting Ongoing--------------------------------------------------------------------------------------------- !>



router.get('/OngoingGreeting-History/:id/:username', function(req, res){
    
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
          

    OngoingGreeting.find({ toWhom: session}, function(err, docs){
        if(err) throw err;
        else  res.render('OngoingGreeting-History',{OngoingGreeting : docs});
    });
      
    }

});



    //< !---------------------------------------------------------------------------------------------------Promotional Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Promotional Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Promotional Ongoing--------------------------------------------------------------------------------------------- !>



router.get('/OngoingPromotional-History/:id/:username', function(req, res){
    
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
          

    OngoingPromotional.find({ toWhom: session}, function(err, docs){
        if(err) throw err;
        else  res.render('OngoingPromotional-History',{OngoingPromotional : docs});
    });
      
    }

});



    //< !---------------------------------------------------------------------------------------------------Scribe Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Scribe Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Scribe Ongoing--------------------------------------------------------------------------------------------- !>



router.get('/OngoingScribe-History/:id/:username', function(req, res){
    
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
          

    OngoingScribe.find({ toWhom: session}, function(err, docs){
        if(err) throw err;
        else  res.render('OngoingScribe-History',{OngoingScribe : docs});
    });
      
    }

});




    //< !---------------------------------------------------------------------------------------------------Voice Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Voice Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Voice Ongoing--------------------------------------------------------------------------------------------- !>



router.get('/OngoingVoiceOver-History/:id/:username', function(req, res){
    
    
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
          

    OngoingVoiceOver.find({ toWhom: session}, function(err, docs){
        if(err) throw err;
        else  res.render('OngoingVoiceOver-History',{OngoingVoiceOver : docs});
    });
      
    }

});




    //< !---------------------------------------------------------------------------------------------------Branding History-------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Branding History--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Branding History--------------------------------------------------------------------------------------------- !>






    //< !---------------------------------------------------------------------------------------------------Logo Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Logo Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Logo Ongoing--------------------------------------------------------------------------------------------- !>







router.get('/OngoingLogo-History/:id/:username', function(req, res){
    
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
          

    Logo.find({ toWhom: session}, function(err, docs){
        if(err) throw err;
        else  res.render('OngoingLogo-History',{Logo : docs});
    }).sort({logo_time: -1});
      
    }
});



    //< !---------------------------------------------------------------------------------------Stationery Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------Stationery Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------Stationery Ongoing--------------------------------------------------------------------------------------------- !>



router.get('/OngoingStationery-History/:id/:username', function(req, res){
    
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
          

    OngoingStationery.find({ toWhom: session}, function(err, docs){
        if(err) throw err;
        else  res.render('OngoingStationery-History',{OngoingStationery : docs});
    }).sort({stationery_time: -1});
     
    }

});







    //< !---------------------------------------------------------------------------------------------------Brochure Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Brochure Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Brochure Ongoing--------------------------------------------------------------------------------------------- !>



router.get('/OngoingBrochure-History/:id/:username', function(req, res){
    
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
          

    OngoingBrochure.find({ toWhom: session}, function(err, docs){
        if(err) throw err;
        else  res.render('OngoingBrochure-History',{OngoingBrochure : docs});
    });
        
    }
      

});







    //< !---------------------------------------------------------------------------------------------------Menu Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Menu Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Menu Ongoing--------------------------------------------------------------------------------------------- !>



router.get('/OngoingMenu-History/:id/:username', function(req, res){
    
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
          

    OngoingMenu.find({ toWhom: session}, function(err, docs){
        if(err) throw err;
        else  res.render('OngoingMenu-History',{OngoingMenu : docs});
    });
      
    }

});





    //< !---------------------------------------------------------------------------------------------------Landing Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Landing Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Landing Ongoing--------------------------------------------------------------------------------------------- !>



router.get('/OngoingLanding-History/:id/:username', function(req, res){
    
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
          

    OngoingLanding.find({ toWhom: session}, function(err, docs){
        if(err) throw err;
        else  res.render('OngoingLanding-History',{OngoingLanding : docs});
    });
      
        
    }

});






    //< !---------------------------------------------------------------------------------------------------Package Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Package Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Package Ongoing--------------------------------------------------------------------------------------------- !>



router.get('/OngoingPackage-History/:id/:username', function(req, res){
    
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
          

    OngoingPackage.find({ toWhom: session}, function(err, docs){
        if(err) throw err;
        else  res.render('OngoingPackage-History',{OngoingPackage : docs});
    });
      

    }
});







    //< !---------------------------------------------------------------------------------------------------Banner Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Banner Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Banner Ongoing--------------------------------------------------------------------------------------------- !>



router.get('/OngoingBanner-History/:id/:username', function(req, res){
    
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
          

    OngoingBanner.find({ toWhom: session}, function(err, docs){
        if(err) throw err;
        else  res.render('OngoingBanner-History',{OngoingBanner : docs});
    });
        
    }
      

});



    //< !---------------------------------------------------------------------------------------------------Shirt Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Shirt Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Shirt Ongoing--------------------------------------------------------------------------------------------- !>



router.get('/OngoingShirt-History/:id/:username', function(req, res){
    
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
          

    OngoingShirt.find({ toWhom: session}, function(err, docs){
        if(err) throw err;
        else  res.render('OngoingShirt-History',{OngoingShirt : docs});
    });
      
        
    }

});





    //< !---------------------------------------------------------------------------------------------------In-shop Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------In-shop Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------In-shop Ongoing--------------------------------------------------------------------------------------------- !>



router.get('/OngoingShop-History/:id/:username', function(req, res){
    
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
          

    OngoingShop.find({ toWhom: session}, function(err, docs){
        if(err) throw err;
        else  res.render('OngoingShop-History',{OngoingShop : docs});
    });
        
    }
});




    //< !---------------------------------------------------------------------------------------------------Hoarding Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Hoarding Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Hoarding Ongoing--------------------------------------------------------------------------------------------- !>



    router.get('/OngoingHoarding-History/:id/:username', function(req, res){
    
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


OngoingHoarding.find({ toWhom: session}, function(err, docs){
if(err) throw err;
else  res.render('OngoingHoarding-History',{OngoingHoarding : docs});
});

}
});





    //< !--------------------------------------------------------------------------------------------Scripts Ongoing--------------------------------------------------------------------------------------------- !>
    //< !--------------------------------------------------------------------------------------------Scripts Ongoing--------------------------------------------------------------------------------------------- !>
    //< !--------------------------------------------------------------------------------------------Scripts Ongoing--------------------------------------------------------------------------------------------- !>



router.get('/ongoingScripts-History/:id/:username', function(req, res){
    
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
          

    Scripts.find({ toWhom: session}, function(err, docs){
        if(err) throw err;
        else  res.render('ongoingScripts-History',{Scripts : docs});
    });
        
    }
    
});




    //< !---------------------------------------------------------------------------------------------------Gif Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Gif Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------------------------Gif Ongoing--------------------------------------------------------------------------------------------- !>



    router.get('/OngoingGif-History/:id/:username', function(req, res){
    
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


Gif.find({ toWhom: session}, function(err, docs){
if(err) throw err;
else  res.render('OngoingGif-History',{Gif : docs});
});

}
});





    //< !---------------------------------------------------------------------------------Miscellaneous Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------Miscellaneous Ongoing--------------------------------------------------------------------------------------------- !>
    //< !---------------------------------------------------------------------------------Miscellaneous Ongoing--------------------------------------------------------------------------------------------- !>



router.get('/OngoingMiscellaneous-History/:id/:username', function(req, res){
    
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
          

    Miscellaneous.find({ toWhom: session}, function(err, docs){
        if(err) throw err;
        else  res.render('OngoingMiscellaneous-History',{Miscellaneous : docs});
    });
        
    }
});

module.exports = router;