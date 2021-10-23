var express = require('express');
var mongoose = require ('mongoose');
var bodyparse = require('body-parser');

var approuter = require('./routers/router');

const app = express();
const port = process.env.port||9000;

app.use(bodyparse.json());

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-type,Authorization');
    next();
})

app.use ('/',approuter);

mongoose.connect('mongodb+srv://Shrinivas6612:Shri@505603606@cluster0.vjdpp.mongodb.net/Data?retryWrites=true&w=majority',
    {useNewUrlParser:true,useUnifiedTopology:true})
    .then(cilent =>{
        app.listen(port , function (){console.log('The server is running on ', port)} );
    })
.catch(err =>{throw err});


