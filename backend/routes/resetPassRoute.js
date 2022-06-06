const express = require("express");
// const { verify } = require("jsonwebtoken");
const router = express.Router();
const {resetPassword,verifyResetPass}  = require("../controller/resetPassController")



//send reset password link
router.route("/reset-password").post(resetPassword);

//verify reset pass token 
router.route("/:id/:token").post(verifyResetPass);




module.exports = router;