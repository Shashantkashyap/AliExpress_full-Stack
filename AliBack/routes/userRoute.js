const express = require("express");
const { body } = require("express-validator");
const authController = require("../controllers/authController");

const router = express.Router();

// Signup Route
router.post(
  "/signup",
  [
    body("name").not().isEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Invalid email"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
    body("otp").isLength({ min: 6, max: 6 }).withMessage("Invalid OTP"),
  ],
  authController.signup
);

// Login Route
router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid email"),
    body("password").not().isEmpty().withMessage("Password is required"),
  ],
  authController.login
);

module.exports = router;
