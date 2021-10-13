const jwt = require("jsonwebtoken");
const { ACCESS_TOKEN_SECRET } = require("../env");

const checkIfSignedIn = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  try {
    const jwtToken = authHeader.replace("Bearer ", "").replace("Bearer", "");

    jwt.verify(jwtToken, ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).send({
          success: false,
          message: "token not valid",
        });
      } else {
        req.user = {
          userId: decoded.userId,
          email: decoded.email,
          name: decoded.name,
        };
        return next();
      }
    });
  } catch (err) {
    res.status(401).send({
      success: false,
      message: "token not valid",
    });
  }
};

module.exports = checkIfSignedIn;
