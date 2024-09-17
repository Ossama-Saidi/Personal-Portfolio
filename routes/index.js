// Routing
// This file defines the routes for my web pages.


const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// Home route
router.get('/', async (req, res) => {
  const projects = await Project.find();
  res.render('index', { projects });
});

router.get('/', async (req, res) => {
  const projects = await Project.find();
  res.render('index', { projects });
});

module.exports = router;
