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


module.exports= router;