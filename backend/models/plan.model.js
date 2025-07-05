module.exports = (sequelize, DataTypes) => {
  const Plan = sequelize.define("Plan", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: DataTypes.TEXT,
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  });
  return Plan;
};
