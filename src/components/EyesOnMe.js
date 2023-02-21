// Code EyesOnMe Component Here
import React from 'react';


function EyesOnMe() {

  function HandleBlur() {
    console.log('Hey! Eyes on me!');
  }

  function HandleFocus() {
    console.log('Good!');
  }
  return (
    <div>
      <button onFocus={HandleFocus} onBlur={HandleBlur}>Eyes on me</button>

    </div>
  )

}

export default EyesOnMe;