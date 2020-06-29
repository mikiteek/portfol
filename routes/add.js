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
  const project = new Project({
    title: req.body.title,
    image: req.body.image,
    description: req.body.description,
    author: req.body.author,
    linkPage: req.body.linkPage,
    linkSource: req.body.linkSource,
  });
  try {
    await project.save();
    res.redirect("/projects");
  }
  catch (e) {
    console.log(e);
  }
});




module.exports = router;