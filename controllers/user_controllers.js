const mail = require('../config/mail_senser');
module.exports.resume = function(req,res)
{
    
   
    return res.render('home');
}
module.exports.send_mail = function(req,res)
{
    console.log(req.body.mail_send);
    console.log(req.body.email);
    var mailOptions = {
        from:'csework133@gmail.com',
        to:req.body.email,
        subject:'mailing using the node js',
        html: req.body.mail_send + '<h1 style="color:red"></h1>'
    }
    
    mail.sendMail(mailOptions,function(err,info){
        if(err)
        {
            console.log('error in sending the mail');
            return;
        };
        console.log('mail is sent');
        return;
    });
    return res.redirect('back');
}