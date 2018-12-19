const express = require("express");
const router = express.Router();
var Clientuser = require('../models/clientuser');
var msg91 = require("msg91")("217817A7GCYaZrZEq5b0fc359", "PWORKS", "4" );
var moment = require('moment');
var path = require('path');
var fs = require('fs');
var multer  = require('multer');
var User = require('../models/user');
var Miscellaneous = require('../models/Miscellaneous');





//< !-----------------------------------------------------------------------------------------Completed Miscellaneous--------------------------------------------------------------------------------------------- !>
//< !-----------------------------------------------------------------------------------------Completed Miscellaneous --------------------------------------------------------------------------------------------- !>
//< !-----------------------------------------------------------------------------------------Completed Miscellaneous --------------------------------------------------------------------------------------------- !>


//View miscellaneous

router.get('/view-Completed-miscellaneous', function(req,res){
            if(!req.user){
            res.redirect('/');
}
    else
    {
        
                    
            Miscellaneous.find({}).sort({Miscellaneous_date: -1, Miscellaneous_time: -1}).exec(function(err, docs){
        if(err) throw err;
        else  res.render('view-Completed-miscellaneous',{Miscellaneous : docs});
        
        });
        
        
        
        
    }
    
});

//Delete miscellaneous
router.post('/CompletedMiscellaneous/', function(req,res){
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
        var path = req.body.path;
    Miscellaneous.findByIdAndRemove({_id: path}, 
	   function(err){
		if(err) throw err;
		else res.redirect('/CompletedMiscellaneous/view-Completed-miscellaneous');
	});
        
    }
    
});


//Upload miscellaneous

router.get('/upload-Completed-miscellaneous', function(req,res){
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
        
Clientuser.find({}, function(err,docs){
    if (err) throw err
    else res.render('upload-Completed-miscellaneous', {Clientuser:docs});
});
        
    }
    
});








var CompletedMiscellaneousstorage = multer.diskStorage({
     destination: './pwClient/vendor/upload/Completed/Miscellaneous',
        filename : function(req, file, cb)

    {
//        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
        cb(null, file.originalname);

    }
 });




//Init Upload

var CompletedMiscellaneous_upload = multer({storage: CompletedMiscellaneousstorage}).array('file', 25);

 
//miscellaneousOver Page

router.post('/upload-Completed-miscellaneous', (req, res, next) => {

        if(!req.user){
            res.redirect('/');
}
    
        else{
        
        
           CompletedMiscellaneous_upload(req, res, (err) => {
//        console.log(req.files);


       for (var i = 0; i < req.files.length; i++)
           {
//            console.log(req.files[i].path);
            var MiscellaneousFileName = req.files[i].filename;
            var removeMiscellaneous = req.files[i].path;
             var removefinalMiscellaneous =   removeMiscellaneous.substr(15);
//               console.log(removefinalMiscellaneous);
               
               
                    let body = '';
            var FormatType = req.body.optradio;
               console.log(FormatType);
            var toWhom = req.body.toWhom; 
            var brandtype = req.body.brandtype; 
            var owner = "Promoworks";

        if(FormatType == 'Image')
            {
                var Image = FormatType;
            }
        
        if(FormatType == 'Pdf')
            {
                var pdf = FormatType;
            }      
        

        if(FormatType == 'Videos')
            {
                var videos = FormatType;
            }


                var newMiscellaneous = new Miscellaneous({

                    Miscellaneous_final_path: removefinalMiscellaneous,
                    Miscellaneous_file_name: MiscellaneousFileName,
                    Miscellaneous_date: moment().format('MMMM Do YYYY'),
                    Miscellaneous_time: moment().format('LTS'),
                    Image: Image,
                    pdf: pdf,
                    videos: videos,
                    brandtype: brandtype,
                    owner: owner,
                    toWhom: toWhom,
                    Enable : "Enable",
                    Ongoing : "",
                    Completed : "Completed",
                    Seen : "",
                    Downloaded : ""

                });
                console.log(newMiscellaneous);
                Miscellaneous.createMiscellaneous(newMiscellaneous, function (err, Miscellaneous) {
                    if (err) throw err;

                });
        
                          }

            var msg = "Work has been uploaded \r";
            var msg2 = "URL : http://works.promo.works \r";
           var msg3 = "Sitemap : username -> password -> menu -> Completed -> Miscellaneous";
            var send = msg + msg2 + msg3;
                        var message = send;
                        Clientuser.findOne({ username: toWhom }, function(err, user) {
                         var mobile = user.mobile;
                    msg91.send(mobile, message, function(err, response){
                    console.log(err);
                    console.log(response); 
                        
                   res.redirect('/CompletedMiscellaneous/view-Completed-miscellaneous');
                        });
                     });
        
      
                        

        
//        res.end("File is uploaded");
    
    });
      }
});





module.exports =router;