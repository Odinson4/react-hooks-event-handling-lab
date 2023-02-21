// Code Keypad Component Here
import React from 'react';


function Keypad() {

    function HandleChange() {
        console.log('Entering password...');
    }
    return (
        <div>
            <input onChange={HandleChange} type="password" />
        </div>
    )
}

export default Keypad;