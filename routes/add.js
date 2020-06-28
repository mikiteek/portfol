const {Router} = require("express");
const Project = require("../models/project");
const router = Router();

router.get("/", (req, res) => {
  res.render("add", {
    title: "Add a project",
    isAdd: true,
  });
});

router.post("/",async (req, res) => {
  const project = new Project(req.body.title, req.body.image, req.body.description, req.body.linkPage, req.body.linkSource, req.body.author);
  await project.save();
  res.redirect("/projects");
});




module.exports = router;