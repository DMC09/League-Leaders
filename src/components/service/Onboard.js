import React from 'react';
import Fade from 'react-reveal/Fade';

function Onboard()  {
  return <div className="Onboard-container">
        <h1>
            <Fade top>
              Welcome to the League Leaders Web App!
            </Fade>
          </h1>
        <p>
            <Fade bottom>
              Select a Stat above to check who are the top 10 leaders for their respective stats.
            </Fade>
          </p>

  </div>;
}


export default Onboard;
