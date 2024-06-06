import React from 'react';
import fencing from '../images/fencing.jpg'

function AboutPage() {
  return (
    <div className="about-div">
            <div className="text-column">
              <p>I spend a lot of my time fencing. I am a foil fencer on <a href ="https://goprincetontigers.com/sports/mens-fencing" target ="blank">Princeton's Varsity Team</a> - one of the best performing D1 programs in the country. </p>
              <p>I also love surfing, traveling, architecture history, and discovering new music.</p>
              <p>For resume access, please send an email to jglevy@princeton.edu or DM me on LinkedIn.</p>
            </div>
            <div className="image-column">
              <img src={fencing} alt="Description" width="200" height="auto" />
            </div>
            <div>
            </div>
    </div>

  );
}

export default AboutPage;