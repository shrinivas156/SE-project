const pointer= require('../../model/adminclassroom');

exports.adminclass=  (req,res) => {

    const id=req.params.classid;
    console.log(id);
    
    pointer.classroom.findOne({_id:id}).then(response =>{
            console.log(response);
            res.status(200).json(response);
       
    }).catch(err => {
        res.status(500).json({message :  err});
    });
    
 }