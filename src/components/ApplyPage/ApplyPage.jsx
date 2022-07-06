import React from 'react';

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
                <input type="text" placeholder="Tell us about yourself..."/>
                <input type="text" placeholder="Why are you the best candidate?"/>
                <input type="file"/>
                <input type="url" placeholder="Video URL"/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default Application;