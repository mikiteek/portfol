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

module.exports = router;