const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const autoIncrement = require("mongodb-autoincrement");


var Allocaters = require('../models/allocaters');


//Create Clients

router.get('/createAllocaters', function(req,res){
    res.render('createAllocaters');
});






router.post('/createAllocaters', function(req, res, next){
     var username = req.body.username; 
     var mobile = req.body.mobile; 
     var password = req.body.password;
     var del_status =  "1"


    
        req.checkBody('username', 'Client Name is Required').notEmpty();
        req.checkBody('mobile', 'Mobile No is Required').notEmpty();
        req.checkBody('password', 'Client Password is Required').notEmpty();
    var errors = req.validationErrors();
    if(errors)
        {
            res.render('createClients',{
                errors: errors
                
            });
        }
    else{
        var NewAllocaters = new Allocaters({
            allocaters : username,
            mobile : mobile,
            password : password,
            del_status : del_status
        });
        Allocaters.createAllocateuser(NewAllocaters, function(err, allocaters){
                    if(err) throw err;
                    console.log(allocaters);
        });
                 

                 	req.flash('success_msg', 'You are registered new client and now he/she can login');
                    res.redirect('/allocaters/viewAllocaters/');
    }
    
});



//Delete Allocaters

router.get('/DeleteAllocaters/:id', function(req, res){
	Allocaters.findByIdAndRemove({_id: req.params.id}, 
	   function(err){
		if(err) throw err;
		else res.redirect('/allocaters/viewAllocaters/');
	});
});



//Get it before update
router.get('/updateAllocaters/:id/edit', function(req, res){
    res.render('updateAllocaters', {updateAllocaters : req.userId});
});




    
//Once submit has been hit For Allocaters
router.post('/Updateallocaters/:id', function(req, res){
    var password = req.body.password;
    console.log(password);
    	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(password, salt, function(err, hash) {
	        password = hash;
    console.log(hash);
	Allocaters.update({_id: req.params.id},
	                   {
                        allocaters : req.body.username,
                        mobile : req.body.mobile,
                        password :hash
			   }, function(err){
			 	if(err) res.json(err);
				else
				{ 
				   res.redirect('/allocaters/viewAllocaters/');
				 }
			 });
	    });
	});

});




//Get Id
router.param('id', function(req, res, next, id){
	Allocaters.findById(id, function(err, docs){
			if(err) res.json(err);
			else
			{
				req.userId = docs;
				next();
			}
		});
});
    




//List Clients

router.get('/viewAllocaters', function(req,res){
    Allocaters.find({}, function(err, docs){
        if(err) throw err;
        else  res.render('viewAllocaters',{Allocaters : docs});
    });
});


module.exports =router;