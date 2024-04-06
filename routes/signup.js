const { Router } = require("express");
const router = Router();

router.get("/signup", (req, res) => {
  res.render("signup", { title: "Sign up" });
});

module.exports = router;
