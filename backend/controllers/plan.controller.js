const { Plan } = require("../models");

exports.createPlan = async (req, res) => {
  try {
    const { title, description, price } = req.body;
    const plan = await Plan.create({ title, description, price });
    res.status(201).json(plan);
  } catch (err) {
    res.status(500).json({ error: "Failed to create plan" });
  }
};

exports.getPlans = async (_req, res) => {
  try {
    const plans = await Plan.findAll();
    res.json(plans);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch plans" });
  }
};
