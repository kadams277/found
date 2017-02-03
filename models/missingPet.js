// Include the Mongoose Dependencies
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// Create a Schema for lost pets
var MissingPetSchema = new Schema({
  userName: {
    type: String
  },
  locationCity: {
    type: String
  },
  locationState: {
    type: String
  },
  userEmail: {
    type: String
  },
  animalPicture: {
    type: String
  },
  animalType: {
    type: String
  },
  animalGender: {
    type: String
  },
  animalColorGrouping: {
    type: String
  },
  animalSize: {
  	type: String
  },
  additionalInfo: {
  	type: String
  }
});

// Create the Model
var MissingPet = mongoose.model("MissingPet", MissingPetSchema);

// Export it for use elsewhere
module.exports = MissingPet;

