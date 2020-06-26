const {Router} = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.render("news", {
    title: "News page",
    isNews: true
  });
});

module.exports = router;