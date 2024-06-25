import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from "../api/axiosConfig";

const ProjectDetails = () => {
  const { projectID } = useParams();
  const [projectData, setProjectData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await api.get(`/api/v1/projects/${projectID}`); // Update API endpoint
        setProjectData(response.data);
      } catch (err) {
        setError("Error fetching project data");
      } finally {
        setLoading(false);
      }
    };

    fetchProjectData();
  }, [projectID]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!projectData) return <div>No project data found</div>;

  return (
    <div>
      <h1>{projectData.projectTitle}</h1>
      <p>Project ID: {projectData.id.date}</p>
      <p>Website Name: {projectData.websiteName}</p>
      <p>Project Web Link: <a href={projectData.projectWebLink}>{projectData.projectWebLink}</a></p>
      <img src={projectData.imageLink} alt="Project" style={{ maxWidth: '100%', height: 'auto' }} />
      {/* You can add more information as needed */}
    </div>
  );
};

export default ProjectDetails;
