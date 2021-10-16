const user = require('../model/loginuser');

exports.userlogin=  (req,res) => {
    var email = req.body.email;
    var pass = req.body.password;
    
    user.find({email:email,password:pass}).then(response =>{
        
            res.status(200).json({'login':response});
       
    }).catch(err => {
        res.status(500).json({message :  err});
    });
    
 }