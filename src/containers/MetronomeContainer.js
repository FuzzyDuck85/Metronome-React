import React, {Component} from 'react';
import Slider from '../components/Slider.js'
import Player from '../components/Player.js'
import Click1 from '../Audio/click1.wav'

class MetronomeContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      playing: false,
      bpm: 100,
      timer: null,


    }
    this.handleBpmChange = this.handleBpmChange.bind(this);
    this.playPause = this.playPause.bind(this);
    this.playSound = this.playSound.bind(this);
    this.audio= new Audio(Click1);
  }

  handleBpmChange(newBpm){
    this.setState({bpm: newBpm});
  }

  playPause(){

    if (!this.state.playing){
      this.setState({timer : setInterval(this.playSound,(60/this.state.bpm)*1000)});
    }
    else{
      clearInterval(this.state.timer)
    }
    let newPlaying = !(this.state.playing);
    this.setState({playing: newPlaying});

  }

  playSound(){
    this.audio.play();
  }




  render(){
    const {playing, bpm} = this.state;
    return (
      <div className="metronome">
      <div className="text">
      <h1>Metronome</h1>
      <h2>BPM: {bpm}</h2>
      </div>
      <br></br>

      <div>

      <Slider
      bpm={this.state.bpm}
      onBpmChange={this.handleBpmChange}
      />
      </div>
      <div>
        <br></br>
      <Player
      playing={this.state.playing}
      playPause={this.playPause}
      />
      </div>

      </div>

    )
  }

}
export default MetronomeContainer;
