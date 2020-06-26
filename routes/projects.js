const {Router} = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.render("projects", {
    title: "Projects page",
    isProjects: true
  })
});

module.exports = router;