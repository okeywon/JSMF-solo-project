import React from 'react';
import './Presentation.css';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

function Presentation() {
  return (
    <div className="presentation">
        <img src="./images/CourtneyAzar.jpeg"/>
        <div className="text">
          <ul>Technologies Used:
              <li>React</li>
              <li>Redux-Saga</li>
              <li>Node.js</li>
              <li>Postgres</li>
              <li>SQL</li>
              <li>JavaScript</li>
              <li>Material UI</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Moment</li>
              <li>Formik</li>
              <li>Cloudinary</li>
              <li>Multer</li>
              <li>Stripe</li>
          </ul>
          <ul>I'd like to thank:
              <li>Prime Digital Academy</li>
              <li>Edan Schwartz</li>
              <li>Jerry Snyder Memorial Fund</li>
              <li>Rick Snyder</li>
              <li>My Amazing Family</li>
          </ul> 
        </div>
    </div>
  );
}

export default Presentation;