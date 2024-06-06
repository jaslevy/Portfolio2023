import React from 'react';
import fencing from '../images/fencing.jpg'
import { ComposableMap, Geographies, Geography } from "react-simple-maps";



function AboutPage() {
  return (
    <div style={{ maxWidth: "900px", margin: "0 auto" }}>
      <div className="about-div" style={{ display: "flex", gap: "20px" }}>
        <div className="text-column">
          <p>I spend a lot of my time fencing. I am a foil fencer on <a href ="https://goprincetontigers.com/sports/mens-fencing" target ="blank">Princeton's Varsity Team</a> - one of the best performing D1 programs in the country. </p>
          <p>I also love surfing, traveling, and discovering new music. I have traveled to 9/195 countries (see map below). </p>
                   <p>For resume access, please send an email to jglevy@princeton.edu or DM me on LinkedIn.</p>
        </div>
        <div className="image-column">
          <img src={fencing} alt="Description" width="200" height="auto" />
        </div>
      </div>
      <div style={{ marginTop: "10px", textAlign: "center" }}>
        <ComposableMap projectionConfig={{ scale: 130 }}>
          <Geographies geography="/features.json">
            {({ geographies }) => {
              const highlightedCountries = ["United States", "France", "Thailand", "Spain", "China", "Hungary", "Canada", "Japan", "Croatia"];
              return geographies.map((geo) => (
                <Geography 
                  key={geo.rsmKey} 
                  geography={geo} 
                  style={{
                    default: { 
                      outline: "none",
                      fill: highlightedCountries.includes(geo.properties.name) ? "#FF6347" : "#DDD",
                      userSelect: "none"
                    },
                    hover: {
                      fill: highlightedCountries.includes(geo.properties.name) ? "#FF6347" : "#DDD",
                      cursor: "pointer",
                      userSelect: "none",
                      outline: "none"
                    },
                    pressed: { outline: "none" },
                  }}
                  onMouseEnter={() => {
                    const { name } = geo.properties;
                    console.log(`Hovered over: ${name}`);
                  }}
                />
              ));
            }}
          </Geographies>
        </ComposableMap>
      </div>  
    </div>

  );
}

export default AboutPage;