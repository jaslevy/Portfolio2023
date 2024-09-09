import React from 'react';
import trekAILogo from '../images/TREK AI LOGO.svg'
import neo4jLogo from '../images/neo4j_logo_globe.png'
import MockMeLogo from '../images/MockMeBlack.png'
import cornellLogo from '../images/Cornell-University-Seal-Logo.png'
import headShot from '../images/headshot3.png'
import chatImage from '../images/docbot.png'
import EthCasino from '../images/sepoliaHomepage.png'
import GallerySquare from '../images/GallerySquare.png'
// import GraySquare from '../images/GraySquare.jpg'
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
        <span className="cs"> PRINCETON & CORNELL COMPUTER SCIENCE</span>
        <span className="title"></span>
      </div>
        <div className="image-wrapper">
          <img src={headShot} alt="Cityscape" style={{ width: "300px", height: "auto", paddingBottom: '80px', paddingTop: '100px', position: 'center' }}/>
        </div>
      <div className="two-column-container">
       
        <div className="text-column">
         
          <p>
            
            <strong className="section-title">Currently</strong>
            <div style={{ paddingLeft: '20px' }}>
              <img src={cornellLogo} alt="Cornell Logo" style={{ width: "50px", marginRight: "5px", verticalAlign: "middle" }}/>
              Cornell CS Master's Student
            </div>
            <div style={{ paddingLeft: '20px' }}>
              <img src={neo4jLogo} alt="Neo4j Logo" style={{ width: "40px", marginRight: "15px", verticalAlign: "middle" }}/>
              <strong><a href='https://neo4j.com/' target="_blank" rel="noopener noreferrer">Neo4j</a></strong> - SWE Intern
            </div>
            <div style={{ paddingLeft: '20px', paddingBottom: '15px'}}>
              <img src={MockMeLogo} alt="MockMe Logo" style={{ width: "45px", marginRight: "10px", verticalAlign: "middle" }}/>
              <strong>MockMe</strong> - personalized mock interviews
            </div>
            
            <strong className="section-title">Recently</strong>
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
          <p>I am currently a CS grad student at Cornell Tech - Cornell's engineering-focused campus in New York City, and a recent graduate from Princeton University with a B.S.E. degree in <strong>Computer Science</strong>. In addition to my major, I picked up a minor in <strong>Statistics and Machine Learning. </strong></p>
          <p>I have experience in <strong>software development</strong>, <strong>academic research</strong>, <strong>machine learning</strong>, and <strong>leadership</strong> through professional and volunteer work. Some more specific interests of mine include AI development, GIS applications, decentralized systems, technology policy, payment solutions, and graph data science. Click on the images below to check out
          some of my work!</p>
        </div>
      </div>
        <div className="three-column-container">
          <div className="row">
          <div className="column">
            <a href=' https://receptive-cause-b76.notion.site/Sepolia-Roulette-05df9f3c249544adadb1da70af12bb6e' target="_blank" rel="noopener noreferrer">
                <div className="image-container">
                  <img src={EthCasino} alt="Project 4" width="200" height="auto" />
                  <div className="overlay">
                    <div className="text" id="hide-on-small">A casino game where players stake Sepolia in a competitive, roulette-inspired game, leveraging a smart contract to manage and distribute bets and winnings. With no house and contract transparency, our game is fair and decentralized for all players. Click here to watch gameplay and learn more.</div>
                  </div>
                </div>
              </a>
            </div>
          <div className="column">
              <a href='https://receptive-cause-b76.notion.site/A-RAG-Solution-for-Neo4j-Documentation-Retrieval-29575b02021444bf8f4961de382ae69b' target="_blank" rel="noopener noreferrer">
              <div className="image-container">
                <img src={chatImage} alt="Project 6" width="200" height="auto" />
                <div className="overlay">
                  <div className="text" id="hide-on-small">The Neo4j Chatbot — DOCBOT 1.0 — is used by Neo4j Developers, Neo4j Professional Services Clients, and Consulting Engineers internally to grab information from Neo4j Documentation and, with the current version, limited case recommendations based on anonymized solution assessments. The chatbot is extremely conversational and can be prompted for summaries of documentation sections, debugging of errant code, code improvement, code generation, and use-case recommendations.</div>
                </div>
              </div>
              </a>
            </div>
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
          </div>
          <div className="row">
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
              <a href='https://trek-ai-concept.vercel.app/' target="_blank" rel="noopener noreferrer">
                <div className="image-container">
                  <img src={trek} alt="TrekAI" width="200" height="auto" />
                  <div className="overlay">
                    <div className="text" id="hide-on-small">TrekAI is a working concept for a dynamic platform designed to assist travelers in discovering hiking recommendations tailored to their budget preferences. This product
                    will integrate openAI's API for trip recommendation and is to be built on React.js, Flask, and AWS. Click here to view the beta landing page.</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="container">
  {/* ...existing code... */}
  </div>
</div>
  );
}

export default HomePage;