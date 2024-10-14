const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: String,
  assignedTo: String,
  status: { type: String, default: 'Todo' },
  deadline: Date,
});

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  tasks: [taskSchema],
});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;
