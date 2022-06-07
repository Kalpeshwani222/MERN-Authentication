const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const Token = require("../model/token");
const crypto = require("crypto");
const resetpassToken = require("../model/resetpass");

const sendmail = require("../utils/EmailSend");

//send reset password link
const resetPassword = async (req, res) => {
  try {
    const { email } = req.body;

  
    const user = await User.findOne({ email });
    //user not exists
    if (!user) {
      return res
        .status(409)
        .send({ message: "User with given email does not exists!" });
    }

    const tokenCheck = await resetpassToken.findOne({ useridid: user._id });
    //token alread exists then
    if (tokenCheck) {
      return res
        .status(409)
        .json({ message: "Token aleready send,please check your email" });
    }

    //save token to database
    const token = await new resetpassToken({
      useridid: user._id,
      resettoken: crypto.randomBytes(32).toString("hex"),
    }).save();

    //
    //email send
    const sgMail = require("@sendgrid/mail");
    sgMail.setApiKey(process.env.API_KEY);

    const url = `http://localhost:3000/new-pass/${user._id}/${token.resettoken}`;
    console.log(url);
    sendmail({
      from: process.env.FROM_EMAIL,
      to: user.email,
      subject: "Password Reset",
      html: `<p>You requested for password reset<p/>
             ${url}
         `,
    });

    return res.status(200).json({
      message:
        "Password reset link sent to your email account,please Check the email",
    });
  } catch (error) {
    return res.status(500).send({ message: "Error" });
  }
};

//verify the reset password link
const verifyResetPass = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });

    if (!user) {
      return res.status(409).send({ message: "Invalid URL!" });
    }

    const token = await resetpassToken.findOne({
      useridid: user._id,
      resettoken: req.params.token,
    });

    if (!token) {
      return res.status(400).send({ message: "Invalid Token" });
    }

    const hashPassword = await bcrypt.hash(req.body.password, 10);

    await User.updateOne(
      { _id: user._id }, // Filter
      { password: hashPassword } // Update
    );

    //delete token
    await resetpassToken.remove();

    return res.status(200).json({
      message: "Password Change Successfully",
    });
  } catch (error) {
    console.log(error);
    // return res.status(500).send({ message: "Sothing Error Occured" });
  }
};



module.exports = { resetPassword, verifyResetPass };
