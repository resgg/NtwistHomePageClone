import React, { useEffect, useState } from 'react';
import './Navbar.css';

// Define a functional component called "Navbar" which takes menu item labels (l1, l2, l3, l4, l5) as props.
const Navbar = ({ l1, l2, l3, l4, l5 }) => {
  // State variables to track scrolling, menu visibility, and screen size.
  const [scrolling, setScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Effect hook to add event listeners when the component mounts.
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize(); 

    // Cleanup by removing event listeners when the component unmounts.
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Function to handle scrolling and update the "scrolling" state.
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  // Function to handle window resizing and update the "isSmallScreen" state.
  const handleResize = () => {
    if (window.innerWidth <= 783) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  // Determine the logo image source based on scrolling.
  const logoImageSrc = scrolling
    ? `${process.env.PUBLIC_URL}/image/ntwistdark.png`
    : `${process.env.PUBLIC_URL}/image/logont.png`;

  // Function to toggle the mobile menu.
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    // conditional class "scrolling" based on scrolling state.
    <nav className={`navbar ${scrolling ? 'scrolling' : ''}`}>
      {/* Logo */}
      <div className="navbar-logo">
        <img className="logo-footer-img" src={logoImageSrc} alt="Logo" />
      </div>

      {/* Mobile Menu (hamburger menu) */}
      {isSmallScreen ? (
        <div className="hamburger-container">
          <button className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <div className="bar"><i className="fa fa-bars" aria-hidden="true"></i></div>
          </button>
          {isMenuOpen && (
            <ul className={`navbar-items ${isMenuOpen ? 'open' : ''}`}>
              {/* Render menu items based on props */}
              <li>{l1}</li>
              <li>{l2}</li>
              <li>{l3}</li>
              <li>{l4}</li>
              <li>{l5}</li>
            </ul>
          )}
        </div>
      ) : (
        // Desktop Menu 
        <ul className="navbar-items">
          {/* Render menu items based on props */}
          <li>{l1}</li>
          <li>{l2}</li>
          <li>{l3}</li>
          <li>{l4}</li>
          <li>{l5}</li>
        </ul>
      )}
    </nav>
  );
};


export default Navbar;
