const express = require("express");
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const expressValidator = require('express-validator');
const flash = require('connect-flash');
const session = require('express-session');
const hbs = require('hbs');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const autoIncrement = require("mongodb-autoincrement");
const mongo = require('mongodb');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/promoworks');
const db = mongoose.connection;
const app = express();


var routes = require('./routes/index');
var home = require('./routes/home');
var profile = require('./routes/profile');
var password = require('./routes/password');
var allocaters = require('./routes/allocaters');
var clients = require('./routes/clients');
var videos = require('./routes/videos');
var design = require('./routes/design');
var ads = require('./routes/ads');
var Disable = require('./routes/Disable');
var CompletedMiscellaneous = require('./routes/CompletedMiscellaneous');
var Miscellaneous = require('./routes/Miscellaneous');
var CompletedVideos = require('./routes/CompletedVideos');
var CompletedDesign = require('./routes/CompletedDesign');
var CompletedAds = require('./routes/CompletedAds');
var Comments = require('./routes/Comments');
var Scripts = require('./routes/Scripts');
var CompletedScripts = require('./routes/CompletedScripts');
var Stats = require('./routes/Stats');
var Gif = require('./routes/Gif');



//Setting Path
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout:'layout'}));
app.set('view engine', 'handlebars');


// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'assets')));




// Express Session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true,
                cookie: {
                maxAge:  9000000000000  //10 mins
        }
}));



// Passport init
app.use(passport.initialize());
app.use(passport.session());

// Express Validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));


// Connect Flash
app.use(flash());

// Global Vars
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});


app.use('/', routes);
app.use('/home', home);
app.use('/profile', profile);
app.use('/password', password);
app.use('/allocaters', allocaters);
app.use('/clients', clients);
app.use('/videos', videos);
app.use('/design', design);
app.use('/ads', ads);
app.use('/Disable', Disable);
app.use('/CompletedMiscellaneous', CompletedMiscellaneous);
app.use('/Miscellaneous', Miscellaneous);
app.use('/CompletedVideos', CompletedVideos);
app.use('/CompletedDesign', CompletedDesign);
app.use('/CompletedAds', CompletedAds);
app.use('/Comments', Comments);
app.use('/Scripts', Scripts);
app.use('/CompletedScripts', CompletedScripts);
app.use('/Stats',Stats);
app.use('/Gif',Gif);


// Set Port
//app.listen(80, function(){
//
// console.log('Example app listening on port 80!');
//});
//
app.set('port', (process.env.PORT ||80));

app.listen(app.get('port'), function(){
        console.log('Server started on port '+app.get('port'));
});