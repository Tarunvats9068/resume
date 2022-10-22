const express = require('express');
const router = express.Router();
const passport = require('passport');
const usersController = require('../controllers/user_controllers');
// const { create } = require('../models/posts');

router.get('/home',usersController.resume);
router.post('/send_mail',usersController.send_mail);
module.exports = router;