import React, {Component} from 'react';
import Slider from '../components/Slider.js'
import Player from '../components/Player.js'
import Click1 from '../Audio/metro_beat.wav'
import Click2 from '../Audio/metro_bar.wav'


class MetronomeContainer extends Component {

  constructor(props){
    super(props);
    this.state = {

      bpm: 100,
      timer: null,
      count: 0,
      beatsPerMeasure: 4


    }
    this.handleBpmChange = this.handleBpmChange.bind(this);
    this.playPause = this.playPause.bind(this);
    this.playSound = this.playSound.bind(this);
    this.audio1= new Audio(Click1);
    this.audio2= new Audio(Click2);

  }

  handleBpmChange(newBpm){
    this.setState({bpm: newBpm});
  }

  playPause(){

    if (this.state.playing){
      clearInterval(this.state.timer);
    }
    else{
      this.setState({timer : setInterval(this.playSound,(60/this.state.bpm)*1000)});
    }
    let newPlaying = !(this.state.playing);
    this.setState({playing: newPlaying});

  }

  playSound(){
    const { count, beatsPerMeasure } = this.state;

    if(count % beatsPerMeasure === 0) {
      this.audio2.play();
    } else {
      this.audio1.play();
    }

    this.setState(state => ({
      count: (state.count + 1) % state.beatsPerMeasure
    }));
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
