import React from 'react';
// Define a functional component called "Leftside".
// This component takes several props as input to customize its content.
const Leftside = ({
  imgSrcLeft,     // Prop for the source URL of the image on the left side.
  imgAltLeft,     // Prop for the alternative text for the image.
  headingLeft,    // Prop for the heading text on the left side.
  paragraphLeft,  // Prop for the paragraph text on the left side.
  linkLeft        // Prop for the link text on the left side.
}) => {
  return (
    // This is the main container for the left side content.
    <div className="left-side-container">
      {/* This div contains the image on the left side. */}
      <div className="left-side-image">
        {imgSrcLeft && imgAltLeft && <img className="left-side-img" src={imgSrcLeft} alt={imgAltLeft} />}
      </div>
      {/* This div contains the textual content on the left side. */}
      <div className="left-side-content">
        <div>
          {headingLeft && <h1 className="left-side-heading">{headingLeft}</h1>}
        </div>
        <div>
          {paragraphLeft && <p className='left-side-paragraph'>{paragraphLeft}</p>}
        </div>
        <div className='left-side-div'>
          {linkLeft && <a href ="#" className="left-side-link">{linkLeft}</a>}
        </div>
      </div>
    </div>
  );
}


export default Leftside;
