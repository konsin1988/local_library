const { Router } = require("express");
const router = Router();

router.get("/reserve", (req, res) => {
  res.render("reserve", { title: "Reserve" });
});

module.exports = router;
