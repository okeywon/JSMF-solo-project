import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
// import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  let embedId="4dCky2vx6K8";

  return (
    <div className="container">
      <div className="grid">
        <div className="grid-col grid-col_8">
          <p>
          The mission of the Jerry Snyder Memorial Fund is to honor the musical legacy built by Jerry Snyder at Chisholm High School and to carry it forward by raising funds and awarding at least one scholarship per year to a deserving student from Chisholm High School.
          </p>
        </div>
        <div className="grid-col grid-col_4">
          {/* <RegisterForm /> */}
          <center>
            <h4>Past Applicant Videos</h4>
            <div className="video-responsive">
              <iframe
                width="200"
                height="150"
                src={`https://www.youtube.com/embed/${embedId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
            </div>
            <button className="donate-btn"><a href="https://gf.me/u/zb8by7" target="_blank">Donate</a></button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
