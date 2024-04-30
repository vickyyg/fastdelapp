import React from 'react'
import './Footer.css'

import facebook from '../../assets/facebook-logo.png'
import insta from '../../assets/insta-logo.png'
import twitter from '../../assets/twitter-icon.png'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src='' alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic pariatur quas cupiditate nihil iste officiis vero dignissimos sapiente, aut, voluptatum aliquid rerum nemo quia a unde earum aliquam magnam non.</p>
                <div className="footer-social-icon">
                    <img src={facebook} alt="" />
                    <img src={insta} alt="" />
                    <img src={twitter} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
              <h2>COMPANY</h2>
              <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
              </ul>

            </div>
            <div className="footer-content-right">
              <h2>CONTACT US</h2>
              <ul>
                <li>+94 112434545</li>
                <li>contact@fastdel.com</li>
              </ul>
            </div>
          </div>
        <hr/>
        <p className='footer-copyright'>Copyright 2024  © Fast Del - All Rights Reserved.</p>
    </div>
  )
}

export default Footer