import React, { useEffect } from 'react';
import { FaProjectDiagram, FaHome, FaEnvelope } from 'react-icons/fa';
import './Header.css';

const Header = ({ projects = [] }) => { // Default to empty array if projects is undefined
    useEffect(() => {
        // Additional side effects if needed
    }, [projects]);

    return (
        <nav className="navbar-container">
            <a className="logo" href="/">
                <FaProjectDiagram /> Eshwaran Krishnan
            </a>
            <div className="nav-links">
                <a className="nav-link" href="/"><FaHome /> Home</a>
                <a className="nav-link" href="#/projects"><FaProjectDiagram /> Projects</a>
                <a className="nav-link" href="/contact"><FaEnvelope /> Contact</a>
            </div>
            <div className="footer">
                <p>&copy; 2024 Eshwaran Krishnan</p>
            </div>
        </nav>
    );
};

export default Header;
