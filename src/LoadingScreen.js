import React, {useState, useEffect} from 'react';
import loadingGIF from './images/tumblr_ng7vdn4XQw1qc0s10o1_500.webp'

const LoadingScreen = ({ onFadeOutCompleted }) => {
    const [fadeOut, setFadeOut] = useState(false);
  
    useEffect(() => {
      // Start the fade-out process just before the loading period ends
      const fadeOutTimer = setTimeout(() => {
        setFadeOut(true);
      }, 3200 - 500); // Assuming 500ms for fade-out duration
  
      // Call onFadeOutCompleted after the fade-out duration
      const endTimer = setTimeout(() => {
        onFadeOutCompleted();
      }, 3200);
  
      return () => {
        clearTimeout(fadeOutTimer);
        clearTimeout(endTimer);
      };
    }, [onFadeOutCompleted]);
  
    return (
      <div className={`loading-container ${fadeOut ? 'fade-out' : ''}`}>
        <img src={loadingGIF} alt="Loading..." />
      </div>
    );
  };
  
  export default LoadingScreen;