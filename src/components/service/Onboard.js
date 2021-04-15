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
              Select a stat see who are the who is leading in their respective stat
            </Fade>
          </p>

  </div>;
}


export default Onboard;
