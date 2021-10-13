const User = require("../../models/user");
const jwt = require("jsonwebtoken");
const { ACCESS_TOKEN_SECRET } = require("../../env");
const bcrypt =  require('bcrypt')

const signUp = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if (user) {
  let isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = jwt.sign(
        {
          userId: user.userId,
          email: user.email,
          name: user.name,
        },
        ACCESS_TOKEN_SECRET,
        { expiresIn: 7 * 24 * 60 * 60 }
      );
      res.send({
        userId: user.userId,
        name: user.name,
        email: user.email,
        token: token,
        expiresIn: 7 * 24 * 60 * 60,
        success: true,
      });
    } else {
      res.send({
        message: "password incorrect",
      });
    }
  } else {
    res.send({
      message: "user not found",
    });
  }
};

module.exports = signUp;
