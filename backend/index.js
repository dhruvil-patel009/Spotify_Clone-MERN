const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;
const passport = require("passport");
const User = require("./models/User");
const authRoutes = require("./routes/auth");
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

// setup password jwt
let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET_KEY;
console.log(process.env.SECRET_KEY);
passport.use(
  new JwtStrategy(opts, function (jwt_payload, done) {
    User.findOne({ id: jwt_payload.sub }, function (err, user) {
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
        // or you could create a new account
      }
    });
  })
);

app.get("/", (req, res) => {
  // req is the request object
  // res is the response object

  res.send("Spotify");
});

app.listen(port, () => {
  console.log("Port is " + port);
});

// 8   3:12
