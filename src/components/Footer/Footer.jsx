import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-context">
            <div className="footer-context-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nostrum eveniet ab consequuntur labore rerum officiis reprehenderit fugit sint, saepe voluptas ea architecto maiores ullam cum sed illo cumque quisquam.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
              <h2>COMPANY</h2>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy policy</li>
            </ul>

            </div>
            <div className="footer-content-right">
              <h2>GET IN TOUCH</h2>
              <ul>
                <li>+!-212-456-7890</li>
                <li>contact@tomato.com</li>
              </ul>
            </div>
            </div>
            <hr />
            <p className='footer-copyright'>Copyright 2024 © Tomato.com - All Right Reserved. </p>
        
      
    </div>
  )
}

export default Footer