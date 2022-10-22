const express = require("express");
const app = express();
const port = 9000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
// const controllers = require('./controllers')
const pasport = require("passport");
const nodemailer = require('nodemailer');
const mail = require('./config/mail_senser');
// const Localpassport = require('./config/passport-local');
const cookieParser = require('cookie-parser');
app.use(express.urlencoded());
// app.use(cookieParser());
app.use(express.static('./assets'));
// app.use(expressLayouts);
// app.set('layout extractStyles',true);
// app.set('layout extractScripts',true);
app.set('view engine','ejs');
app.set('views','./views');
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(passport.setAuthenticatedUser);
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