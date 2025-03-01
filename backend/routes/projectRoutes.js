const express = require("express");
const { getProjects, createProject } = require("../controllers/projectController");

const router = express.Router();

// Define API routes
router.get("/", getProjects);  // GET all projects
router.post("/", createProject); // Create new project

module.exports = router;
