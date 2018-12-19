const express = require("express");
const router = express.Router();
var Clientuser = require('../models/clientuser');
var Seen = require('../models/Seen');
const SendOtp = require('sendotp');
const sendOtp = new SendOtp('217817A7GCYaZrZEq5b0fc359');
var rn = require('random-number');
var moment = require('moment');
var randomize = require('randomatic');
var randomOtp = randomize('0123456789', 5);
var User = require('../models/user');





//Get Dashboard

router.get('/home/:username', function(req,res){
             var username= req.params.username;


             console.log('etre  conjugation');
             console.log('avoir conjugation');
             console.log('aller conjugation');




        Clientuser.findOne({ username: username }, function(err, user) {
        if (user.Enable) {
            var username = user.username;
            var mobile = user.mobile;                        
            var seen_date = moment().format('MMMM Do YYYY');                                    
            var seen_time = moment().format('LTS');
            
            var seenStatus = new Seen({
						username: username,
						seen_date: seen_date,
						seen_time: seen_time
					});
					Seen.createSeen(seenStatus, function (err, seen) {
						if (err) throw err;
						console.log(seen);
					});
            
                   res.render('home');

            
        }
        });

    

    
});



//Get Client Profile

router.get('/ClientProfile',  function(req,res){
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    res.render('ClientProfile');
        
    }
});

//Get Update Client Profile

router.get('/CheckOTP/:id/', function(req,res){
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var Updateid= req.params.id;
        Clientuser.findOne({ _id: ide }, function(err, user) {
        if (user) {
            var mobileUpdate = user.mobile;
            console.log(mobileUpdate);
        }
        });
        
    }
    
});

    
    

    router.post('/CheckOTP/:id/', function(req,res){
        
                    if(!req.user){
            res.redirect('/');
}
    else
    {
        
    var Updateid= req.params.id;
        Clientuser.findOne({ _id: Updateid }, function(err, user) {
        if (user) {
            var mobileUpdate = user.mobile;
            console.log(mobileUpdate);
                sendOtp.send(mobileUpdate, "PWORKS", randomOtp, function (error, data, response) {
                console.log(data);
                res.render('CheckOTP',{mobileUpdate});
                    })
            
        }
        });
        
    }
        
        
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

//Get Update Client Profile

router.get('/updateClientProfile', function(req,res){
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
    res.render('updateClientProfile');
        
    }
});






//Get Update Otp

router.get('/Updateotp/:yd/:mobile/:email', function(req,res){
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
        var Updateid= req.params.yd;
            console.log(Updateid)
        var mobileUpdate = req.params.mobile;
            console.log(mobileUpdate)   
    var email = req.params.email;
            console.log(email)
        res.render('Updateotp', {mobileUpdate,Updateid,email});
        
    }
});









//Post Update Otp

router.post('/Updateotp/:yd/:mobile/',  function(req,res){
    
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
   var mobile = req.body.mobile;
   var email = req.body.email;
   var username = req.body.username;
          console.log(mobile);
console.log(randomOtp); 

    sendOtp.verify(mobile, randomOtp, function (error, data, response) {
  console.log(data); // data object with keys 'message' and 'type'
     
  if(data.type == 'success')
  {
      console.log('OTP verified successfully');
      
            	Clientuser.update({_id: req.body.yd},
        	                   {
                                mobile : req.body.mobile,
                                email : req.body.email
        			   }, function(err){
        			 	if(err) res.json(err);
        				else
        				{
        				   res.redirect('/home/home/' + username);
        				}
        		 });
    }
  if(data.type == 'error') 
  {
      console.log('OTP verification failed');
      res.render('otp');
  }
});
    
    
       var mobile = req.params.mobile;
       console.log(mobile);
        
    }

});








//Post Update Client Profile

router.post('/updateClientProfile', function(req,res){
                if(!req.user){
            res.redirect('/');
}
    else
    {
        
        
   var yd = req.body.yd;
   var mobile = req.body.mobile;
   var email = req.body.email;
    sendOtp.send(mobile, "PWORKS", randomOtp, function (error, data, response) {
  console.log(data);
        res.redirect('/home/Updateotp/'+ yd +'/'+ mobile+'/'+ email);
});
    
    }
});


module.exports =router;