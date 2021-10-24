const ptr=require('../../../../model/adminseminar')

exports.seminar=(req,res)=>{
    // console.log(req.body);
    const id =req.body.user;
    ptr.seminarbooking.find({user_name:id}).then((result)=>{
        res.send(result);
    }).catch((err)=>{
        res.send(err);
    })

}