var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require("mongoose");

mongoose.connect('',function(err){
  if(err){
    consoole.log("err");
  }
  else
  {
    console.log('connected to the database');
  }
});

var nameSchema = new mongoose.Schema({
 firstName: String,
 lastNameName: String
});

var User = mongoose.model("User", nameSchema);

app.use("/", (req, res) => {
 res.sendFile(__dirname + "/index.html");
});

app.listen(3000,function(){
  console.log("server is running on port 3000");
});
