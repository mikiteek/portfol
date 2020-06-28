const {Router} = require("express");
const Project = require("../models/project")
const router = Router();

router.get("/", async (req, res) => {
  const projects = await Project.getAll();
  res.render("projects", {
    title: "Projects page",
    isProjects: true,
    projects
  });
});

module.exports = router;