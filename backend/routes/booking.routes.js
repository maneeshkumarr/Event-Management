const router = require("express").Router();
const { createBooking, getMyBookings } = require("../controllers/booking.controller");
const verifyToken = require("../middlewares/verifyToken");

router.post("/",        verifyToken, createBooking);
router.get("/my",       verifyToken, getMyBookings);

module.exports = router;
