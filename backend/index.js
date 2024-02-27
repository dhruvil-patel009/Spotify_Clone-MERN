const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const port = 8000;

// connect mongodb to our node app
// mongoose.connect () takes 2 argument  : 1. Which db to connect to (db url),2. 2.connection options
mongoose
  .connect(
    "mongodb+srv://dhruvilp900:" +
      process.env.MONGO_PASSWORD +
      "@cluster0.2oudxyv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((x) => {
    console.log("Connected to Mongo!");
  })
  .catch((err) => {
    console.log("Error connecting to Mongo");
  });

app.get("/", (req, res) => {
  // req is the request object
  // res is the response object

  res.send("Spotify");
});

app.listen(port, () => {
  console.log("Port is " + port);
});
