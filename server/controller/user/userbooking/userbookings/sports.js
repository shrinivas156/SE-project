const ptr=require('../../../../model/adminsports')

exports.sports=(req,res)=>{
    // console.log(req.body);
    const id =req.body.user;
    ptr.sportbooking.find({user_name:id}).then((result)=>{
        res.send(result);
    }).catch((err)=>{
        res.send(err);
    })

}