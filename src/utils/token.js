const jwt = require("jsonwebtoken");

const createToken = (user) => {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE_AT
  });
};

module.exports = createToken;
