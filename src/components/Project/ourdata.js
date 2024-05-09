import React from 'react';
import "D:/git/Enactus-website/src/components/Project/ourprogress.css"
import progressimage from "D:/git/Enactus-website/src/Assets/Group 626387.png"

function Progr() {
  return (
    <div className='wrapper'>
     <h1>OUR PROGRESS</h1>
     <div className="progresswrapper">
     <img src={progressimage}></img>
     </div>
    </div>
  )
}

export default Progr;
