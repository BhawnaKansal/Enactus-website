import React from 'react'
import './JoinUs.css'
import Navbarnew from '../general/Navbargeneral'
import Enactathon from '../../Assets/Group 626389.png'
import Line from '../../Assets/Vector 824.svg'
import step1 from '../../Assets/1.svg'
import step2 from '../../Assets/2.svg'
import step3 from '../../Assets/3.svg'
import step4 from '../../Assets/4.svg'
import primary from '../../Assets/Group 1586.png'
import recr from '../../Assets/Group 626390.png'
import Footer from '../general/footer'
function JoinUs() {
  return (
    <div className='joinUs'>
      <div className="joinUs1">
        <Navbarnew />
        <div className="joinUstext">JOIN US</div>
      </div>
      <div className="joinUs2">
        <p className="whyQues">Why Join Enactus</p>
        <p className='contentJoinUs'>Entrepreneurship in the 21st century is not only about creating and growing for-profit businesses but also about sustainability and environmental sensitivity. Enactus is an international non-profit organization that believes in investing in students who take entrepreneurial action for others, thus creating a better world for us all. Enactus works to promote social entrepreneurship among young minds in educational institutes all over the globe.</p>
      </div>
      <div className="joinUs3">
        <p className="howJoinUs">HOW TO JOIN US</p>
        <div className='enactImg'><img src={Enactathon} alt="" /></div>
        <p className='enactcontent'>Enactathon is a case study comeptiton oragnszed by Enactus in IITR. In this the participants are provided some problem statement and they have to find the solution such that it helps the society as well we can make profit out of it.</p>
      </div>
      <div className="joinUs4">
        <div className="step1">
            <img src={step1} alt="1" />
            <p className="step1">
                Registration
            </p>
        </div>
        <div className="step2">
            <img src={step2} alt="1" />
            <p className="step2">
                Abstract Submission
            </p>
        </div>
        <div className="step3">
            <img src={step3} alt="1" />
            <p className="step3">
                Presentation
            </p>
        </div>
        <div className="step4">
            <img src={step4} alt="1" />
            <p className="step4">
                Results
            </p>
        </div>

      </div>
    <div className="line">
    <img src={Line} alt="" />
    </div>  
    <div className="joinUs5">
        <div className="conStep1">
            <h1>Registration</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor sed vitae posuere lectus sit tempus dui. </p>
        </div>
        <div className="conStep2">
            <h1>Abstract Submission</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor sed vitae posuere lectus sit tempus dui. </p>
        </div>
        <div className="conStep3">
            <h1>Presentation</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor sed vitae posuere lectus sit tempus dui. </p>
        </div>
        <div className="conStep4">
            <h1>Results</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor sed vitae posuere lectus sit tempus dui. </p>
        </div>
    </div>

        <div className="pys">
        <p>Previous year Submissions</p>
        <div className='pysButton'><button ><img src={primary} alt="" /><span className='primary'>Primary</span></button></div>
        </div>
    <div className="recruitment">
        <img src={recr} alt="" />
        <div className="recrProcess">
        <div className="recrstep">
            <img src={step1} alt="1" />
            <p>
                Registration
            </p>
        </div>
        <div className="recrstep">
            <img src={step2} alt="1" />
            <p>
                Abstract Submission
            </p>
        </div>
        <div className="recrstep">
            <img src={step3} alt="1" />
            <p>
                Interviews
            </p>
        </div>
        <div className="recrstep">
            <img src={step4} alt="1" />
            <p >
                Results
            </p>
        </div>

        </div>
    </div>
    <Footer />
    </div>
  )
}

export default JoinUs
