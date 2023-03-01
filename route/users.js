const express = require('express');
const router = express.Router();
const passport = require('passport');
const usersController = require('../controllers/user_controllers');
// const passport = require('../config/passport-local');
// const { create } = require('../models/posts');

router.get('/home',usersController.resume);
router.post('/send_mail',passport.checkAuthentication,usersController.send_mail);
router.get('/signin',usersController.sigin);
router.post('/sign-in',usersController.sigin_info);
router.get('/logout',usersController.signout);
router.get('/profile',usersController.proflie);
router.get('/email',usersController.email);
router.post('/login',passport.authenticate('user',{failureRedirect:'/users/signin'}),usersController.login_info);
module.exports = router;