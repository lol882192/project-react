import './App.css';
import api from "./api/axiosConfig";
import { useState, useEffect } from 'react';
import Layout from './components/layout';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import ProjectDetails from './components/ProjectDetails'; // Import the ProjectDetails component

// Importing a spinner library (example: react-spinners)
import { css } from '@emotion/react';
import ClipLoader from 'react-spinners/ClipLoader';

function App() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading status
  const [delay, setDelay] = useState(true); // State to track delay

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await api.get("/api/v1/projects");
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false); // Update loading state regardless of success or failure
      }
    };

    fetchProjects();

    const delayTimeout = setTimeout(() => {
      setDelay(false); // Update delay state after 2 seconds
    }, 1250); // Set the delay duration (e.g., 1250ms = 1.25 seconds)

    return () => clearTimeout(delayTimeout); // Cleanup timeout on unmount
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  return (
    <div className="App">
      {/* Conditionally render LoadingIndicator based on loading and delay state */}
      {loading || delay ? (
        <LoadingIndicator />
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home projects={projects} />} />
            <Route path="project/:projectID" element={<ProjectDetails />} />
            {/* Add more routes as needed */}
          </Route>
        </Routes>
      )}
    </div>
  );
}

const LoadingIndicator = () => (
  <div className="loading-container" css={loadingContainerStyle}>
    <div className="loading-content" css={loadingContentStyle}>
      <ClipLoader color={"#36D7B7"} loading={true} css={override} size={100} />
      <p>Connecting to web service (can take up to a minute)</p>
    </div>
  </div>
);

// CSS override for the spinner and message (using emotion)
const override = css`
  display: block;
  margin: 0 auto;
`;

// Additional CSS for centering loading content
const loadingContainerStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const loadingContentStyle = css`
  text-align: center;
`;

export default App;
