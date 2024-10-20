const express = require("express");
const router = express.Router();

router.post("/register", (req, res) => {
  console.log("Registration");
  res.send("Registration");
});

module.exports = router;
