const {Router} = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.render("add", {
    title: "Add a project",
    isAdd: true,
  });
});

router.post("/", (req, res) => {
  res.redirect("/projects");
});




module.exports = router;