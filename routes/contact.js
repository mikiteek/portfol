const {Router} = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.render("contact", {
    title: "Contact page",
    isContact: true
  });
});

module.exports = router;