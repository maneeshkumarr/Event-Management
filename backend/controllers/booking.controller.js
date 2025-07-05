const { Booking } = require("../models");

exports.createBooking = async (req, res) => {
  try {
    const { planId, eventDate } = req.body;
    const booking = await Booking.create({
      planId,
      eventDate,
      userId: req.user.id,
    });
    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ error: "Failed to create booking" });
  }
};

exports.getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.findAll({ where: { userId: req.user.id } });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch bookings" });
  }
};
