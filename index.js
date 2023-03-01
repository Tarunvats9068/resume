const express = require("express");
const app = express();
const port = 9000 || process.env.port;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
// const controllers = require('./controllers')
const passport = require("passport");
const session = require('express-session');
const flash = require('connect-flash');
const nodemailer = require('nodemailer');
const mail = require('./config/mail_senser');
const Localpassport = require('./config/passport-local');
const middleware = require('./config/middleware');
const cookieParser = require('cookie-parser');
const path = require('path');
app.use(express.urlencoded());
app.use(cookieParser());
app.use(express.static('./assets'));
// app.use(expressLayouts);
// app.set('layout extractStyles',true);
// app.set('layout extractScripts',true);
app.set('view engine','ejs');
app.set('views','./views');
app.use(session({
    name : 'resume',
    secret: 'tarun9068',
    saveUninitialized : true,
    resave : true,
    cookie : {
        maxAge: (1000*60*100)
    }
}));
app.use(flash());
app.use(middleware.setflash);
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
app.use('/',require('./route'));
app.listen(port,function(err)
{
    if(err)
    {
        console.log("error in running the server");
        return ;
    }
    else
    {
        console.log("server is running on the port: ",port);
    }
})