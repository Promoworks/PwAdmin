const express = require("express");
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const expressValidator = require('express-validator');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongo = require('mongodb');
const mongoose = require('mongoose');
const SendOtp = require('sendotp');
mongoose.connect('mongodb://localhost/promoworks');
const db = mongoose.connection;
const app = express();


var routes = require('./routes/index');
var allocaters = require('./routes/allocaters');
var home = require('./routes/home');
var progress = require('./routes/progress');
var Completed = require('./routes/Completed');
var password = require('./routes/password');
var History = require('./routes/History');


const sendOtp = new SendOtp('2q6q9Fn0ekq58MH9RUwExA');

//Setting Path
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout:'layout'}));
app.set('view engine', 'handlebars');


// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'vendor')));





// Express Session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true,
            cookie: {
                maxAge:  9000000  //10 mins
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
  res.locals.newspaper = req.newspaper || null;
  next();
});


app.use('/', routes);
app.use('/allocaters', allocaters);
app.use('/home', home);
app.use('/progress', progress);
app.use('/Completed', Completed);
app.use('/password', password);
app.use('/History', History);



// Set Port
//app.listen(80, function(){
//    
// console.log('Example app listening on port 80!');
//});
//           
app.set('port', (process.env.PORT ||5000));

app.listen(app.get('port'), function(){
        console.log('Server started on port '+app.get('port'));
});  
