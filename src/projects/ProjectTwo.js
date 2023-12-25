import React from 'react';
import Vital from '../images/VM2.png'

function ProjectTwo() {
  return (
        <div className="two-column-container-projects">
            <div className="text-column">
            <p>In an emergency? In critical need of a pad, tampon, or condom at on Princeton's campus? VitalMap points you to the closest stores of menstrual and contraceptive products as well as the current stock at each location. As a community driven Web App, product stock levels will be updated by users in real-time. With VitalMap, you will never be caught without your vital products again. </p>
            <p>This project was a collaboration with Princeton Students for Reproductive Justice. 
This Web-App integrates Python and PostgreSQL for backend functions and JavaScript, Bootstrap, HTML, CSS on the frontend. </p>
            <p>Link to <a href="https://vitalmap.onrender.com/" target ="blank">deployment</a></p>
            <p>Link to <a href="https://github.com/jaslevy/Vital" target ="blank">code</a></p>
            </div>
        <div className="image-column">
             <img src={Vital} alt="Description" width="200" height="auto" />
        </div>
      </div>
  );
}

export default ProjectTwo;