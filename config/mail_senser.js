var mail = require('nodemailer');
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
module.exports  = transport;