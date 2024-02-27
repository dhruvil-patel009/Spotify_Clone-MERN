const mongoose = require("mongoose");
// How to Create a model
//step1: require mongoose
//step2: Create a Mongoose schema (structure of a user)
//step3: Create a model

const Song = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  track: {
    type: String,
    required: true,
  },
  artist: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
});

const SongModel = Mongoose.model("Song", Song);

module.exports = SongModel;
