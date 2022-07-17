import React from 'react';
import {CardNumberElement} from '@stripe/react-stripe-js';
import { CardExpiryElement } from '@stripe/react-stripe-js';
import './DonationPage.css';

function DonatePage() {
    
    const handleSubmit = (evt) => {
        console.log('payment attempted', evt);
    }

    return (
        <div className="donate-container">
            <div className="contentLeft">
                <p>Care to contribute to the Jerry Snyder Memorial Fund?</p>
                <p>Proceeds are tax deductible! Please request a Tax Credit via email: jerrysnyderscholarship@gmail.com</p>
                <div className="gfmBtn">
                    <button className="donate-btn-page"><a href="https://gf.me/u/zb8by7" target="_blank">Donate via GoFundMe</a></button>
                </div>
                <p>How much would you like to donate today?</p>
                <div className="cardInput">
                    <input type="decimal" placeholder="$10.00"/>
                    <input id="ccn" type="tel" inputmode="numeric" pattern="[0-9\s]{13,19}" autocomplete="cc-number" maxlength="19" placeholder="1234 1234 1234 1234"/>
                    <input type="text" placeholder="MM / YY"/>
                    <button className="submit" onClick={()=>{handleSubmit}}>Submit</button>
                </div>
            </div>
            <div className="contentRight">
                <img src="./images/qr_test_7sI8AD444fxd6xafYY.png"/>
            </div>
        </div>
  );
}

export default DonatePage;