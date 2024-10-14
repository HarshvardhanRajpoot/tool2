const express = require('express');
const Project = require('../models/Project');

const router = express.Router();

// Create a new project
router.post('/projects', async (req, res) => {
  const { title, description } = req.body;
  const project = new Project({ title, description });
  await project.save();
  res.json(project);
});

// Get all projects
router.get('/projects', async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

// Add a task to a project
router.post('/projects/:id/tasks', async (req, res) => {
  const { name, assignedTo, deadline } = req.body;
  const project = await Project.findById(req.params.id);
  project.tasks.push({ name, assignedTo, deadline });
  await project.save();
  res.json(project);
});

module.exports = router;
