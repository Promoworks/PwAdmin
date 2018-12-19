const express = require("express");
const bcrypt = require('bcryptjs');
const router = express.Router();
var Clientuser = require('../models/clientuser');
const SendOtp = require('sendotp');
const sendOtp = new SendOtp('217817A7GCYaZrZEq5b0fc359');
var rn = require('random-number');

var randomize = require('randomatic');
var randomOtp = randomize('0123456789', 5);



router.get('/get-password/:id/change', function(req, res){
    res.render('get-password', {Clientuser : req.userId});
});

router.post('/get-password/:id/change',function(req,res){
    
    var id = req.params.id;
    var password = req.body.password;
    var repeat = req.body.repeat;
    var mobile = req.body.mobile;
    req.checkBody('password', 'New Password is Required').notEmpty();
    req.checkBody('repeat', 'Passwords do not match').equals(req.body.password);

    var errors = req.validationErrors();
    if(errors)
        {
            res.render('get-password',{errors: errors, Clientuser : req.userId});
        }
    else{
                console.log(mobile);
                console.log(randomOtp);
                    sendOtp.send(mobile, "PWORKS", randomOtp, function (error, data, response) {
                        console.log(data);
//                        res.redirect('/password/ChangePasswordotp/'+ id +'/'+ password+'/'+ mobile);
                        
                        res.render('ChangePasswordotp', {id,password,mobile,randomOtp});

                    });

    }
            });
    


 router.get('/ChangePasswordotp/:id/:password/:mobile', function(req, res){
    res.render('ChangePasswordotp');

});       
        
        
        
//Post Update Otp

router.post('/ChangePasswordotp/', function(req,res){
   var mobile = req.params.mobile;
   var password = req.body.password;
   var Dupkey = req.body.Dupkey;
   var otp = req.body.otp;
     var id = req.body.id;
    
        if(Dupkey == otp)
   {
       
       console.log('OTP verified successfully');

        	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(password, salt, function(err, hash) {
	        password = hash;
    console.log(hash);

  
            
	Clientuser.update({_id: req.params.id},
	                   {

                        password :hash
			   }, function(err){
			 	if(err) res.json(err);
				else
				{ 
                    req.logout();
                    req.flash('success_msg', 'You are logged out');
				   res.redirect('/');
				 }
			 });
            
            
            
            
            
	    });
	});
        
       
       
   }
    else{
         console.log('OTP verification failed');
         req.flash('error_msg', 'Whoops ! It seems OTP is Wrong ');
      res.redirect('/password/get-password/'+ id +'/'+ 'change');
        
    }


    

});


        
        
        
        
        
        
        
        
        
        
        
    
        //Get Id
router.param('id', function(req, res, next, id){
	Clientuser.findById(id, function(err, docs){
			if(err) res.json(err);
			else
			{
				req.userId = docs;
				next();
			}
		});
		});
        
        
        
        
module.exports =router;