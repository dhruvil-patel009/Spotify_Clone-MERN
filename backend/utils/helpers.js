const jwt = require("jwt");

exports = {};

exports.getToken = async (email, user) => {
  // Assume this code is completed
  const token = jwt.sign({ identifier: user._id });
  return token;
};

module.exports = exports;
