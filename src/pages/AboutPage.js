import React from 'react';
import fencing from '../images/fencing.jpg'
import { ComposableMap, Geographies, Geography } from "react-simple-maps";



function AboutPage() {
  return (
    <div style={{ maxWidth: "900px", margin: "0 auto" }}>
      <div className="about-div" style={{ display: "flex", gap: "20px" }}>
        <div className="text-column">
          <p>Currently, I am a CS grad student at  <a href ="https://tech.cornell.edu/" target ="blank">Cornell</a> living in NYC. </p>
          <p>I spend a lot of my free time fencing. I was a foil fencer on <a href ="https://goprincetontigers.com/sports/mens-fencing" target ="blank">Princeton's Varsity Team</a> in undergrad - one of the best performing D1 programs in the country. </p>
          <p>I also love hiking, traveling, photography and discovering new music.</p>
                   <p>For resume access, please send an email to jglevy@alumni.princeton.edu or DM me on LinkedIn.</p>
        </div>
        <div className="image-column">
          <img src={fencing} alt="Description" width="200" height="auto" />
        </div>
      </div>
    </div>

  );
}

export default AboutPage;