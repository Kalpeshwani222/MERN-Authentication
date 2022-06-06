const express = require("express");
const router = express.Router();
const {userLogin,userRegister,verifyUser,resetPassword}  = require("../controller/authController")

//login
router.route("/login").post(userLogin);
router.route("/register").post(userRegister);

//verify email
router.route("/:id/verify/:token").get(verifyUser);

// //reset passwords
// router.route("/reset-password").post(resetPassword);


module.exports = router;