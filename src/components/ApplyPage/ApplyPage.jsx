import React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';

function Application() {

    return (
        <div>
            <h4>Apply Here:</h4>
            <form>
                <input type="text" placeholder="Full Name"/>
                <input type="email" placeholder="Email"/>
                <input type="phone" placeholder="Phone"/>
                <input type="street-address" placeholder="Street Address"/>
                <input type="city, state, zip" placeholder="City, State, Zip"/>
                <TextareaAutosize
                    maxRows={8}
                    aria-label="maximum height"
                    placeholder="Tell us about yourself."
                    style={{ width: 200 }}
                />
                <TextareaAutosize
                    maxRows={8}
                    aria-label="maximum height"
                    placeholder="Why are you the best candidate?"
                    style={{ width: 200 }}
                />
                <input type="file"/>
                <input type="url" placeholder="Video URL"/>
                <input type="submit"/>
            </form>
        </div>
    );
}

export default Application;