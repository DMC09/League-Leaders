import React from 'react';
import Fade from 'react-reveal/Fade';

const  Onboard =()=>  {
  return <div className="Onboard-container">
        <h1>
            <Fade top>
              Welcome to the League Leaders Web App
            </Fade>
          </h1>
        <p>
            <Fade bottom>
              Select the season type you want, and then the stat you want to see.
            </Fade>
          </p>

  </div>;
}


export default Onboard;
