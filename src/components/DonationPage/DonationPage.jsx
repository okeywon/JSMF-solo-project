import React from 'react';
import {useState, useEffect} from 'react';
import {CardNumberElement} from '@stripe/react-stripe-js';
import {
    PaymentElement,
    useStripe,
    useElements
  } from "@stripe/react-stripe-js";
import './DonationPage.css';

function DonatePage() {
    const stripe = useStripe();
    const elements = useElements();
  
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      if (!stripe) {
        return;
      }
    })
    
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
                <form id="payment-form" onSubmit={handleSubmit}>
                    <PaymentElement id="payment-element" />
                    <button disabled={isLoading || !stripe || !elements} id="submit">
                        <span id="button-text">
                        {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
                        </span>
                    </button>
                    {/* Show any error or success messages */}
                    {message && <div id="payment-message">{message}</div>}
                </form>
            </div>
        </div>
  );
}

export default DonatePage;