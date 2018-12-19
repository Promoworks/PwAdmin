const express = require("express");
const router = express.Router();
const passport3 = require('passport');
const LocalStrategy3 = require('passport-local').Strategy;

var Clientuser = require('../models/clientuser');


//Get Allocaters

router.get('/allocaters', function(req,res){
    res.render('allocaters');
});


//passport.serializeUser(function (clientuser, done) {
//	done(null, clientuser.id);
//});
//
//passport.deserializeUser(function (id, done) {
//	Clientuser.getClientuserById(id, function (err, clientuser) {
//		done(err, clientuser);
//	});
//});


//passport3.use(new LocalStrategy3(
//  function(allocateUser, allocatePassword, done) {
//        Clientuser.getUserByallocateUser(allocateUser, function(err, clientuser){
//            console.log(allocateUser);
//
//            if(err) throw err;
//            if(!clientuser){
//                return done(null, false, {message:'Unknown User'});
//            }
//
//            Clientuser.allocatePassword(allocatePassword, clientuser.allocatePassword, function(err, isMatch){
//
//                if(err) throw err;
//                if(isMatch){
//                    
//                    return done(null, clientuser);
//                }
//                else{
//                    return done(null, false, {message: 'Invalid password'});
//                }
//            });
//
//            
//        });
//  }
//));


//
//passport.use(new LocalStrategy(
//  function(username, password, done) {
//        Clientuser.getUserByUsername(username, function(err, clientuser){
//
//            if(err) throw err;
//            if(!clientuser){
//                return done(null, false, {message:'Unknown User'});
//            }
//
//            Clientuser.comparePassword(password, clientuser.password, function(err, isMatch){
//
//                if(err) throw err;
//                if(isMatch){
//                    
//                    return done(null, clientuser);
//                }
//                else{
//                    return done(null, false, {message: 'Invalid password'});
//                }
//            });
//
//            
//        });
//  }
//    
//
//  
//  
//));


router.post('/allocaterpost',
  passport3.authenticate('token',{successRedirect:'/home/home', failureRedirect:'/allocaters/allocaters', failureFlash:true}),
  function(req, res) {
    res.redirect('/home/home');
  });



router.get('/logout', function (req, res) {
	req.logout();

	req.flash('success_msg', 'You are logged out');

	res.redirect('/');
});


module.exports =router;