const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
//telling express router to use api folder
router.use("/api", apiRoutes);

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/public/index.html"));
  });
  module.exports = router;