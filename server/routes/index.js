const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
require("dotenv").config();
router.use("/api", apiRoutes);

router.use(function(req, res) {//catch all - return the react app
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

module.exports = router;