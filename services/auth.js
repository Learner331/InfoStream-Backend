const JWT = require("jsonwebtoken");

const secretKey = "cK£2fdg45$V+Xv`Mc8__R)F8H%3245'xE8}2|}H5MOD0#$#%fgh;*/*-fdv";

function createTokenForUser(user) {
  const payload = {
    _id: user._id,
    name: user.name,
    email: user.email,
    password: user.password,
  };
  console.log(payload);
  const token = JWT.sign(payload, secretKey);
  return token;
}

function validateToken(token) {
  const payload = JWT.verify(token, secretKey);
  return payload;
}

module.exports = {
  createTokenForUser,
  validateToken,
};
