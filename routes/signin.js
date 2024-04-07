const { Router } = require("express");
const router = Router();

router.get("/signin", (req, res) => {
  res.render("signin", { title: "Sign in" });
});

module.exports = router;
