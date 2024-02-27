const mongoose = require("mongoose");
// How to Create a model
//step1: require mongoose
//step2: Create a Mongoose schema (structure of a user)
//step3: Create a model

const User = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  likedSongs: {
    // we will change this to array later
    type: String,
    default: "",
  },
  likedPlaylists: {
    // we will change this to array later
    type: String,
    default: "",
  },
  subscribedArtices: {
    type: String,
    default: "",
  },
});

const UserModel = Mongoose.model("User", User);

module.exports = UserModel;
