const express = require('express');
//const path= require("path");
const app = express();

app.use(express.static('public'));
app.set("puerto",process.eventNames.PORT || 3001);

app.listen(process.env.PORT || 3001,function(){
    console.log('Servidor funcionando puerto 3001');
});

app.get('/home', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});