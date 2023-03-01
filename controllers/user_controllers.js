const mail = require('../config/mail_senser');
const Users  = require('../models/users');
module.exports.resume = function(req,res)
{
     return res.render('home');
}
module.exports.send_mail = function(req,res)
{
    var hmtlString = mail.renderTemplate({text:req.body},'/email.ejs')
    var mailOptions = {
        from:'csework133@gmail.com',
        to:'20bcs133@iiitdwd.ac.in',
        subject:'mailing using the node js',
        html: hmtlString
    }
    
    mail.transport.sendMail(mailOptions,function(err,info){
        if(err)
        {
            console.log('error in sending the mail');
            return;
        };
       
        console.log('mail is sent');
        return;
    });
    req.flash('success','mail is sent');
    return res.redirect('/users/home');
}
module.exports.sigin = function(req,res)
{
    return res.render('login');
}
module.exports.sigin_info = function(req,res)
{
    Users.create({
        name:req.body.name,
        email:req.body.email,
        pass:req.body.password}
        ,function(err,user)
        {
            if(err)
            {
                console.log("error in creating the user");
                return ;
            }
                console.log(user);
                return res.redirect('back');
        }
    
    );
}
module.exports.login_info = function(req,res)
{
    req.flash('success','welcome!! 🙏');
    return res.redirect('/users/home');
}
module.exports.signout = function(req,res){
    req.logout(function(err)
    {
        if(err){console.log('error in logging out'); return ;}
        req.flash('success','logout succesfully 🙋‍♂️');
        return res.redirect('/users/signin');
    });
   
}
module.exports.proflie = function(req,res)
{
    if(req.isAuthenticated())
    {
        return res.render('profile');
    }
    return res.redirect('/users/signin');
    
}
module.exports.email = function(req,res){
    return res.render('email');
}