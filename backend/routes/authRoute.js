const express = require("express");
const { verify } = require("jsonwebtoken");
const router = express.Router();
const {userLogin,userRegister,verifyUser}  = require("../controller/authController")

//login
router.route("/login").post(userLogin);
router.route("/register").post(userRegister);

router.route("/:id/verify/:token").get(verifyUser);


module.exports = router;