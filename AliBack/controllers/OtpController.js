const express = require('express');
const otpGenerator = require('otp-generator');
const Otp = require('../models/Otp'); // Make sure to require the Otp model correctly
const router = express.Router();

// POST /otp
router.post("/otp", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    // Generate OTP
    const generatedOTP = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });

    // Save OTP to database
    const otpPayload = { email, otp: generatedOTP };
    await Otp.create(otpPayload);

    return res.status(200).json({
      success: true,
      message: "OTP sent successfully",
    });
  } catch (error) {
    console.error("Error in sending OTP:", error.message);

    return res.status(500).json({
      success: false,
      message: "Error in sending OTP",
    });
  }
});

module.exports = router;
