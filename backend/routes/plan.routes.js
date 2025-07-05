const router = require("express").Router();
const { createPlan, getPlans } = require("../controllers/plan.controller");

router.post("/", createPlan);   // public (or protect later)
router.get("/",  getPlans);

module.exports = router;
