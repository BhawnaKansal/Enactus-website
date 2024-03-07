import React from 'react'
import './Card.css'
// import ark from '../../Assets/ark 1.png'

function Card(props) {
  return (
    <div className='card'>
      <div class="flip-card-inner">
      <div class="flip-card-front">
        <img class="project-image" src={props.img} alt="Avatar" style={{width: "15vw" ,padding: "5vw" ,filter: "invert(0)"}} />
      </div>
      <div class="flip-card-back">
        <h1 class="info-heading"><span style={{color:"white"}}>Project Ark</span></h1>
        <p class="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <div class="button">
          <a href="/project"><button type="button" class="learnmore">Learn More</button></a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Card
