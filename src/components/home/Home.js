import React from 'react';
import './Home.css';
import { Link, Element } from 'react-scroll';
import Hero from '../hero/Hero'; // Import the Hero component

const Home = ({ projects }) => {
  // Sample Latin filler text for the About Me section
  const latinText = `I am a rising junior in computer engineering with a passion for developing innovative
    solutions to challenging problems. My journey has been filled with exciting projects
    and continuous learning. The website is still under maintenence due to bugs, and will be updated soon!`;

  return (
    <div className="home-container">
      {/* Hero Section */}
      <Element name="hero" className="hero-section">
        {/* Video Background */}
        <video autoPlay loop muted playsinline className="video-background">
          <source src={require('./about-background.mp4')} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="hero-content">
          <h1 className="home-title">Welcome to My Portfolio</h1>
          <p className="home-subtitle">Explore my projects and learn more about my journey.</p>
          {/* Scroll Link to About Section */}
          <Link
            className="scroll-link"
            to="about"
            smooth={true}
            duration={100}
          >
            Learn More
          </Link>
        </div>
      </Element>

      {/* About Section */}
      <Element name="about" className="about-section">
        <div className="about-content">
          <h2>About Me</h2>
          <p className="about-text">
            {latinText}
          </p>
          {/* Scroll Link to Projects Section */}
          <Link
            className="scroll-link"
            to="projects"
            smooth={true}
            duration={1000}
          >
            View Projects
          </Link>
        </div>
      </Element>

      {/* Projects Section */}
      <Element name="projects" className="projects-section">
        <h2>Projects</h2>
        {/* Replace with the Hero carousel */}
        <Hero projects={projects} />
      </Element>
    </div>
  );
};

export default Home;
