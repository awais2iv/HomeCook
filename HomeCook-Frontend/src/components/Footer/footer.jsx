import React from 'react'
import Logo from '../../assets/logo.png'
import { BsTwitter, BsInstagram, BsYoutube } from 'react-icons/bs'


const Footer = () => {
  return (
    <div className='footer-wrapper'>
        <div className='footer-section-one'>
           
            <div className='footer-icons'>
                <BsTwitter />
                <BsInstagram />
                <BsYoutube />
            </div>
        </div>
        <div className='footer-section-two'>
            <div className='footer-section-columns'>
                <span>Quality</span>
                <span>Help</span>
                <span>Share</span>
                <span>Careers</span>
                <span>Work</span>
            </div>
            <div className='footer-section-columns'>
                <span>+92 342-000-6938</span>
                <span>mohamadawais942@gmail.com</span>
                <span>contact@homecook.com</span>
            </div>
            
        </div>
    </div>
  )
}

export default Footer;