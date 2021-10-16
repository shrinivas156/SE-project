const sport= require('../../model/adminsports');

exports.adminsports=  (req,res) => {
    var name= req.body.name;
    var court =req.body.court;
    var player= req.body.player;
    sport.create({name:name,court:court,player:player}).then(response =>{
        
            res.status(200).json({'login':response});
       
    }).catch(err => {
        res.status(500).json({message :  err});
    });
    
 }