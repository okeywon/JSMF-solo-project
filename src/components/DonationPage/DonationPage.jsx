import React from 'react';
import {CardNumberElement} from '@stripe/react-stripe-js';
import './DonationPage.css';

function DonatePage() {
    
    const handleSubmit = (evt) => {
        console.log('payment attempted', evt);
    }

    return (
        <div className="donate-container">
            <div>
                <p>Care to contribute to the Jerry Snyder Memorial Fund?</p>
                <p>Proceeds are tax deductible! Please request a Tax Credit through the email here: jerrysnyderscholarship@gmail.com</p>
                <button><a href="https://gf.me/u/zb8by7" target="_blank">Donate</a></button>
                <p>How much would you like to donate today?</p>
                <input type="decimal" placeholder="$10.00"/>
                <CardNumberElement />
                <button onClick={()=>{handleSubmit}}>Submit</button>
            </div>
        </div>
  );
}

export default DonatePage;