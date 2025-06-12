import React from 'react';
import background from '../../assets/background.png'
import AboutBackground from '../../assets/about-background.png'

import { BsFillPlayCircleFill } from 'react-icons/bs';

function About () {

    return (
        <div className='about-section-container'>
        <div className='about-background-image-container'>
            <img src= {AboutBackground} alt="" />
        </div>
        <div className='about-section-image-container'>
            <img src={background} alt="" />
        </div>
        <div className='about-section-text-container'>
            <p className='primary-subheading'>About</p>
            <h1>Food is an Important Part of a balanced Diet</h1>
            <p className='primary-text'>Indulge in the heartwarming flavors of homemade food. From classic comfort dishes to exciting new flavors, we bring the joy of homecooked meals straight to your table.

            </p>
            <div className='about-buttons-container'>
                <button className='secondary-button'>Learn More</button>
                <button className='watch-video-button' ><BsFillPlayCircleFill/>Watch Video</button>
            </div>
        </div>
        </div>
    )
}


export default About;