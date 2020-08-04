import React from 'react';

const Slider = (props) => {

  function bpmChange(event){
    props.onBpmChange(event.target.value);
  }

  return(
    <div className="slidercontainer">
      <input type="range" min="40" max="500" value={props.bpm} onChange={bpmChange} className="slider"/>
    </div>

  )


}
export default Slider;
