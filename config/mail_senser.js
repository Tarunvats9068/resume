var mail = require('nodemailer');
const path = require('path');
const ejs = require('ejs');
// const { transformAuthInfo } = require('passport');
var transport = mail.createTransport(
    {
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    service : 'Gmail',
    auth: {
        user:'csework133@gmail.com',
         pass:'gehngayhthsytysv'
}
        
    }
)

var renderTemplate = (data,relativepath) => {
    let mailHtml;
    ejs.renderFile(path.join(__dirname,'../views',relativepath),
    data,function(err,template)
    {
        if(err){console.log("error in render the template"); return ;}
          mailHtml = template;   
    })
    return mailHtml;
}
module.exports  = {
    transport:transport,
    renderTemplate:renderTemplate
}