import React from 'react';

const Slider = (props) => {

  function bpmChange(event){
    props.onBpmChange(event.target.value);
  }

  return(
    <div>
      <input type="range" min="40" max="218" value={props.bpm} onChange={bpmChange}/>
    </div>

  )


}
export default Slider;
