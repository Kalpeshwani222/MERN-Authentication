const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const generateToken = require("../utils/generateToken");
const Token = require("../model/token");
const crypto = require("crypto");

const sendmail = require("../utils/EmailSend");

//login
const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    //email
    if (!user) {
      return res.status(401).json({ message: "Email not found" });
    }

    //password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Password does not match" });
    }

    if (!user.verified) {
      let token = await Token.findOne({ userId: user._id });

      if (!token) {
        return res.status(400).send({ message: "Please register first" });
      }
      return res
        .status(400)
        .send({ message: "An Email sent to you account please verify" });
    }

    return res.json({
      message: "Login Successfully",
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } catch (error) {
    return res.status(400).json({ status: false, message: "Error Occured" });
  }
};

//register
const userRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const emailCheck = await User.findOne({ email });

    if (emailCheck) {
      return res.status(409).json({ message: "Email already used" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    //save user
    let user = await User.create({
      name,
      email,
      password: hashPassword,
    });

    //save token to database
    const token = await new Token({
      userId: user._id,
      token: crypto.randomBytes(32).toString("hex"),
    }).save();

    const url = `${process.env.BASE_URL}api/auth/${user._id}/verify/${token.token}`;

    //email send
    const sgMail = require("@sendgrid/mail");
    sgMail.setApiKey(process.env.API_KEY);

    sendmail({
      from: "noreply.newsapplication@gmail.com",
      to: user.email,
      subject: "Verify Your Email Account",
      html: url,
    });

    return res.status(201).json({
      message: "Email send success,please verify the email",
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    return res.status(400).json({ status: false, message: "Error Occured" });
  }
};

const verifyUser = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });

    if (!user) {
      return res.status(400).send({ message: "Invalid link" });
    }

    const token = await Token.findOne({
      userId: user._id,
      token: req.params.token,
    });

    if (!token) {
      return res.status(400).send({ message: "Invalid Token" });
    }

    //update to true
    await User.updateOne({ _id: user._id, verified: true });

    //delete token
    await token.remove();

    res.status(200).send({ message: "Success" });
  } catch (error) {
    res.status(500).send({ message: "Error" });
  }
};

module.exports = { userLogin, userRegister, verifyUser };
