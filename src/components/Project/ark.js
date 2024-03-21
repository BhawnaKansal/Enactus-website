import React from 'react'
import Navbarnew from '../general/Navbargeneral'
import "./ark.css"
import sdgimage1 from '../../Assets/sdg8.png'
import sdgimage2 from '../../Assets/sdg11.png'
import sdgimage3 from '../../Assets/sdg14.png'
import Progr from './ourdata'
import Ourproducts from './Ourproducts'
import Media1 from './media'
import Footer from '../general/footer'



function Projectark() {
  return (<>
    <div className='ark-wrapper'>
      <Navbarnew></Navbarnew>
      <div className='arkintro'>
              <div className="arkintro1">
              
              </div>
              <div className="arkintroin">
             
              </div>
            </div>
    </div>
    <div className="whatark">
      <h1>What is Ark ?</h1>
      <p>ARK is an initiative by IIT Roorkee chapter of Enactus toward clean and healthy environment. We at Ark, aim to create a circular economy in the floral industry whereby
all the floral waste is upcycled into usable products. The plan is to get these products
 developed through the rural women hence providing them meaningful jobs and help them in
 becoming financially independent. As a social enterprise, we strive to create an
 environment friendly and socially improved society through reduction of pollution and
 simultaneous creation of self sustainable local entrepreneurs.</p>
     <h1>Target SDGs</h1>
     <div className="susimages">
     <img src={sdgimage1} alt="" />
     <img src={sdgimage2} alt="" />
     <img src={sdgimage3} alt="" />
     </div>
     <Progr></Progr>
     <Ourproducts></Ourproducts>
     <Media1></Media1>
    </div>
    <Footer></Footer>
    </>
  )
}

export default Projectark;
