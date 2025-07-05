module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define("Booking", {
    eventDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true, // Must be nullable for SET NULL to work
    },
    planId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });

  return Booking;
};
