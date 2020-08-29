const router = require("express").Router();
const userRoutes = require("./users");
const equipmentRoutes = require('./equipment')
const exerciseRoutes = require('./exercise')
router.use("/users", userRoutes);
router.use("/equipment", equipmentRoutes);
router.use("/exercise", exerciseRoutes);
module.exports = router;
