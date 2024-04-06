const { Router } = require("express");
const router = Router();

router.get("/welcome", (req, res) => {
  res.render("welcome", { title: "Welcome" });
});

module.exports = router;
