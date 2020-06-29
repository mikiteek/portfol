const {Router} = require("express");
const Project = require("../models/project")
const router = Router();

router.get("/", async (req, res) => {
  const projects = await Project.find();
  res.render("projects", {
    title: "Projects page",
    isProjects: true,
    projects
  });
});

router.get("/:id" ,async (req, res) => {
  const project = await Project.findById(req.params.id);
  res.render("project", {
    layout: "empty",
    title: `Project ${project.title}`,
    project
  });
});

router.get("/:id/edit", async (req, res) => {
  if (!req.query.allow) {
    return res.redirect("/");
  }
  const project = await Project.findById(req.params.id);
  res.render("project-edit", {
    title: `Edit ${project.title}`,
    project
  });
});

router.post("/edit", async (req, res) => {
  const {id} = req.body;
  delete req.body.id;
  await Project.findByIdAndUpdate(id, req.body);
  res.redirect("/projects");
});

router.post('/remove', async (req, res) => {
  try {
    await Project.deleteOne({_id: req.body.id});
    res.redirect("/project");
  }
  catch (e) {
    console.log(e)
  }
});

module.exports = router;