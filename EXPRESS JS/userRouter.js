const express = require("express");
const router = express.Router();
const registerUser = require("./userController");
router.route("/userdata").get(registerUser);
router.route("/register").post(registerUser);
router.route("/product/3").put(registerUser);
router.route("/product").delete(registerUser);

module.exports = router;