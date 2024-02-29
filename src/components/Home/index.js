import React from 'react'
import Navbarnew from '../general/Navbargeneral'
// import homeimg from 'D:/git/Enactus-website/src/Assets/homeimg.png'
import Footer from '../general/footer'
import Project from '../Project/Project'

function home() {
  return (
    <div className='Home-wrapper'>
        <span>
            <Navbarnew></Navbarnew>
            {/* <img src={homeimg} id="img1" /> */}
        </span>
        <Project />
            <Footer></Footer>
      
    </div>
  )
}

export default home
