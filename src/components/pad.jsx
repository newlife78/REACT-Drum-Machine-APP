import React, { Component } from "react";
import DrumPad from "./drumPad";
import "../App.css";

class Pad extends Component {
  render() {
    const { powerOn, mode, updateDisplay } = this.props;

    return (
      <div id="container-pad">
        {mode.map((drumPad) => (
          <DrumPad
            key={drumPad.id}
            keyTrigger={drumPad.keyTrigger}
            audioId={drumPad.id}
            audioUrl={drumPad.url}
            powerOn={powerOn}
            updateDisplay={updateDisplay}
          />
        ))}
      </div>
    );
  }
}

export default Pad;
