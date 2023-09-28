import React from 'react';
import './Footer.css';

// Define a functional component called "Footer" which takes anchor link labels (a1, a2, a3, a4, a5) as props.
const Footer = ({
  a1,  // Prop for the label of the first anchor link.
  a2,  // Prop for the label of the second anchor link.
  a3,  // Prop for the label of the third anchor link.
  a4,  // Prop for the label of the fourth anchor link.
  a5   // Prop for the label of the fifth anchor link.
}) => {
  return (
    // This is the main container for the footer content.
    <div className='footer-container'>
      {/* Logo and Name */}
      <div className='footer-logo-name'>
        <img className="logo-footer-img" src={process.env.PUBLIC_URL + '/image/logont.png'} alt="Logo" />
      </div>

      {/* List of Anchor Links */}
      <div className="footer-list">
        {/* Render anchor links based on props */}
        <a href="#" >{a1}</a>
        <a href="#" >{a2}</a>
        <a href="#" >{a3}</a>
        <a href="#" >{a4}</a>
        <a href="#" >{a5}</a>
      </div>

      {/* Address */}
      <div className="footer-address"><p>9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada</p></div>

      {/* Social Media Icons */}
      <div className="footer-logo">
        {/* Twitter Icon */}
        <button className='btn'><i className="fa fa-twitter fa-lg"></i></button>
        {/* LinkedIn Icon */}
        <button className='btn'><i className="fa fa-linkedin-square fa-lg"></i></button>
      </div>

      {/* Copyright Text */}
      <div className="footer-end"><p>© 2022. Ntwist Inc.</p></div>
    </div>
  )
}

export default Footer;
