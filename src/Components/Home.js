import React from 'react';
import './Home.css';

// Define a functional component called "Home" which takes some props as input.
// Props are like variables passed from the parent component to this component.
const Home = ({
  homeTitleOne, 
  homeTitleTwo, 
  homeLink     
}) => {
  return (
    // This is the main container for the home page content.
    <div className="home-page">
      {/* Left content section */}
      <div className="left-content">
        {/* The home title */}
        <h1 className="home-title">
          {/* Using {homeTitleOne} and {homeTitleTwo} to display dynamic content */}
          <span>{homeTitleOne}</span><br></br>
          <span>{homeTitleTwo}</span>
        </h1>
        {/* A link in the home page */}
        <a href="#" className="home-link">{homeLink}</a>
      </div>

      {/* Right content section */}
      <div className="right-content">
        {/* Displaying an image */}
        <img src={process.env.PUBLIC_URL + '/image/home.png'} alt="home Image" className="home-image" />
      </div>
    </div>
  )
}


export default Home;

