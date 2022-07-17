import React from 'react';
import {useState, useEffect} from 'react';
import {CardNumberElement} from '@stripe/react-stripe-js';
import {CardExpiryElement} from '@stripe/react-stripe-js';
import {CardCVCElement} from 'react-stripe-elements';
import {PaymentRequestButtonElement} from '@stripe/react-stripe-js';
import {
    PaymentElement,
    useStripe,
    useElements
  } from "@stripe/react-stripe-js";
import './DonationPage.css';

function DonatePage() {
    const stripe = useStripe();
    const elements = useElements();

    return (
        <div className="donate-container">
            <div>
                <p>Care to contribute to the Jerry Snyder Memorial Fund?</p>
                <p>Proceeds are tax deductible! Please request a Tax Credit through the email here: jerrysnyderscholarship@gmail.com</p>
                <button><a href="https://gf.me/u/zb8by7" target="_blank">Donate</a></button>
                <p>How much would you like to donate today?</p>
                <div className="cardContainer">
                    <input className="cardInfo" type="decimal" placeholder="$10.00"/>
                    <CardNumberElement className="cardInfo"/>
                    <CardExpiryElement className="cardInfo"/>
                    <input type="submit" placeholder="Submit Payment"/>
                    image.png
                </div>
            </div>
        </div>
  );
}

export default DonatePage;