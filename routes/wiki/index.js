const express = require("express");
const router = express.Router();

router.use("/projects", require("./projects.js"));

module.exports = router;
