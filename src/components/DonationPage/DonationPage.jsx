import React from 'react';
import {CardNumberElement} from '@stripe/react-stripe-js';

function DonatePage() {
    
    const handleSubmit = (evt) => {
        console.log('payment attempted', evt);
    }

    return (
        <div className="container">
            <div>
                <p>Care to contribute to the Jerry Snyder Memorial Fund?</p>
                <p>Proceeds are tax deductible! Please request a Tax Credit through the email here: jerrysnyderscholarship@gmail.com</p>
                <button><a href="https://gf.me/u/zb8by7" target="_blank">Donate</a></button>
                <CardNumberElement />
                <button onClick={()=>{handleSubmit}}>Submit</button>
            </div>
        </div>
  );
}

export default DonatePage;