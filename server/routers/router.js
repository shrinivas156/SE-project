const express = require('express');

const router = express.Router();

const loginad = require('../controller/adminlogin');
const login = require('../controller/userlogin');
//get admin
const viewclass  = require('../controller/adminget/adminclassroom');
const viewguest = require('../controller/adminget/adminguest');
const viewseminar = require('../controller/adminget/adminhall');
const viewsport = require('../controller/adminget/adminsport');
//create admin
const createclass = require('../controller/admincreate/adminclassroom');
const createguest = require('../controller/admincreate/adminguest');
const createhall =require('../controller/admincreate/adminhall');
const createsport = require('../controller/admincreate/adminsport');
//Delete admin
const deleteclass= require('../controller/admindelete/adminclassroom');
const deleteguest= require('../controller/admindelete/adminguest');
const deletehall= require('../controller/admindelete/adminhall');
const deletesports= require('../controller/admindelete/adminsport');
//updates admin
const updateclass= require('../controller/adminupdate/adminclassroom');
const updateguest= require('../controller/adminupdate/adminguest');
const updatehall= require('../controller/adminupdate/adminhall');
const updatesports= require('../controller/adminupdate/adminsport');

//get user
const uvclass  = require('../controller/user/userget/classroom');

//user bookin
 const ubclass=require('../controller/user/userbooking/class');

 //show details imformation

const class_d=require('../controller/showdetails/classroom');

//show users booking 

const user_bc=require('../controller/user/userbooking/userbookings/class')

//updating user booking
const user_cu=require('../controller/user/userbooking/updates/class')

//deleting user booking

const user_cd=require('../controller/user/userbooking/userbookingdelete/class')







router.post('/adminlogin', loginad.adminlogin);
router.post('/userlogin',login.userlogin);
//admin routers
//get routers
router.get('/adminget/classroom',viewclass.adminclass);
router.get('/adminget/guest',viewguest.adminguest);
router.get('/adminget/hall',viewseminar.adminhall);
router.get('/adminget/sport',viewsport.adminsport);
//create routers
router.post('/adminput/classroom',createclass.adminclass);
router.post('/adminput/guest',createguest.adminguest);
router.post('/adminput/hall',createhall.adminhall);
router.post('/admin/sport',createsport.adminsports);
//delet routers
router.post('/admindel/classroom',deleteclass.adminclass);
router.post('/admindel/guest',deleteguest.adminguest);
router.post('/admindel/hall',deletehall.adminhall);
router.post('/admindel/sports',deletesports.adminsport);
//update routers
router.post('/adminupd/classroom',updateclass.adminclass);
router.post('/adminupd/guest',updateguest.adminguest);
router.post('/adminupd/hall',updatehall.adminhall);
router.post('/adminupd/sports',updatesports.adminsports);



//user routers
router.get('/userget/classroom',uvclass.userclass);


//user booking
router.post('/userget/classroom/booking',ubclass.classbook);

//user booking details
router.post('/userget/classroom/booking/userbookings',user_bc.class)

//user showing perticular room details
<<<<<<< HEAD
router.get('/userget/classroom/:classid',class_d.adminclass);
router.get('/userget/seminarhall/:hallid',seminarhall_d.adminhall);
router.get('/userget/sports/:sportsid',sports_d.adminsports);
router.get('/userget/guesthouse/:guestid',guest_d.adminguest);


=======
router.get('/userget/classroom/:classid',class_d.adminclass)

//updateing booking
router.post('/userget/classroom/booking_update',user_cu.class)

//deleting user booking
router.post('/userget/classroom/bookings_delete',user_cd.class)
>>>>>>> 847fa8c424697872eb3feef2a17ab3ff0f8b0be1
module.exports= router;