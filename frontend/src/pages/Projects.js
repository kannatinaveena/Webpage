import React, { useEffect, useState } from "react";
import axios from "axios";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("/api/projects")
      .then(response => {
        console.log("Projects Data:", response.data);
        setProjects(response.data); // Store API response in state
      })
      .catch(error => {
        console.error("Error fetching projects:", error);
      });
  }, []);

  return (
    <div>
      <h1>Projects</h1>
      {projects.length === 0 ? (
        <p>Loading projects...</p>
      ) : (
        <ul>
          {projects.map(project => (
            <li key={project._id}>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Projects;
