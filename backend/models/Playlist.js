const mongoose = require("mongoose");
// How to Create a model
//step1: require mongoose
//step2: Create a Mongoose schema (structure of a user)
//step3: Create a model

const Playlist = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },

  owner: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
  //   1 playlist mei song konsa hain
  //   2 playlist collabrate
  songs: [
    {
      type: String,
      ref: "song",
    },
  ],

  collaborators: [
    {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
  ],
});

const PlaylistModel = Mongoose.model("Playlist", Playlist);

module.exports = PlaylistModel;
