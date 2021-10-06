var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"2427",
    database:"Booking",
    multipleStatements:true
});
connection.connect((err)=>{
    if(!err){
        console.log("database connected");
    }else{
        console.log("database not connected");
       
    }
    });
    


module.exports = connection;