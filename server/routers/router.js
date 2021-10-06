var express = require("express");
var router = express.Router();


var signin = require('../controller/signin');
var classr=require('../controller/classroom');
var guest=require('../controller/Guesthouse');
var hall=require('../controller/seminarhall');
var sport=require('../controller/sports');
var mess=require('../controller/mess');



router.post('/signin',signin.sign_in);
router.post('/classroomget',)


module.exports = router;