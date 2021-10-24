const ptr=require('../../../../model/adminclassroom')

exports.class=(req,res)=>{
    console.log(req.body);
    const id =req.body.user;
    ptr.classbooking.find({user_name:id}).then((result)=>{
        res.send(result);
    }).catch((err)=>{
        res.send(err);
    })

}