import React from 'react'
import Navbarnew from '../general/Navbargeneral'
// import homeimg from 'D:/git/Enactus-website/src/Assets/homeimg.png'
import Footer from '../general/footer'
import Project from './Project'
import AboutUS from './AboutUs'
import "./index.css"
import tagline from '../../Assets/tagline.png'
import Progress from './Progress'
import enactusimg from '../../Assets/Component 1.png'
import Join from './Join'
 
function home() {
  return (
    <div className='Home-wrapper'>
        <div className='navstart'>
            <Navbarnew></Navbarnew>
            <div className='intro'>
              {/* <div className="intro1"> */}
                {/* <h1>Social Enterpreneurship</h1>
              </div>
              <div className="introin">
              “Social entrepreneurs are not content just to give a fish or teach how to fish. They will not rest until they have revolutionized the fishing industry.”
              </div> */}
              <img src={enactusimg} alt="" />
            </div>
        </div>
        <AboutUS></AboutUS>
        <div className='tagline'>
          <img src={tagline} alt="..." />
        </div>
        <Progress />
        <Project />
        {/* <Join /> */}
            <Footer></Footer>
      
    </div>
  )
}

export default home
