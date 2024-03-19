import React from 'react'
import Navbarnew from '../general/Navbargeneral'
// import homeimg from 'D:/git/Enactus-website/src/Assets/homeimg.png'
import Footer from '../general/footer'
import Project from './Project'
import AboutUS from './AboutUs'
import "D:/git/Enactus-website/src/components/Home/index.css"
 
function home() {
  return (
    <div className='Home-wrapper'>
        <div className='navstart'>
            <Navbarnew></Navbarnew>
            <div className='intro'>
              <div className="intro1">
                <h1>Social Enterpreneurship</h1>
              </div>
              <div className="introin">
              “Social entrepreneurs are not content just to give a fish or teach how to fish. They will not rest until they have revolutionized the fishing industry.”
              </div>
            </div>
        </div>
        <AboutUS></AboutUS>
        <Project />
            <Footer></Footer>
      
    </div>
  )
}

export default home
