const express = require("express");
const router = express.Router();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
var async = require('async');
const crypto = require('crypto');
var nodemailer = require('nodemailer');
const bcrypt = require('bcryptjs');

const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');
const msg91 = require("msg91")("217817A7GCYaZrZEq5b0fc359", "PWORKS", "4" );


var User = require('../models/user');
const SendOtp = require('sendotp');
const sendOtp = new SendOtp('217817A7GCYaZrZEq5b0fc359');



const math = require('mathjs');


//Get Homepage

router.get('/', function(req,res){
    res.render('index');
    
});


//router.get('/two-factor/:username', function(req,res){
//
//    
//                var username= req.params.username;
//    
//        User.findOne({ username: username }, function(err, user) {
//            var mobile = user.mobile;
//          req.flash('error', 'Enter the OTP which you have received.');
//            
//                                    var round = math.random(30000, 40000);
//                                    var randomOtp = math.round(round);
//console.log(randomOtp);
//sendOtp.send(mobile, "PWORKS", randomOtp,function (error, data, response) {
//  console.log(data);
//       return res.render('two-factor', {randomOtp});
//
//
//});
//            
//        });
//      });  

router.get('/two-factor/:randomOtp', function(req,res){
    
        var Dupkey = req.params.randomOtp
        const decryptedString = cryptr.decrypt(Dupkey);

     res.render('two-factor', {decryptedString});

});
            
 
        

           

    




router.post('/two-factor/', function(req,res){
                var username= req.params.username;
                var Dupkey = req.body.Dupkey;
                var otp = req.body.otp;

        
if(Dupkey == otp)
   {
         res.redirect('/home/home/' + username);
      console.log('OTP verified successfully')
   }
    else{
              console.log('OTP verification failed');
        req.flash('error_msg', 'Enter the otp which you have received');
         var encryptedString = cryptr.encrypt(Dupkey);
       res.redirect('/two-factor/' + encryptedString);

    }
    
    
    });


//Get signup

router.get('/signup', function(req,res){
    res.render('signup');
    
});
router.post('/signup', function(req,res){
    var name = req.body.username; 
    var email = req.body.email; 
    var mobile = req.body.mobile; 
    var password = req.body.password;
    
    req.checkBody('username', 'Username is Required').notEmpty();
    req.checkBody('email', 'Email is Required').notEmpty();
    req.checkBody('mobile', 'Mobile is Required').notEmpty();
    req.checkBody('password', 'Password is Required').notEmpty();
    var errors = req.validationErrors();
    if(errors)
        {
            res.render('signup',{
                errors: errors
            });
        }
    else{
					var newUser = new User({
						username: name,
						email: email,
						mobile: mobile,
						password: password,
						delStatus: ""
					});
					User.createUser(newUser, function (err, user) {
						if (err) throw err;
						console.log(user);
					});
         	req.flash('success_msg', 'You are registered and can now login');
            res.redirect('/');

    }
});


passport.serializeUser(function (user, done) {
	done(null, user.id);
});

passport.deserializeUser(function (id, done) {
	User.getUserById(id, function (err, user) {
		done(err, user);
	});
});


passport.use(new LocalStrategy(
  function(username, password, done) {
        User.getUserByUsername(username, function(err, user){
            
            if(err) throw err;
            if(!user){
                
                return done(null, false, {message:'Unknown User'});
            }
            
            User.comparePassword(password, user.password, function(err, isMatch){
                if(err) throw err;
                if(isMatch){
                      
                    return done(null, user);
                }
                else{
                    return done(null, false, {message: 'Invalid password'});
                }
                
            });
        });
  }));



router.post('/',
  passport.authenticate('local',{failureRedirect:'/', failureFlash:true}),
  function(req, res) {
            var username= req.body.username;
    console.log(username);
    
    
    
    
//    
//            User.findOne({ username: username }, function(err, user) {
//            var mobile = user.mobile;
//            
//                                    var round = math.random(30000, 40000);
//                                    var randomOtp = math.round(round);
//console.log(randomOtp);
//sendOtp.send(mobile, "PWORKS", randomOtp,function (error, data, response) {
//  console.log(data);
//    const encryptedString = cryptr.encrypt(randomOtp);
//
//     res.redirect('/two-factor/' + encryptedString);
//
//});
//                
//
//});
                
                
    res.redirect('/home/home/' + username);
    
    
  });



router.get('/logout/:id', function (req, res) {
    
                var id = req.params.id;
  
             req.logout();

            req.flash('success_msg', 'You are logged out');

            res.redirect('/');
				 
  
    

});











/*<!--------------------------------------------------------------------------------------------Forgot---------------------------------------------------------------------------------------------------------->*/
/*<!--------------------------------------------------------------------------------------------Forgot---------------------------------------------------------------------------------------------------------->*/
/*<!--------------------------------------------------------------------------------------------Forgot---------------------------------------------------------------------------------------------------------->*/
/*<!--------------------------------------------------------------------------------------------Forgot---------------------------------------------------------------------------------------------------------->*/


router.get('/forgot', function(req, res) {
  res.render('forgot', {
    user: req.user
  });
});



router.post('/forgot', function(req, res, next) {
  async.waterfall([
    function(done) {
      crypto.randomBytes(20, function(err, buf) {
        var token = buf.toString('hex');
        done(err, token);
      });
    },
    function(token, done) {
      User.findOne({ email: req.body.email }, function(err, user) {
        if (!user) {
          req.flash('error', 'No account with that email address exists.');
          return res.redirect('/forgot');
        }

        user.resetPasswordToken = token;
        user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

          req.flash('success_msg', 'We emailed password reset link to ' +  req.body.email + '. Please follow the instructions in that email. ' );
          
          
        user.save(function(err) {
          done(err, token, user);
        });
      });
    },
    function(token, user, done) {
      var smtpTransport = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: 'hello@promo.works',
          pass: 'Novelsoft@098'
        }
      });
      var mailOptions = {
        to: user.email,
        from: 'hello@promo.works',
        subject: 'Promoworks Login Password Reset',
        text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
          'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
          'http://' + req.headers.host + '/reset/' + token + '\n\n' +
          'If you did not request this, please ignore this email and your password will remain unchanged.\n'
      };
      smtpTransport.sendMail(mailOptions, function(err) {
        req.flash('info', 'An e-mail has been sent to ' + user.email + ' with further instructions.');
        done(err, 'done');
      });
    }
  ], function(err) {
    if (err) return next(err);
    res.redirect('/forgot');
  });
});





router.get('/reset/:token', function(req, res) {
  User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
    if (!user) {
      req.flash('error', 'Password reset token is invalid or has expired.');
      return res.redirect('/forgot');
    }
        var token = req.params.token;
    res.render('reset', {token});
  });
});



router.post('/reset/:token', function(req, res) {
    
    

                     var password = req.body.password;
            console.log(password);
          
        req.checkBody('password', 'New Password is Required').notEmpty();
        req.checkBody('repeat', 'Passwords do not match').equals(req.body.password);
          
    
    
 
  async.waterfall([
    function(done) {
      User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
        if (!user) {
          req.flash('error', 'Password reset token is invalid or has expired.');
          return res.redirect('back');
        }


          
          
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;

 
            
                      
//        user.save(function(err) {
//          req.logIn(user, function(err) {
//            done(err, user);
//          });
//        });
          
            
                	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(password, salt, function(err, hash) {
	        password = hash;
    console.log(hash);

	User.update({resetPasswordToken: req.params.token},{password :hash}, function(err){
			 	if(err) res.json(err);
				else
				{ 
				       
                var message = "Your password has been successfully changed. ";    
        User.findOne({},function(err, docs){
              var mobile = docs.mobile;
              console.log(mobile);
              
           if(err) throw err;
  else
            msg91.send(mobile, message, function(err, response){
            console.log(err);
            console.log(response); 
                
            });
   
                    res.redirect('/');
    	 });
                 
                    
                    
                    
				 }
			 });
	    });
	});


          
          
          

          
      });
    },
    function(user, done) {
      var smtpTransport = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: 'hello@promo.works',
          pass: 'Novelsoft@098'
        }
      });
      var mailOptions = {
        to: user.email,
        from: 'hello@promo.works',
        subject: 'Your password has been changed',
        text: 'Hello,\n\n' +
          'This is a confirmation that the password for your account ' + user.email + ' has just been changed.\n'
      };
      smtpTransport.sendMail(mailOptions, function(err) {
        req.flash('success', 'Success! Your password has been changed.');
        done(err);
      });
    }
  ], function(err) {
    res.redirect('/');
  });
});


module.exports = router;