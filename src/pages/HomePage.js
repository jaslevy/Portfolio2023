import React from 'react';
import neo4jLogo from '../images/neo4j_logo_globe.png'
import cornellLogo from '../images/Cornell-University-Seal-Logo.png'
import headShot from '../images/headshot3.png'
import chatImage from '../images/docbot.png'
import EthCasino from '../images/sepoliaHomepage.png'
import GallerySquare from '../images/GallerySquare.png'
import EDerm from '../images/ederm.png'
import GraySquare from '../images/GraySquare.jpg'
import hpTechVenturesLogo from '../images/HPTechVentures.png'
import trek from '../images/TrekAI_logo_white_bg.png'
import cluster from '../images/Cluster2.png'
import vital from '../images/VM2.png'
import MockMe from '../images/MockMe.png'
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
            
            <strong className="section-title" style={{ color: 'black' }}>Currently</strong>
            <div style={{ paddingLeft: '20px' ,paddingTop: "5px" }}>
              <img src={cornellLogo} alt="Cornell Logo" style={{ width: "50px", marginRight: "5px", verticalAlign: "middle"}}/>
              <strong style={{ color: 'black' }}>Cornell CS Master's Student</strong>
              <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
                <li>Research on <strong style={{ color: 'black' }}>multi-hop reasoning</strong> for <strong style={{ color: 'black' }}>agentic RAG systems</strong></li>
                <li>Technical Consulting for <a href="https://mydermgroup.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}><strong>Integrated Dermatology</strong></a>. Building a <strong style={{ color: 'black' }}>hybrid vector-search</strong> solution for demographic-based payment estimation</li>
              </ul>
            </div>
            
            <strong className="section-title" style={{ color: 'black' }}>Recently</strong>
            <ul>
              
              <li>
              <div style={{ paddingLeft: 'px' }}>
              <img src={neo4jLogo} alt="Neo4j Logo" style={{ width: "40px", marginRight: "15px", verticalAlign: "middle" }}/>
              <strong style={{ color: 'black' }}><a href='https://neo4j.com/' target="_blank" rel="noopener noreferrer">Neo4j</a></strong> - <strong style={{ color: 'black' }}>SWE Intern</strong>
            </div>
              </li>
              <li>
                <img src={hpTechVenturesLogo} alt="HP Tech Ventures Logo" style={{ width: "60px", marginRight: "15px", verticalAlign: "middle" }}/>
                <strong style={{ color: 'black' }}><a href="https://hptechventures.com/" target="_blank" rel="noopener noreferrer">HP Tech Ventures</a></strong> - Externship - Deal Sourcing + Business Analytics for GenAI productivity tools

              </li>
              <li>
                <strong style={{ color: 'black' }}><a href='https://github.com/jaslevy/Ethereum_Casino' target="_blank" rel="noopener noreferrer">Ethereum Casino</a></strong> - Developed Solidity smart contract and web3.js + React frontend
              </li>
                <li><strong style={{ color: 'black' }}><a href='https://drive.google.com/file/d/1c-p9I4YBRdzwnP4rHjoay2T8SqXe1xWx/view' target="_blank" rel="noopener noreferrer">Network Centrality Analysis on US Critical Infrastructure</a></strong> - research for ORF387 (Networks)</li>
            </ul>
          

          </p>
        </div>
        <div className="text-column">
          <strong className="section-title" style={{ color: 'black' }}>Background</strong>
          <p style={{ paddingTop: "10px" }}>I am currently a CS grad student at Cornell Tech - Cornell's engineering-focused campus in New York City, and a recent graduate from Princeton University with a B.S.E. degree in <strong style={{ color: 'black' }}>Computer Science</strong>. In addition to my major, I picked up a minor in <strong style={{ color: 'black' }}>Statistics and Machine Learning. </strong></p>
          <p>I have experience in <strong style={{ color: 'black' }}>software development</strong>, <strong style={{ color: 'black' }}>academic research</strong>, <strong style={{ color: 'black' }}>machine learning</strong>, and <strong style={{ color: 'black' }}>leadership</strong> through professional and volunteer work. Some more specific interests of mine include agentic AI, healthcare technology, decentralized systems, technology policy, and graph data science. Click on the images below to check out
          some of my work!</p>
          <p>For inquiries, please reach out at <a href="mailto:jglevy@alumni.princeton.edu" style={{ color: 'black' }}><strong>jglevy@alumni.princeton.edu</strong></a> or connect with me on <a href="https://www.linkedin.com/in/jasper-levy-956722208/" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}><strong>LinkedIn</strong></a>. Thanks for visiting my page!</p>
        </div>
      </div>
        <div className="three-column-container">
          <div className="row">
          <div className="column">
            <a href=' https://receptive-cause-b76.notion.site/Sepolia-Roulette-05df9f3c249544adadb1da70af12bb6e' target="_blank" rel="noopener noreferrer">
                <div className="image-container">
                  <img src={EthCasino} alt="Project 4" width="200" height="auto" />
                  <div className="overlay">
                    <div className="text" id="hide-on-small">A casino game where players stake Sepolia in a competitive, roulette-inspired game, leveraging a smart contract to manage and distribute bets and winnings. With no house and contract transparency, our game is fair and decentralized for all players. This project was built using <strong>React</strong>, <strong>Solidity</strong>,  <strong>Web3.js</strong>, and <strong>Ethers.js</strong>. Click here to watch gameplay and learn more.</div>
                  </div>
                </div>
              </a>
            </div>
          <div className="column">
              <a href='https://receptive-cause-b76.notion.site/A-RAG-Solution-for-Neo4j-Documentation-Retrieval-29575b02021444bf8f4961de382ae69b' target="_blank" rel="noopener noreferrer">
              <div className="image-container">
                <img src={chatImage} alt="Project 6" width="200" height="auto" />
                <div className="overlay">
                  <div className="text" id="hide-on-small">The Neo4j Chatbot — DOCBOT 1.0 — is used by Neo4j Developers, Neo4j Professional Services Clients, and Consulting Engineers internally to grab information from Neo4j Documentation and, with the current version, limited case recommendations based on anonymized solution assessments. The chatbot is extremely conversational and can be prompted for summaries of documentation sections, debugging of errant code, code improvement, code generation, and use-case recommendations. This project was built with <strong>LangChain, Python, Streamlit, Neo4j AuraDB, and the OpenAI API</strong> </div>
                </div>
              </div>
              </a>
            </div>
            <div className="column">
                <div className="image-container">
                  <img src={EDerm} alt="Research" width="200" height="auto" />
                  <div className="overlay">
                    <div className="text" id="hide-on-small">As part of my graduate coursework, I am building a hybrid-vector search Proof-of-Concept for Integrated Dermatology. The solution aims to increase revenue capture and decrease collection costs by improving patient understanding of financial responsibility. This research-backed approach involves implementing a vector search system for a post-insurance-filtering match of anonymized, demographic EHR data, This match drives accurate bill estimates for patients.</div>
                  </div>
                </div>
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
              <Link to="./p2">
                <div className="image-container">
                  <img src={vital} alt="VitalMap" width="200" height="auto" />
                  <div className="overlay">
                    <div className="text" id="hide-on-small"> I collaborated with Princeton Students for Reproductive Justice and worked closely with a team of 4 other Princeton undergrads to build VitalMap, a platform that provides users with locations and stock of health products on campus.
                    This Web-App integrates <strong>Python</strong> and <strong>PostgreSQL</strong> for backend functions and <strong>JavaScript, Bootstrap, HTML, CSS</strong> on the frontend. 
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="column">
                <div className="image-container">
                  <img src={MockMe} alt="VitalMap" width="200" height="auto" />
                  <div className="overlay">
                    <div className="text" id="hide-on-small"> Mock with Peers from Your Campus
                    Match with Campus Peers for Interactive Technical Practice and Achieve Interview Success. This is an in-progress project built with <strong>React, FastAPI, MongoDB, Docker, and AWS.</strong>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          <div className="row">
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
                    <div className="text" id="hide-on-small">TrekAI is a working concept for a dynamic platform designed to assist travelers in discovering hiking recommendations tailored to their budget preferences. Click here to view the landing page.</div>
                  </div>
                </div>
              </a>
            </div>
            <div className="column">
              <div className="image-container">
                <img src={GraySquare} alt="Project 5" width="200" height="auto" />
                <div className="overlay">
                  <div className="text" id="hide-on-small">Stay tuned!</div>
                </div>
              </div>
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