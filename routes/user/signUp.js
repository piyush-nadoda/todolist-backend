const User = require("../../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { BCRYPT_SALT_ROUNDS, ACCESS_TOKEN_SECRET } = require("../../env");
const { v4: uuidv4 } = require("uuid");
uuidv4();

const signUp = async (req, res) => {
  const { name, email, password } = req.body;

  const userData = await User.findOne({ where: { email } });
  if (userData) {
    return res.send({
      message: "user already exists",
      success: false,
    });
  } else {
    const hashedPassword = bcrypt.hashSync(
      password,
      parseInt(BCRYPT_SALT_ROUNDS)
    );
    const userId = uuidv4();
    const userData = await User.create({
      userId: userId,
      name: name,
      email: email,
      password: hashedPassword,
    });

    const token = jwt.sign(
      {
        userId: userId,
        email: email,
        name: name,
      },
      ACCESS_TOKEN_SECRET,
      { expiresIn: 7 * 24 * 60 * 60 }
    );
    res.send({
      userId: userId,
      name: name,
      email: email,
      token: token,
      expiresIn: 7 * 24 * 60 * 60,
      success: true,
    });
  }
};

module.exports = signUp;
