var express = require('express');
var connection  = require('../connection');

module.exports.classroomget=(req,res)=>{
    const fromdate= req.body.from;
     

    var sql='select room_no from classroom natural join classbooked where fromdate';
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