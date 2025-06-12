import React from 'react'
import homebackgroud from '../../assets/homebackground.png'
import bannerimage from '../../assets/bannerimage.png'
import { FiArrowRight } from 'react-icons/fi'

const landingpage = () => {
  return (

    <div className='home-container'>
     <div className='home-banner-container'>
      <div className='home-bannerImage-container'>
        <img src={homebackgroud} alt="" srcset="" /> </div>
        <div className='home-text-section'>
          <h1 className='primary-heading'>
            Your Favorite Food, Delivered Hot & Fresh
          </h1>
          <p className='primary-text'>Welcome to our homecooked food hub where every meal is made with love, freshness, and the comforting taste of homemade goodness. Explore our delicious menu and enjoy flavors that feel just like home.</p>

          <button className='secondary-button'>Get at your doorstep <FiArrowRight/></button>
          </div>

          <div className='home-image-containe'> <img src={bannerimage} alt="" srcset="" /></div>
     </div>
    </div>
  )
}

export default landingpage;
