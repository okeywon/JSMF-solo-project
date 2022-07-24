import React from 'react';
import './ContactPage.css';

function ContactPage() {

    return (
        <div className="contact-container">
            <div className="contactInfo">
                <h3>Contact Us:</h3>
                <p>Email: jerrysnyderscholarship@gmail.com</p>
                <p>GoFundMe: https://gf.me/u/zb8by7</p>
                <p>Address: 8710 Isle Ct. S, Cottage Grove, MN 55016</p>
                <button><a href="https://gofund.me/d56cc64c" target="_blank">Donate</a></button>
            </div>
        </div>
  );
}

export default ContactPage;