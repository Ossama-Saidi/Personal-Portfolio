// Mongoose Schema
// This defines the schema for 
// the projects in your MongoDB database.

const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  link: String,
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
