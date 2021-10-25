const ptr=require('../../../../model/adminguest')

exports.guest=(req,res)=>{
    // console.log(req.body);
    const id =req.body.user;
    ptr.guestbooking.find({user_name:id}).then((result)=>{
        res.send(result);
    }).catch((err)=>{
        res.send(err);
    })

}