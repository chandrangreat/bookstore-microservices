const express = require("express");
const router = express.Router();

router.put("/profile/:id/update", (req, res) => {
  res.send("Update profile");
});

module.exports = router;
