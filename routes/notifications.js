const { Router } = require("express");
const router = Router();

router.get("/notifications", (req, res) => {
  res.render("notifications", { title: "Notifications" });
});

module.exports = router;
