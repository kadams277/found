// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Require Click schema
var MissingPet = require("./models/MissingPet");

var path = require("path");

// Create a new express app
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json({ limit: '50mb'}));
app.use(bodyParser.urlencoded({   limit: '50mb',  extended: true,   parameterLimit:50000}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

// -------------------------------------------------

// MongoDB configuration
var db =  process.env.MONGODB_URI ||  process.env.MONGOHQ_URL ||  'mongodb://localhost/found';

mongoose.connect(db, function(err,res){   
  if(err){    
    console.log("Error connection to: " + db + '. ' + err);   
  } else {    
    console.log("Succeeded connecting to: " + db);  
  } 
});

// -------------------------------------------------

// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});


// This is the route we will send GET requests to retrieve our most recent click data.
// We will call this route the moment our page gets rendered
app.get("/api/animals", function(req, res) {

  // This GET request will search for the latest clickCount
  MissingPet.find({}).exec(function(err, doc) {

    if (err) {
      res.json(err);
    }
    else {
      res.json(doc);
    }
  });
});

// This is the route we will send POST requests to save each click.
// We will call this route the moment the "click" or "reset" button is pressed.
app.post("/api/postAnimal", function(req, res) {
  var newAnimal = {
  userName: req.body.userName,
  userCity: req.body.userCity,
  userState: req.body.userState,
  userEmail: req.body.userEmail,
  animalPicture: req.body.animalPicture,
  additionalInfo: req.body.additionalInfo
};
  var animal = new MissingPet(newAnimal)
  animal.save(function(err, doc){
    if (err){
      res.json(err);
    } else {
      res.json(doc);
    };
  });
});

// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname + "/public/index.html"));
// });

// Starting our express server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
