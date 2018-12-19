const express = require("express");
const router = express.Router();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
var async = require('async');
const crypto = require('crypto');
var nodemailer = require('nodemailer');
const bcrypt = require('bcryptjs');


var User = require('../models/user');
var AddProfileDetails = require('../models/AddProfileDetails');


//Get signup
router.get('/profile-view/:username', function(req,res){
    var username = req.params.username;
    
    AddProfileDetails.find({username:username}, function(err,docs){
    if (err) throw err
    else res.render('profile-view', {ProfileDetails:docs});
});
//    res.render('profile-view');
    
});


router.get('/RegProfile', function(req,res){
    res.render('RegProfile');
});


router.get('/EditProfile/:username', function(req,res){
    var username = req.params.username
    AddProfileDetails.find({username:username}, function(err,docs){
     if (err) throw err
        else res.render('EditProfile', {EditProfile:docs});
        
    });
});


//Update PRofile


//Going to do


router.post('/UpdateProfile', function(req,res){
    var yd = req.body.yd;
    var username = req.body.username;
    var siTeaddress = req.body.siTeaddress;
    var address = req.body.address;
    var bio = req.body.bio;
	AddProfileDetails.update({_id: yd},
	                   {
                        username : username,
                        site_address : req.body.siTeaddress,
                        loc_address : req.body.address,
                        Bio : req.body.bio
			   }, function(err){
			 	if(err) res.json(err);
				else
				{
				   res.redirect('/profile/profile-view/'+ username);
				}
		 });
    
    
		 });








router.post('/RegProfile',function(req,res){
    
    var username = req.body.username;
    var siTeaddress = req.body.siTeaddress;
    var address = req.body.address;
    var Bio = req.body.bio;
    
    req.checkBody('username', 'username is Required').notEmpty();
    req.checkBody('siTeaddress', 'Site Address is Required').notEmpty();
    req.checkBody('address', 'Address is Required').notEmpty();
    req.checkBody('bio', 'Bio is Required').notEmpty();
        var errors = req.validationErrors();
    
    if(errors)
        {
            res.render('RegProfile',{
                errors: errors
            });
        }
    else{
        				var NewAddProfileDetails = new AddProfileDetails({
						username: username,
						site_address: siTeaddress,
						loc_address: address,
						Bio: Bio
					});
            AddProfileDetails.createProfileDetails(NewAddProfileDetails, function (err, AddProfileDetails) {
						if (err) throw err;
						console.log(AddProfileDetails);
					});
         	req.flash('success_msg', 'You Registered Profile Details');
            res.redirect('/profile/profile-view/'+ username);
    }
});


module.exports = router;