var express = require('express');
var connection  = require('../connection');

module.exports.sign_in=(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    const signedstatus=req.body.signed; 

    var sql="";
    if(signedstatus==1){
        sql="select * from admin where email=? and password=?";
    }else if(signedstatus==2){
        sql="select * from user where email=? and password=?";
    }
    var loginuser=[email,password];
    connection.query(sql,loginuser, (error, results, fields)=> {
        if (error) {
          res.json({
              status:false,
              message:'there are some error with query'
          });
        }else{
                if(Object.keys(results).length!=0 && results.constructor!=Object){
                    res.json({
                        status:true,
                        autheciation:true,
                        rest_string: results[0],
                        update:results[1],
                        message:'data fetched sucessfully'
                    });
                }else{
                    res.json({
                        status:true,
                        autheciation:false,
                        rest_string: results[0],
                        update:results[1],
                        message:'data  not fetched '
                    });
                }
               
            
            
        }
        
      });
      

}