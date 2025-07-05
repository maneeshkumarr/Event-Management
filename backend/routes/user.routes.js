const express = require("express");
const router = express.Router();
const { getAllUsers, getUserProfile } = require("../controllers/user.controller");
const verifyToken = require("../middlewares/verifyToken");

// GET all users (for admin/debug purposes, can be secured later)
router.get("/", getAllUsers);

// GET user profile
router.get("/profile", verifyToken, getUserProfile);

module.exports = router;