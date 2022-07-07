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
          "Jerry Snyder, the Iron Range band leader everyone liked..." This caption from a Star Tribune article dated July 24, 2020 captured our band director well. Jerry Snyder made people in his bands feel welcomed, important, happy, and capable. His students over 30 years received a quality music education under his skillful direction. Many of his students have carried music into their adult lives, whether professionally or just for fun. To honor the man who gifted so many with mentoring, friendship, and quality music experiences in the Chisholm Schools and various community and church groups in Minnesota and Arizona, we have established a fund in his honor.
          </p>

          <p>
          The mission of the Jerry Snyder Memorial Fund is to honor the musical legacy built by Jerry Snyder at Chisholm High School and to carry it forward by raising funds and awarding at least one scholarship per year to a deserving student from Chisholm High School. Our initial goal is to raise $10,000, enough to fund multiple scholarships in upcoming years.  Our longer-term goal is to make this an annual event in perpetuity, with possible expansions to other gifts and scholarships. Any amount you can donate will be helpful.
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
