const { User } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const sendEmail = require("../utils/sendEmail");


exports.signup = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    // Check if user exists
    const existing = await User.findOne({ where: { email } });
    if (existing) return res.status(400).json({ error: "User already exists" });

    // Generate OTP (6-digit)
    const otp = crypto.randomInt(100000, 999999).toString();

    // Set OTP expiry (5 mins)
    const otpExpiry = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes

    // Create user with OTP and expiry
    const newUser = await User.create({
      fullName,
      email,
      password,
      otp,
      otpExpiry,
      isVerified: false,
    });

    // 📨 Here you would send the OTP to the user's email using nodemailer (optional)
    await sendEmail(email, "Your OTP for DreamWed", `Your OTP is: ${otp}`);


    res.status(201).json({
      message: "User created. Please verify OTP sent to your email.",
      userId: newUser.id,
    });

  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ error: "Signup failed" });
  }
};


exports.verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) return res.status(404).json({ error: "User not found" });
    if (user.isVerified) return res.status(400).json({ error: "User already verified" });

    if (user.otp !== otp) return res.status(400).json({ error: "Invalid OTP" });

    if (new Date() > user.otpExpiry) {
      return res.status(400).json({ error: "OTP expired" });
    }

    // Update user to verified
    user.isVerified = true;
    user.otp = null;
    user.otpExpiry = null;
    await user.save();

    res.json({ message: "✅ Email verified successfully" });

  } catch (err) {
    console.error("OTP verification error:", err);
    res.status(500).json({ error: "OTP verification failed" });
  }
};
