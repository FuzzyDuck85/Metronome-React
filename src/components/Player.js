import React from 'react';

const Player = (props) => {

  function handlePlay(){
    props.playPause();

  }




  return(
    <div>
      <button onClick={handlePlay}>{props.playing ? 'Stop' : 'Start'}</button>
    </div>

  );



}

export default Player;
