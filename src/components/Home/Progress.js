import React from 'react'
import './Progress.css'
import progress1 from '../../Assets/Frame 1641.png'
import progress2 from '../../Assets/Group 626362.png'
import progress3 from '../../Assets/Frame 1643.png'
export default function Progress() {
  return (
    <div className='Progress'>
        <h1>Our Progress</h1>
    <div>
        <div className='progress1'><img src={progress1} alt="..."/></div>
        <div className='progress2'><img src={progress2} alt="..."/></div>
        <div className='progress3'><img src={progress3} alt="..."/></div>
    </div>

    </div>
  )
}


