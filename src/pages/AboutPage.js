import React from 'react';
import fencing from '../images/fencing.jpg';
import '../styles/AboutPage.css';

function AboutPage() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Me</h1>
      </div>
      
      <div className="about-content">
        <div className="text-section">
          <div className="about-card">
            <h2>Current</h2>
            <p>
              I am a CS grad student at <a href="https://tech.cornell.edu/" target="_blank" rel="noopener noreferrer">Cornell</a> living in NYC, 
              where I'm focusing on Machine Learning Engineering, Human-Computer Interaction, and Product Management.
            </p>
          </div>

          <div className="about-card">
            <h2>Interests</h2>
            <p>
              I spend a lot of my free time fencing. I was a foil fencer on{' '}
              <a href="https://goprincetontigers.com/sports/mens-fencing" target="_blank" rel="noopener noreferrer">
                Princeton's Varsity Team
              </a>{' '}
              - one of the best performing D1 programs in the country.
            </p>
            <p>
              Beyond fencing, I'm passionate about hiking, traveling, photography, and discovering new music. 
            </p>
          </div>

          <div className="about-card">
            <h2>Connect</h2>
            <p>
              I'm always open to discussing new opportunities, sharing ideas, or just having an interesting conversation. 
              For resume access, please reach out via email or LinkedIn.
            </p>
            <div className="contact-links">
              <a href="mailto:jglevy@alumni.princeton.edu">Email</a>
              <span>•</span>
              <a href="https://www.linkedin.com/in/jasper-levy-0a1b701a5/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="image-section">
          <img src={fencing} alt="Jasper Levy Fencing" className="profile-image" />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;