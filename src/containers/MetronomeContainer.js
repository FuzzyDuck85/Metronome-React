import React, {Component} from 'react';
import Slider from '../components/Slider.js'
import Player from '../components/Player.js'

class MetronomeContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      // playing: false,
      bpm: 100

    }
    this.handleBpmChange = this.handleBpmChange.bind(this);
  }

  handleBpmChange(newBpm){
    this.setState({bpm: newBpm});
  }


  render(){
    const {playing, bpm} = this.state;
    return (
      <div>
      <div>
      <h1>Metronome</h1>
      <h2>BPM: {bpm}</h2>
      <Slider
      bpm={this.state.bpm}
      onBpmChange={this.handleBpmChange}
      />
      </div>
      </div>
    )
  }

}
export default MetronomeContainer;
