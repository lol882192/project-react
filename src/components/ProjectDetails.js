import React, { useState, useEffect } from 'react';
import api from "../api/axiosConfig";
import Hero from './hero/Hero'; // Import the Hero component

const ProjectDetails = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await api.get(`/api/v1/projects`); // Fetch all projects
        setProjects(response.data);
        setSelectedProject(response.data[0]); // Set the first project as the initial selected project
      } catch (err) {
        setError("Error fetching project data");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleProjectChange = (project) => {
    setSelectedProject(project);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!selectedProject) return <div>No project data found</div>;

  return (
    <div>
      <Hero projects={projects} onProjectChange={handleProjectChange} /> {/* Pass the handler to Hero */}
      <h1>{selectedProject.projectTitle}</h1>
      <p>Project ID: {selectedProject.id.date}</p>
      <p>Website Name: {selectedProject.websiteName}</p>
      <p>Project Web Link: <a href={selectedProject.projectWebLink}>{selectedProject.projectWebLink}</a></p>
      <img src={selectedProject.imageLink} alt="Project" style={{ maxWidth: '100%', height: 'auto' }} />
      <p>Description: {selectedProject.description}</p> {/* Add project description */}
      {/* You can add more information as needed */}
    </div>
  );
};

export default ProjectDetails;
