import React from 'react';
import { Route } from 'react-router-dom';

function DonatePage() {

    return (
        <div className="container">
        <div>
            <p>Care to contribute to the Jerry Snyder Memorial Fund?</p>
            <p>Proceeds are tax deductible! Please request a Tax Credit through the email here: jerrysnyderscholarship@gmail.com</p>
            <button onClick={()=>(<Route path='/donate' component={() => { 
                window.location.href = 'https://gf.me/u/zb8by7'; 
                return null;
                }}/>)}>Donate</button>
        </div>
        </div>
  );
}

export default DonatePage;