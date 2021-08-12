import React from 'react';
import facebookLogo from '../pictures/icons/facebook.png';
import twitterLogo from '../pictures/icons/twitter.png';
import youtubeLogo from '../pictures/icons/youTUbe.png';
import InstagramLogo from '../pictures/icons/instagram.png'
import MediumLogo from '../pictures/icons/mediujm.png';

const FooterContainer = () => {

    return (
        <footer className='cont-lvl-1' id='main-footer'>
        <div className='footer-cont' id='footer-comp'>
            <span className="footer-items">About</span>
            <span className="footer-items">Careers</span>
            <span className="footer-items">Terms & Conditions</span>
            <span className="footer-items">Privacy Policy</span>
        </div>
        <div className='footer-cont' id='footer-cont'>
          <img src='../src/pictures/valogo.jpg' alt='Vanguard Academy Logo' height="50"/>
          <div>
            <span className="footer-items">Contact Us</span>
            <span className="footer-items">Phone: 000-000-0000</span>
            <span className="footer-items">Address</span>
            <img className="footer-items" src={facebookLogo} alt='FaceBook Logo' height='25'/>
            <img className="footer-items" src={twitterLogo} alt='Twitter Logo' height='25'/>
            <img className="footer-items" src={InstagramLogo} alt='Instragram Logo' height='25'/>
            <img className="footer-items" src={MediumLogo} alt='Medium Logo' height='25'/>
            <img className="footer-items" src={youtubeLogo} alt='YouTubeLogo' height='25'/>
          </div>
        </div>
        <p id='built'>Copyright © 2021. Vanguard Academy. Jesus Garcia. All Rights Reserved. </p>
      
  </footer>
    )
}

export default FooterContainer;