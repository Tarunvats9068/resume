const express = require('express');
const req = require('express/lib/request');
const router = express.Router();
// const homeController = require('../controllers/homecontroller');
module.exports = router;
// router.get('/',homeController.home);
router.use('/users',require('./users'));
// router.use('/comments',require('./comment'));