import React from 'react';
import aiHead from '../images/tumblr_74b01053f0b8a08d8eb2607ee88e3f78_e1e0d81a_540.webp';
import headShot from '../images/headshot.png'
import trek from '../images/TrekAI_logo_white_bg.png'
import cluster from '../images/Cluster2.png'
import vital from '../images/VM2.png'
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="home-container">
        <div className="name-title-container">
        <span className="name">JASPER LEVY</span>
        <span className="cs"> PRINCETON COMPUTER SCIENCE</span>
        <span className="title"></span>
      </div>
        <img src={aiHead} alt="GIF" className="centered-gif" />
      <div className="content-container">
      </div>
      <div className="two-column-container">
        <div className="text-column">
          <p>I am a senior studying computer science at Princeton University. I hold a certificate (minor) in Statistics and Machine Learning. I have an expected graduation date of May 2024. </p>
          <p>I have experience in software development, academic research, modern machine learning techniques, and leadership through professional and volunteer work. Some more specific interests of mine include GIS applications, decentralized systems, technology policy, and healthcare innovation.</p>
          <p>I love geography and hiking - so much so that I started a new project. I am currently working on TrekAI, a budget-tailored hiking recommendation platform.</p>
        </div>
        <div className="image-column">
          <img src={headShot} alt="Description" width="200" height="auto" />
        </div>
      </div>
      <div className="three-column-container">
        <div className="column">
        <Link to="./p2">
          <div className="image-container">
            <img src={vital} alt="VitalMap" width="200" height="auto"  />
            <div className="overlay">
              <div className="text" id="hide-on-small"> I collaborated with Princeton Students for Reproductive Justice and worked closely with a team of 4 other Princeton undergrads to build VitalMap, a platform that provides users with locations and stock of health products on campus.
This Web-App integrates Python and PostgreSQL for backend functions and JavaScript, Bootstrap, HTML, CSS on the frontend. 
</div>
            </div>
          </div>
        </Link>
        </div>
        <div className="column">
          <a href='https://trekai-beta-landing.vercel.app/' target="_blank" rel="noopener noreferrer">
              <div className="image-container">
                <img src={trek} alt="TrekAI" width="200" height="auto" />
                <div className="overlay">
                    <div className="text" id="hide-on-small">TrekAI is a dynamic platform designed to assist travelers in discovering hiking recommendations tailored to their budget preferences. This product
                    integrates openAI's API for trip recommendation and is built on React.js, Flask, and AWS. TrekAI is in progress as of December 2023. Click here to view pre-launch page.</div>
                </div>
              </div>
            </a>
        </div>
        <div className="column">
        <Link to="/research">
          <div className="image-container">
            <img src={cluster} alt="Research" width="200" height="auto" />
            <div className="overlay">
              <div className="text" id="hide-on-small">At Princeton, I have had the priveledge of conducting research as a student and as a research associate in the Department of African American Studies. My research spans genre and mood classification of music based on psychological models, LLM policy in higher education, and disparities in public broadband access.
              Click here to learn more. </div>
            </div>
          </div>
        </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;