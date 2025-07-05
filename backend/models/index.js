const Sequelize = require("sequelize");
const sequelize = require("../config/db");

// Import models
const User = require("./user.model")(sequelize, Sequelize);
const Booking = require("./booking.model")(sequelize, Sequelize);
const Plan = require("./plan.model")(sequelize, Sequelize);

// Set up associations with foreign key constraints
User.hasMany(Booking, {
  foreignKey: {
    name: "userId",
    allowNull: true,
  },
  onDelete: "SET NULL",
  constraints: true,
});
Booking.belongsTo(User, {
  foreignKey: {
    name: "userId",
    allowNull: true,
  },
  onDelete: "SET NULL",
  constraints: true,
});

Plan.hasMany(Booking, {
  foreignKey: {
    name: "planId",
    allowNull: true,
  },
  onDelete: "SET NULL",
  constraints: true,
});
Booking.belongsTo(Plan, {
  foreignKey: {
    name: "planId",
    allowNull: true,
  },
  onDelete: "SET NULL",
  constraints: true,
});

// Export everything
const db = {
  Sequelize,
  sequelize,
  User,
  Booking,
  Plan,
};

module.exports = db;
