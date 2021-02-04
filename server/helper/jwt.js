var jwt = require("jsonwebtoken");

function createToken(obj) {
  console.log(obj);
  console.log(process.env.SECRET_KEY);
  var token = jwt.sign(obj, process.env.SECRET_KEY);
  console.log(token);
  return token;
}

module.exports = {
  createToken,
};
