const express = require("express");
const router = express.Router();
var moment = require('moment');
var Seen = require('../models/Seen');
var User = require('../models/user');


router.get('/view-stats', function(req,res){
    res.render('view-stats');
});
module.exports = router;