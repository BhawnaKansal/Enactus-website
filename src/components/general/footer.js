import React from 'react'
import "./footer.css"
import enactusLogo from "../../Assets/enactus.svg"
import instagram from '../../Assets/instagram.webp'
import twitter from '../../Assets/Twitter.png'
import linkedIn from '../../Assets/linkedIn.png'
function Footer() {
  return (
    <div className='footer'>
      <div className="footer_col1">
        <img src={enactusLogo} alt="" />
      </div>
      <div className="footer_col2">
        <h2><span>En</span>terpreneurial</h2>
        <p>
        igniting business innovation with integrity and passion.
        </p>
        <h2><span>Act</span>ion</h2>
        <p>the experience of social impact that sparks social enterprise.</p>
        <h2><span> Us </span></h2>
        <p>student, academic, and business leaders collaborating to create a better world</p>
      </div>
      <div className="footer_col3">
        <h2><span>Connect with us</span></h2>
         <p>Join the conversation and connect with
            us on our social media handles.</p>
        <span className='socialMedia'><a href='https://www.instagram.com/enactus_iitr?igsh=MXNhM3htY2hmYzJtdw=='><img src={instagram} alt="" /></a></span>
        <span className='socialMedia'><a ><img src={twitter} alt="" /></a></span>
        <span className='socialMedia'><a href='https://www.linkedin.com/company/enactusiitroorkee/'><img src={linkedIn} alt="" /></a></span>
      </div>
    </div>
  )
}

export default Footer
