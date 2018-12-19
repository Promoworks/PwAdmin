const express = require("express");
const router = express.Router();
var Clientuser = require('../models/clientuser');
var User = require('../models/user');
var moment = require('moment');
var path = require('path');
var msg91 = require("msg91")("217817A7GCYaZrZEq5b0fc359", "PWORKS", "4" );
var fs = require('fs');
var multer  = require('multer');
var Gif = require('../models/Gif');
var CommentsSection = require('../models/CommentsSection');


    //< !--------------------------------------------------------------------------------------------Gif--------------------------------------------------------------------------------------------- !>
    //< !--------------------------------------------------------------------------------------------Gif--------------------------------------------------------------------------------------------- !>
    //< !--------------------------------------------------------------------------------------------Gif--------------------------------------------------------------------------------------------- !>



//Pick Client

router.get('/pick-seperate-gif-clients', function(req,res){
    
            
    if(!req.user){
        res.redirect('/');
}
else
{
    
Clientuser.find({}, function(err, docs){
    if(err) throw err;
    else  res.render('pick-seperate-gif-clients',{Clientuser : docs});
});
    
}

});



//Pick Client Post

router.post('/view-seperate-gif-clients', function(req,res){

        
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
    
    
Gif.find({toWhom:person}).sort({gif_date: -1, gif_time: -1}).exec(function(err, docs){
    if(err) throw err;
    else  res.render('view-seperate-gif-clients',{Gif : docs});
    
    });
    
    
    
    
}
});




//View Gif

router.get('/view-Ongoing-gif', function(req,res){

        
    if(!req.user){
        res.redirect('/');
}
else
{
    

//    Logo.find({}, function(err, docs){
//        if(err) throw err;
//        else  res.render('view-Ongoing-logo',{Logo : docs});
//    }).sort({logo_time: -1});
    
   
    
            
Gif.find({}).sort({gif_date: -1, gif_time: -1}).exec(function(err, docs){
    if(err) throw err;
    else  res.render('view-Ongoing-gif',{Gif : docs});
    
    });
    
    
    
    
}
});





//Once submit has been hit
router.post('/Gif/:id', function(req, res){

        
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
                    owner : req.body.owner,
                    toWhom : req.body.toWhom
           }, function(err){
             if(err) res.json(err);
            else
            {
               res.redirect('/Gif/view-Ongoing-gif');
            }
     });
    
}

     });





//Delete Gif

router.post('/Gif/', function(req, res){

        
    if(!req.user){
        res.redirect('/');
}
else
{
    var path = req.body.path;
    Gif.findByIdAndRemove({_id: path},
   function(err){
    if(err) throw err;
    else    res.redirect('/Gif/view-Ongoing-gif');
});
    
}
});



//Upload Gif

router.get('/upload-Ongoing-gif', function(req,res){

        
    if(!req.user){
        res.redirect('/');
}
else
{
    
Clientuser.find({}, function(err, docs){
    var time = moment().format('LTS');
    if(err) throw err;
    else  res.render('upload-Ongoing-gif',{Clientuser : docs});
});
    
    
}
});








//Init Upload Gif Page
var Gifstorage = multer.diskStorage({
 destination: './pwClient/vendor/upload/Ongoing/Gif',
filename : function(req, file, cb)
{
//        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
    cb(null, file.originalname);

    
}
});

var gif_upload = multer({ storage : Gifstorage }).array('file',25);


router.post('/upload-Ongoing-gif',function(req,res,next){

    
    if(!req.user){
        res.redirect('/');
}

    else{
    
    
       gif_upload(req, res, (err) => {
    console.log(req.files);


   for (var i = 0; i < req.files.length; i++)
       {
        var GifFileName = req.files[i].filename;
        var removeGif = req.files[i].path;
         var removefinalGif =   removeGif.substr(15);
           
           
     
    
                let body = '';
        var gif = req.body.gif;
        var toWhom = req.body.toWhom;
        var owner = "Promoworks";
        var logo_final_path = req.files;


            var newGif = new Gif({

                gif_final_path: removefinalGif,
                gif_file_name: GifFileName,
                gif_date: moment().format('MMMM Do YYYY'),
                gif_time: moment().format('LTS'),
                gif: gif,
                owner: owner,
                toWhom: toWhom,
                Enable : "Enable",
                Ongoing : "Ongoing",
                Completed : "",
                Seen : "",
                Downloaded : ""

            });
           
            console.log(newGif);
            Gif.createGif(newGif, function (err, gif) {
                if (err) throw err;

            });
                      }

        var msg = "Work has been uploaded \r";
        var msg2 = "URL : http://works.promo.works \r";
        var msg3 = "Sitemap : username -> password -> menu -> work-in-progress -> Gif";
        var send = msg + msg2 + msg3;
                    var message = send;
                    Clientuser.findOne({ username: toWhom }, function(err, user) {
                     var mobile = user.mobile;
                msg91.send(mobile, message, function(err, response){
                console.log(err);
                console.log(response); 
                    
               res.redirect('/Gif/view-Ongoing-gif');
                    });
                 });
    
  
                    

    
//        res.end("File is uploaded");

});
        
       
  }
});

















//Gif-Upload Page
router.post('/Gif', (req, res, next) => {

        
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
        Gif.update({_id: req.body.yd},
                   {
                    Enable : "",
                    Disable : "Disable"
           }, function(err){
             if(err) res.json(err);
            else
            {
                
                console.log(Gif);
                
                
               res.redirect('/Gif/view-Ongoing-gif');
            }
     });
        
    }
  if(req.body.enable == "Enable")
    {
      
        Gif.update({_id: req.body.yd},
                   {
                    Enable : "Enable",
                    Disable : ""
           }, function(err){
             if(err) res.json(err);
            else
            {
               res.redirect('/Gif/view-Ongoing-gif');
            }
     });
        
    }

}

});


//Move Gif Design-Completion Page
router.post('/MoveGif', (req, res, next) => {

        
    if(!req.user){
        res.redirect('/');
}
else
{
    

if(req.body.Ongoing == "Ongoing")
    {
        Gif.update({_id: req.body.path},
                   {
                    Completed : "Completed",
                    Ongoing : ""
           }, function(err){
             if(err) res.json(err);
            else
            {
                
                console.log(Gif);
                
                
               res.redirect('/Gif/view-Ongoing-gif');
            }
     });
        
    }


}

});

  
module.exports = router;