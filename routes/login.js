const {Router} = require("express");
router = Router();

router.get("/", (req, res) => {
  res.render("auth/login", {
    title: "Login page"
  })
})

module.exports = router;