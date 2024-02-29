import React from 'react'
import './Project.css'
import img1 from '../../Assets/Group 1675.svg'
import img2 from '../../Assets/Group 1679.svg'
import img3 from '../../Assets/Group 1680.svg'
import img4 from '../../Assets/Group 1681.svg'
import ark from '../../Assets/ark.svg'
import khoj from '../../Assets/khoj.svg'
import anushruti from '../../Assets/anushruti (1).svg'
import parvati from '../../Assets/parvati.svg'

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
        <img src={ark} alt="" />
        </div>
        <div className='projectName'>
        <img src={khoj} alt="" />
        </div>
        <div className='projectName'>
        <img src={anushruti} alt="" />
        </div>
        <div className='projectName'>
        <img src={parvati} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Project
