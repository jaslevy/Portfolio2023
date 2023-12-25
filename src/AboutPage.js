import React from 'react';
import headShot from './images/headshot.png'

function AboutPage() {
  return (
<div className="about-div">
        <div className="text-column">
          <p>I am a senior studying computer science at Princeton University. I hold a certificate (minor) in Statistics and Machine Learning. I have an expected graduation date of May 2024. </p>
          <p>I have experience in software development, academic research, modern machine learning techniques, and leadership through professional and volunteer work. Some more specific interests of mine include GIS applications, decentralized systems, technology policy, and healthcare innovation.</p>
          <p>I love geography and hiking - so much so that I started a new project. I am currently working on TrekAI, a budget-tailored hiking recommendation platform.</p>
        </div>
        <div className="image-column">
          <img src={headShot} alt="Description" width="200" height="auto" />
        </div>
      </div>
  );
}

export default AboutPage;