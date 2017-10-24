var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var Movie = require('./models/movie');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.Promise = global.Promise;
//'mongodb://localhost/'
//'mongodb://saurav tiwari:saurav123@ds117485.mlab.com:17485/node_based_app'
mongoose.connect('mongodb://localhost/node_based_app',function(err){
  if(err){
    console.log(`error is ${err}`);
  }
  else
  {
    console.log('connected to the database');
  }
});


// var nameSchema = new mongoose.Schema({
//  firstName: String,
//  lastNameName: String
// });

// var User = mongoose.model("User", nameSchema);

// app.use("/", (req, res, next) => {
//  return res.sendFile(__dirname + "/index.html");
// });

/*
app.post("/addname", (req, res) => {
 var myData = new User(req.body);
 myData.save()
 .then(item => {
   console.log("Item saved to the DB")
 res.send("item saved to database");
 })
 .catch(err => {
 res.status(400).send("unable to save to database");
 });
});
*/
var movieRouter = require('./routes/movie');
app.use('/', movieRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(3000,function(){
  console.log("server is running on port 3000");
});
