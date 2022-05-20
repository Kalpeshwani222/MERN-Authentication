const express = require("express");
const router = express.Router();
const {addComments}  = require("../controller/commentController")

//comments
router.route("/add-comment").post(addComments);


module.exports = router;