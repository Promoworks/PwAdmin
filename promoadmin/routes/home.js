const express = require("express");
const router = express.Router();
var moment = require('moment');
var Seen = require('../models/Seen');
var User = require('../models/user');
const schedule = require('node-schedule');
const msg91 = require("msg91")("217817A7GCYaZrZEq5b0fc359", "PWORKS", "4" );



//Get Dashboard





  

router.get('/home/:username', function(req,res){

	var startOfWeek = moment().startOf('isoWeek');
	var endOfWeek = moment().endOf('isoWeek');
	
	var days = [];
	var day = startOfWeek;
	
	while (day <= endOfWeek) {
		days.push(day.toDate());
		day = day.clone().add(1, 'd');
	}
	
	console.log(days);

	// let startTime = new Date(Date.now() + 5000);
	// let endTime = new Date(startTime.getTime() + 5000);
	// var j = schedule.scheduleJob({ start: startTime, end: endTime, rule: '*/1 * * * * *' }, function(){
	// 	var mobile = "7395962447";
	// 	var message = "Oui";
	// 	msg91.send(mobile, message, function(err, response){
    //         console.log(err);
    //         console.log(response); 
                
	// 		});
			
	//   console.log('Time for tea!');
	// });



    Seen.find({seen_date:{$gte:days}}, function(err,docs){
        if(err) throw err
        else   res.render('home', {Seen:docs});
    }).sort({seen_date: -1, seen_time: 1});
});




router.get('/deleteSeen/:id', function(req, res){

	Seen.findByIdAndRemove({_id: req.params.id},
	   function(err){
		if(err) throw err;
		else res.redirect('back');
	});
});


module.exports = router;