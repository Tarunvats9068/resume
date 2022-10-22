// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
// const Users = require('../models/codeilDevelopment');
// passport.use(new LocalStrategy({
//     usernameField: 'email'
// }, function (email, password, done) {
//     Users.findOne({ email: email }, function (err, user) {
//         if (err) { console.log('error in finding the user in passport'); return; }
//         if (!user || user.password != password) {
//             return done(null, false);
//         }
//         return done(null, user);
//     }
//     );

// }
// ));

// passport.serializeUser(function(user, done){
//     console.log(user);
//     done(null, user.id);
// });
// passport.deserializeUser(function (id, done) {
//     Users.findById(id, function (err, user) {
//         if (err) {
//             console.log('error in finding the user in deserialize');
//         }
//         return done(null, user);
//     }

//     );
// });
// passport.checkAuthentication =function(req,res,next){
//     if(req.isAuthenticated())
//     {
//         return next();
//     }
//     return res.redirect('/users/signin');
// }
// passport.setAuthenticatedUser = function(req,res,next){
//     if(req.isAuthenticated())
//     {
//         res.locals.user = req.user;
//         // res.locals.post = req.post;
//         // console.log(res.locals.post);
//     }
//      return next();
// }
// module.exports = passport;