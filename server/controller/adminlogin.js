const admin = require('../model/loginadmin');

exports.adminlogin=  (req,res) => {
    var email = req.body.email;
    var pass = req.body.password;
    
    admin.find({email:email}).then(response =>{
        
            res.status(200).json({'login':response});
       
    }).catch(err => {
        res.status(500).json({message :  err});
    });
    
 }
