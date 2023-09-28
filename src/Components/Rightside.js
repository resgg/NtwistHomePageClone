
import React from 'react';

// Define a functional component called "Rightside".

const Rightside = ({
  imgSrcRight,     // Prop for the source URL of the image on the right side.
  imgAltRight,     // Prop for the alternative text for the image.
  headingRight,    // Prop for the heading text on the right side.
  paragraphRight,  // Prop for the paragraph text on the right side.
  linkRight,       // Prop for the link text on the right side.
  href             // Prop for the href attribute of the link.
}) => {
  return (
    // This is the main container for the right side content.
    <div className="right-side-container">
      {/* This div contains the image on the right side.*/}
      <div className="right-side-image">
        {imgSrcRight && imgAltRight && (
          <img className="right-side-img" src={imgSrcRight} alt={imgAltRight} />
        )}
      </div>
      {/* This div contains the textual content on the right side.*/}
      <div className="right-side-content">
        <div>
          {headingRight && <h1 className="right-side-heading">{headingRight}</h1>}
        </div>
        <div>
          {paragraphRight && <p className='right-side-paragraph'>{paragraphRight}</p>}
        </div>
        <div className='right-side-div'>
          {linkRight && href && <a href={href} className="right-side-link">{linkRight}</a>}
        </div>
      </div>
    </div>
  );
}


export default Rightside;
