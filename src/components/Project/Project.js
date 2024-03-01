import React from 'react'
import './Project.css'
import img1 from '../../Assets/Group 1675.svg'
import img2 from '../../Assets/Group 1679.svg'
import img3 from '../../Assets/Group 1680.svg'
import img4 from '../../Assets/Group 1681.svg'
import ark from '../../Assets/ark 1.png'
import khoj from '../../Assets/khoj 1.png'
import anushruti from '../../Assets/anushruti 1.png'
import parvati from '../../Assets/parvati.png'

function Project() {
  return (
    <div className='project'>
        <div className='projectRow1'>
      <div className="project_col1">
      <img src={img1} alt="" />
      <img src={img2} alt="" />
      </div>
      <div className="project_col2">
        <h1>Our projects</h1>
        <p>Our projects aim at empowering people in need.<br></br>
We use business and economic concepts and an entrepreneurial approach to improve the quality of life and standard of living of the diverse communities that we work with.<br />

Enactus IITR has taken up 6 projects till date, of which 2 have been successfully completed and 4 are continuing. The continuing three projects are Project Ark, Project Khoj and Project Anushruti and Project Parvati.

</p>
      </div>
      <div className="project_col3">
      <img src={img3} alt="" />
      <img src={img4} alt="" />
      </div>
      </div>
      <div className='projectRow2'>
        <div className='projectName'>
        <img className='img1' src={ark} alt="" />
        <button className='viewMore'>View More</button>
        </div>
        <div className='projectName'>
        <img className='img2' src={khoj} alt="" />
        <button className='viewMore'>View More</button>
        </div>
        <div className='projectName'>
        <img className='img3' src={anushruti} alt="" />
        <button className='viewMore'>View More</button>
        </div>
        <div className='projectName'>
        <img className='img4' src={parvati} alt="" />
        <button className='viewMore'>View More</button>
        </div>
      </div>
    </div>
  )
}

export default Project
