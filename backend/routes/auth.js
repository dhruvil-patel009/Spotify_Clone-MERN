const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const { getToken } = require("../utils/helpers");
// This Post Route will help to Register a user

router.post("/register", async (req, res) => {
  // This Code when the run when the register api is called as a post request

  // My re.body will be of the format {email,password,firstname,lastname,username}

  const { email, password, firstname, lastname, username } = req.body;

  // step 2: Does a user already have existing ? If Yes, we throw an error

  const user = await User.findOne({ email: email });
  if (user) {
    return (
      res
        // status code by default is 200
        .status(403)
        .json({ error: "A User With this Email already exists" })
    );
  }

  // This is a valid request

  // step 3: Create a new user in DB
  // step 3.1: we do not store password in the plain text
  //  xyz: we convert the plain text password to a hash
  const hashedPassword = bcrypt.hash(password, 10);
  const newUserData = {
    email,
    password: hashedPassword,
    firstname,
    lastname,
    username,
  };
  const newUser = await User.create(newUserData);

  // step 4: we want to create the token to return to the user
  const token = await getToken(email, newUser);

  // step 5: Return the result to the user
  const userToReturn = { ...newUser.toJSON(), token };
  delete userToReturn.password;
  return res.status(200).json(userToReturn);
});
