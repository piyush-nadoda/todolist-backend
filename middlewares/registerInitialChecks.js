const emailValidator = require("../utils/emailValidate");
const passwordValidator = require("../utils/passwordValidate");

const registerInitialCheck = (req, res, next) => {
  const { name, email, password, confirmPassword } = req.body;
  if (!name)
    return res.send({ message: "Please provide name", success: false });
  if (!email)
    return res.send({ message: "Please provide email", success: false });
  if (!password)
    return res.send({ message: "Please provide password", success: false });
  if (!emailValidator(email))
    return res.send({ message: "Email invalid", success: false });
  if (!passwordValidator(password))
    return res.send({
      message: "Password invalid",
      success: false,
    });
  if (password !== confirmPassword)
    return res.send({ message: "Password doesn't match", success: false });
  next();
};

module.exports = registerInitialCheck;