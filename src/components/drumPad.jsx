import React, { Component } from "react";
import "../App.css";

const inactive = {
  backgroundColor: "#7190a8",
  boxShadow: "4px 4px 4px black",
};

const active = {
  backgroundColor: "#ffa600",
  marginTop: 5,
};

class DrumPad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      padState: inactive,
    };
    this.padActive = this.padActive.bind(this);
    this.playAudio = this.playAudio.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  // Pad style active:
  padActive() {
    this.setState({ padState: active });
    setTimeout(() => this.setState({ padState: inactive }), 300);
  }

  // Play audio method:
  playAudio() {
    const audio = document.getElementById(this.props.keyTrigger);
    audio.currentTime = 0; // delay between press the button or keypad and the audio play
    if (this.props.powerOn) {
      // necessary 'if statment' to assure that an error of '(in promise) DOMException' does not occur when 'adio.play()' receives an input of empty 'audio.url'
      audio.play();
    }
    //audio.play();
    this.padActive();
    //update display:
    this.props.updateDisplay(this.props.audioId.replace(/_|-/g, " "));
  }

  // Listener for 'keydown' on the DOM:
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  // Necessary method to clean up listeners, tiers, ... from the DOM, before teh component is remove from the DOM.
  // otherwise we could have memory leaks:
  // See: https://learn.co/lessons/react-component-mounting-and-unmounting
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  // Method that handles 'keydown' when press on the DOM:
  handleKeyPress(keyPressed) {
    if (keyPressed.key.toUpperCase() === this.props.keyTrigger) {
      this.playAudio();
    }
  }

  render() {
    const { audioId, keyTrigger, audioUrl } = this.props;

    return (
      <button
        //className="drum-pad btn m-1 btn-secondary"
        className="drum-pad"
        id={audioId}
        type="btn"
        onClick={this.playAudio}
        style={this.state.padState}
      >
        {keyTrigger}
        <audio
          className="clip"
          id={keyTrigger}
          type="audio/mpeg"
          src={audioUrl}
        />
      </button>
    );
  }
}

export default DrumPad;

// FINAL NOTES:
//Another Process - subtitute of 'componentDidMount' and 'handleKeyPress':
//Press key method and lifecycle hooks ('componentDidMount'):
//componentDidMount() {
//  document.addEventListener("keydown", (keyPress) => {
//    if (keyPress.key.toUpperCase() === this.props.keyTrigger) {
//      this.playAudio();
//    }
//  });
//}
