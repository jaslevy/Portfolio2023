import React from 'react';
import trekAILogo from '../images/TREK AI LOGO.svg'
import neo4jLogo from '../images/neo4j_logo_globe.png'
import headShot from '../images/headshot.png'
import EthCasino from '../images/sepoliaHomepage.png'
import GallerySquare from '../images/GallerySquare.png'
import GraySquare from '../images/GraySquare.jpg'
import hpTechVenturesLogo from '../images/HPTechVentures.png'
import trek from '../images/TrekAI_logo_white_bg.png'
import cluster from '../images/Cluster2.png'
import vital from '../images/VM2.png'
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="home-container" >
        <div className="name-title-container">
        <span className="name">JASPER LEVY</span>
        <span className="cs"> PRINCETON COMPUTER SCIENCE</span>
        <span className="title"></span>
      </div>
        <div className="image-wrapper">
          <img src={headShot} alt="Cityscape" style={{ width: "200px", height: "auto", paddingBottom: '100px', paddingTop: '100px', position: 'center' }}/>
        </div>
      <div className="two-column-container">
       
        <div className="text-column">
         
          <p>
            <strong className="section-title">Current Endeavors</strong>
            <div style={{ paddingLeft: '20px' }}>
              <img src={neo4jLogo} alt="Neo4j Logo" style={{ width: "40px", marginRight: "15px", verticalAlign: "middle" }}/>
              <strong><a href='https://neo4j.com/' target="_blank" rel="noopener noreferrer">Neo4j</a></strong> - SWE Intern (Consulting)
            </div>
            <div style={{ paddingLeft: '20px' }}>
              <img src={trekAILogo} alt="TrekAI Logo" style={{ width: "40px", marginRight: "15px", verticalAlign: "middle" }}/>
              <strong><a href='https://trekai-beta-landing.vercel.app/' target="_blank" rel="noopener noreferrer">TrekAI</a></strong> - hiking recommendation platform
            </div>
            <strong className="section-title">Recent Work</strong>
            <ul>
              

              <li>
                <img src={hpTechVenturesLogo} alt="HP Tech Ventures Logo" style={{ width: "60px", marginRight: "15px", verticalAlign: "middle" }}/>
                <strong>HP Tech Ventures - Externship</strong> - Deal Sourcing + Business Analytics for GenAI productivity tools
              </li>
              <li>
                <strong><a href='https://github.com/jaslevy/Ethereum_Casino' target="_blank" rel="noopener noreferrer">Ethereum Casino</a></strong> - Developed Solidity smart contract and web3.js + React frontend
              </li>
                <li><strong><a href='https://drive.google.com/file/d/1c-p9I4YBRdzwnP4rHjoay2T8SqXe1xWx/view' target="_blank" rel="noopener noreferrer">Network Centrality Analysis on US Critical Infrastructure</a></strong> - research for ORF387 (Networks)</li>
            </ul>
          

          </p>
        </div>
        <div className="text-column">
          <strong className="section-title">Background</strong>
          <p>I am a recent graduate from Princeton University with a B.S.E. degree in <strong>Computer Science</strong>. In addition to my major, I picked up a minor in <strong>Statistics and Machine Learning. </strong></p>
          <p>I have experience in <strong>software development</strong>, <strong>academic research</strong>, <strong>machine learning</strong>, and <strong>leadership</strong> through professional and volunteer work. Some more specific interests of mine include GIS applications, decentralized systems, technology policy, healthcare innovation, and graph data science</p>
        </div>
      </div>
        <div className="three-column-container">
          <div className="row">
            <div className="column">
              <Link to="./p2">
                <div className="image-container">
                  <img src={vital} alt="VitalMap" width="200" height="auto" />
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
                <div className="image-container" onClick={() => window.scrollTo(0, 0)}>
                  <img src={cluster} alt="Research" width="200" height="auto" />
                  <div className="overlay">
                    <div className="text" id="hide-on-small">At Princeton, I have had the privilege of conducting research as a student and as a research associate in the Department of African American Studies. My research spans genre and mood classification of music based on psychological models, LLM policy in higher education, and disparities in public broadband access.
                    Click here to learn more. </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="column">
            <a href=' https://receptive-cause-b76.notion.site/Sepolia-Roulette-05df9f3c249544adadb1da70af12bb6e' target="_blank" rel="noopener noreferrer">
                <div className="image-container">
                  <img src={EthCasino} alt="Project 4" width="200" height="auto" />
                  <div className="overlay">
                    <div className="text" id="hide-on-small">A casino game where players stake Sepolia in a competitive, roulette-inspired game, leveraging a smart contract to manage and distribute bets and winnings. With no house and contract transparency, our game is fair and decentralized for all players. Click here to watch gameplay and learn more.
</div>
                  </div>
                </div>
              </a>
            </div>
            <div className="column">
            <Link to="/gallery">
              <div className="image-container">
                <img src={GallerySquare} alt="Project 5" width="200" height="auto" />
                <div className="overlay">
                  <div className="text" id="hide-on-small">Photo Gallery. Many of these images were published in the VIS 213 Spring 2024 magazine by the department of Visual Arts at Princeton. Click here to view. </div>
                </div>
              </div>
            </Link>
            </div>
            <div className="column">
              <div className="image-container">
                <img src={GraySquare} alt="Project 6" width="200" height="auto" />
                <div className="overlay">
                  <div className="text" id="hide-on-small"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default HomePage;