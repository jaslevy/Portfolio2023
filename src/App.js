import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import HomePage from './pages/HomePage.js';
import AboutPage from './pages/AboutPage.js';
import ProjectOne from './projects/ProjectOne.js';
import ProjectTwo from './projects/ProjectTwo.js';
import ProjectThree from './projects/ProjectThree.js';
import CourseworkPage from './pages/CourseworkPage.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import CustomNavLink from './CustomNavLink';
import LoadingScreen from './pages/LoadingScreen.js';
import './css/App.css';
import GalleryPage from './pages/galleryPage.js';


function App() {
  const [showHomePage, setShowHomePage] = useState(false);

  const handleFadeOutCompleted = () => {
    setShowHomePage(true);
  };

  return (
    <Router>
      {!showHomePage ? (
        <LoadingScreen onFadeOutCompleted={handleFadeOutCompleted} />
      ) : (
        <div className="fade-in">
          <div className="custom-navbar">
            <Navbar expand="lg" className="justify-content-between">
              <Nav className="ml-auto">
                <CustomNavLink as={Link} to="/">Home</CustomNavLink>
                <CustomNavLink as={Link} to="/research">Research</CustomNavLink>
                <CustomNavLink as={Link} to="/coursework">Coursework</CustomNavLink>
                <CustomNavLink as={Link} to="/gallery">Gallery</CustomNavLink>
                <CustomNavLink as={Link} to="/about">About</CustomNavLink>
                
                
              </Nav>
              <div className="icons">
                <a href="https://www.linkedin.com/in/jasper-levy-956722208/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </a>
                <a href="https://www.github.com/jaslevy" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
                <a href="mailto:jasplevy@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} size="lg" />
                </a>
              </div>
            </Navbar>
          </div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/p1" element={<ProjectOne />} />
            <Route path="/p2" element={<ProjectTwo />} />
            <Route path="/research" element={<ProjectThree />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/coursework" element={<CourseworkPage />} />
          </Routes>
          <div class="acknowledgment">
            © 2023 inspired by <a href="https://www.tedsumers.info" target="_blank" rel="noopener noreferrer">Ted Sumers Site</a> and designs are from <a href="https://patakk.tumblr.com" target="_blank" rel="noopener noreferrer">PATAKK on Tumblr</a>.
          </div>
        </div>
      )}
    </Router>
  );
}

export default App;
