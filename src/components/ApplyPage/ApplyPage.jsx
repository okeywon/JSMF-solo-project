import React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import '../ApplyPage/ApplyPage.css'

function Application() {

    return (
        <div className="application">
            <h4>Apply Here:</h4>
            <form>
                <input className="input" type="text" placeholder="Full Name"/>
                <input className="input" type="email" placeholder="Email"/>
                <input className="input" type="phone" placeholder="Phone"/>
                <input className="input" type="street-address" placeholder="Street Address"/>
                <input className="input" type="city, state, zip" placeholder="City, State, Zip"/>
                <TextareaAutosize
                    className="input text-area"
                    maxRows={8}
                    aria-label="maximum height"
                    placeholder="Tell us about yourself."
                    style={{ width: 200 }}
                />
                <TextareaAutosize
                    className="input text-area"
                    maxRows={8}
                    aria-label="maximum height"
                    placeholder="Why are you the best candidate?"
                    style={{ width: 200 }}
                />
                <input className="input" type="file"/>
                <input className="input" type="url" placeholder="Video URL"/>
                <input className="submit-btn" type="submit"/>
            </form>
        </div>
    );
}

export default Application;