const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
var path = require('path');
var fs = require('fs');
var User = require('../models/user');
var multer  = require('multer');
const msg91 = require("msg91")("217817A7GCYaZrZEq5b0fc359", "PWORKS", "4" );



var Clientuser = require('../models/clientuser');


//Create Clients

router.get('/createClients', function(req,res){
            
                        if(!req.user){
            res.redirect('/');
}
    else
    {
    res.render('createClients');
        
    }
});


router.post('/createClients', function(req, res){
    
        
                        if(!req.user){
            res.redirect('/');
}
    else
    {

    

        var clientLogostorage = multer.diskStorage({
     destination: './pwClient/vendor/upload/Logo',
    filename : function(req, file, cb)
    {
        cb(null, file.originalname);

    }
 });

var clientLogo_upload = multer({storage: clientLogostorage}).array('file', 25);

        
        
        
        
        
        
        
            clientLogo_upload(req, res, (err) => {
                 console.log(req.files);
                
                     var clientName = req.body.clientName;
                     var username = req.body.username;
                     var clientType = req.body.clientType; 
                     var clientOffice = req.body.clientOffice; 
                     var mobile = req.body.mobile; 
                     var password = req.body.password;
                     var email = req.body.email;
                     var status = req.body.status;
                     var joining = req.body.joining;
                     var Enable = "Enable"
                     var Disable = ""
                     var EnableOTP = "Enable"
                     var DisableOTP = ""

                    let body = '';
                
                
       for (var i = 0; i < req.files.length; i++)
           {
            var CompanyFileName = req.files[i].filename;
            var removeCompany = req.files[i].path;
             var Companylogo_final_path =   removeCompany.substr(15);

                
                var NewClient = new Clientuser({

                    Companylogo_final_path : Companylogo_final_path,
                    clientName : clientName,
                    username : username,
                    clientType : clientType,
                    clientOffice : clientOffice,
                    mobile : mobile,
                    password : password,
                    joining : joining,
                    email : email,
                    Enable : Enable,
                    Disable : Disable,
                    EnableOTP : EnableOTP,
                    DisableOTP : DisableOTP,
                    status : status

                });
       Clientuser.createclientuser(NewClient, function(err, clientuser){
                    if(err) throw err;
                    console.log(clientuser);
        });
               
           }

            var mobile = req.body.mobile;
            var message = "URL:https://works.promo.works \nYour Login Credentials :- \n username : "+ req.body.username + "\n password : "+ req.body.password+"\n Thank you ";
           msg91.send(mobile, message, function(err, response){
            console.log(err);
            console.log(response); 
                
            });

                
                        res.redirect('/clients/viewClients');

    });
        

    }
    
});


//Delete Clients

router.get('/Clientuser/:id', function(req, res){
	Clientuser.findByIdAndRemove({_id: req.params.id},
	   function(err){
		if(err) throw err;
		else res.redirect('/clients/viewClients');
	});
});




//Get it before update
router.get('/updateClients/:id/edit', function(req, res){
    res.render('updateClients', {updateClients : req.userId});
});





//Enable OTP Clients
router.get('/EnableOTPClients/:id', function(req, res){
            var EnableOTP = "Enable"
            var DisableOTP = ""
    	Clientuser.update({_id: req.params.id},
	                   {
                        DisableOTP : DisableOTP,
                        EnableOTP : EnableOTP
			   }, function(err){
			 	if(err) res.json(err);
				else
				{ 
				   res.redirect('/clients/viewClients/');
				 }
		 });
    
});




//Disable OTP Clients
router.get('/DisableOTPClients/:id', function(req, res){
            var yd = req.params.id
            var DisableOTP = "Disable"
            var EnableOTP = ""
    	Clientuser.update({_id: req.params.id},
	                   {
                        EnableOTP : EnableOTP,
                        DisableOTP : DisableOTP
			   }, function(err){
			 	if(err) res.json(err);
				else
				{ 
//                    req.flash('success_msg', {yd});
//                    return done(null, false, {message: 'Invalid password'});
				   res.redirect('/clients/viewClients/');
				 }
		 });
    
});




//Enable Clients
router.get('/EnableClients/:id', function(req, res){
            var Enable = "Enable"
            var Disable = ""
    	Clientuser.update({_id: req.params.id},
	                   {
                        Disable : Disable,
                        Enable : Enable
			   }, function(err){
			 	if(err) res.json(err);
				else
				{ 
				   res.redirect('/clients/viewClients/');
				 }
		 });
    
});




//Disable Clients
router.get('/DisableClients/:id', function(req, res){
            var yd = req.params.id
            var Disable = "Disable"
            var Enable = ""
    	Clientuser.update({_id: req.params.id},
	                   {
                        Enable : Enable,
                        Disable : Disable
			   }, function(err){
			 	if(err) res.json(err);
				else
				{ 
//                    req.flash('success_msg', {yd});
//                    return done(null, false, {message: 'Invalid password'});
				   res.redirect('/clients/viewClients/');
				 }
		 });
    
});
router.post('/Clientuser/:id', function(req, res){

        
        
	Clientuser.update({_id: req.params.id},
	                   {
                        clientName : req.body.clientName,
                        username : req.body.username,
                        clientType : req.body.clientType,
                        clientOffice : req.body.clientOffice,
                        mobile : req.body.mobile,
                        email : req.body.email,
                        status : req.body.status
			   }, function(err){
			 	if(err) res.json(err);
				else
				{ 
				   res.redirect('/clients/viewClients/');
				 }
		 });
});


router.post('/ClientuserLogo/:id', function(req, res){
                
                        if(!req.user){
            res.redirect('/');
}
    else
    {
        
            var UpdateclientLogostorage = multer.diskStorage({
     destination: './pwClient/vendor/upload/Logo',
    filename : function(req, file, cb)
    {
        cb(null, file.originalname);

    }
 });

var update_clientLogo_upload = multer({storage: UpdateclientLogostorage}).array('file', 25);

        
        
    var logo = req.body.Companylogo_final_path;

     update_clientLogo_upload(req, res, (err) => {
                 let body = '';
//                    var path = req.file.path;
//                    var update_Companylogo_final_path = path.substr(6);
         
         
              for (var i = 0; i < req.files.length; i++)
           {
            var CompanyFileName = req.files[i].filename;
            var updateCompany = req.files[i].path;
             var update_Companylogo_final_path =   updateCompany.substr(15);

                
               
               
         	Clientuser.update({_id: req.params.id},
	                   {
                        Companylogo_final_path : update_Companylogo_final_path
             
			   }, function(err){
			 	if(err) res.json(err);
				else
				{ 
				   res.redirect('/clients/updateClients/'+ req.params.id +'/'+ 'edit');
				 }
			 });
               
           }
         
         
         
     });
    
        
    }

});





//Get Id
router.param('id', function(req, res, next, id){
                
                        if(!req.user){
            res.redirect('/');
}
    else
    {
	Clientuser.findById(id, function(err, docs){
			if(err) res.json(err);
			else
			{
				req.userId = docs;
				next();
			}
		});
        
    }
    
});
    




//List Clients

router.get('/viewClients', function(req,res){
            
                        if(!req.user){
            res.redirect('/');
}
    else
    {
        
    Clientuser.find({}, function(err, docs){
        if(err) throw err;
        else  res.render('viewClients',{Clientuser : docs});
    });
        
    }
});






module.exports =router;