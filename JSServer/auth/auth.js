const jwt = require("jsonwebtoken");
//token generator
function createToken(user) {
  const secret = "secret we should probably put in a dot env file";
  const payload = {
    subject: user.id,
    username: user.usernameInput
  };
  const options = {
    expiresIn: "1h"
  };
  return jwt.sign(payload, secret, options);
}
// authorize middleware function
function authorize(req, res, next) {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(
      token,
      "secret we should probably put in a dot env file",
      (error, decodedToken) => {
        if (error) {
          return res.status(401).json({ error: "invalid token" });
        }
        req.decodedToken = decodedToken;
      }
    );
  } else {
    res.status(401).json({ message: "no token provided" });
  }
}

module.exports = { createToken, authorize };
