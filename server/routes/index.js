const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const passport = require("passport");
require("dotenv").config();
router.use("/api", apiRoutes);
router.post('/auth/local', passport.authenticate("local"), function (req, res) {//when route called it uses the passport.authenticate middleware before running the callback function
  res.json({DOB: req.user.DOB,firstName: req.user.firstName, lastName: req.user.lastName, gender: req.user.gender,height: req.user.height,
    ownedEquipment: req.user.ownedEquipment,username: req.user.username, weight: req.user.weight, user_id: req.user.user_id});//returns the user from the authenticate function
});
router.get("/logout", function (req, res) {//Logs out from the current passport session
  req.logout();
  res.redirect("/");
});
router.use(function(req, res) {//catch all - return the react app
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

module.exports = router;