// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Require Click schema
var MissingPet = require("./models/MissingPet");

// Create a new express app
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
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
app.get("/api", function(req, res) {

  // This GET request will search for the latest clickCount
  Click.find({}).exec(function(err, doc) {

    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});

// This is the route we will send POST requests to save each click.
// We will call this route the moment the "click" or "reset" button is pressed.
app.post("/api", function(req, res) {

  var clickID = req.body.clickID;
  var clicks = parseInt(req.body.clicks);

  // Note how this route utilizes the findOneAndUpdate function to update the clickCount
  // { upsert: true } is an optional object we can pass into the findOneAndUpdate method
  // If included, Mongoose will create a new document matching the description if one is not found
  Click.findOneAndUpdate({
    clickID: clickID
  }, {
    $set: {
      clicks: clicks
    }
  }, { upsert: true }).exec(function(err) {

    if (err) {
      console.log(err);
    }
    else {
      res.send("Updated Click Count!");
    }
  });
});

// -------------------------------------------------

var testDB = {
  userName: "Kaitlyn",
  locationCity: "Austin",
  locationState: "Texas",
  userEmail: "kadams277@gmail.com",
  animalPicture: "",
  animalType: "Dog",
  animalGender: "Male",
  animalyColorGrouping: "White",
  animalSize: "Medium",
  additionalInfo: "Spins a lot, very friendly. Too friendly."
};

MissingPet.insertMany(testDB);


// Starting our express server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
