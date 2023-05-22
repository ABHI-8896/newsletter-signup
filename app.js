// jshint esversion:6

const express= require("express");
const app=express();
const bodyParser=require("body-parser");
const request= require("request");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html");
});

app.post("/",function(req,res){
var firstname=req.body.fname;
var lastname=req.body.lname;
var email=req.body.email;
});


app.listen(3000,function(){
    console.log("listening");
});

