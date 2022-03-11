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
            // when ever we use the map method to render a list of items/elements in this case "<DrumPad>" we must identify each item/elem with an unique 'key'
            // so that React can see the differences between each element on the Virtual DOM and Real DOM
            // There are two aways to use map in this case:
            //    'mode.map((drumPad) => ({...})'
            //    'mode.map((drumPad, i, modeArray) => ({...})' =>'drumPad'=object / 'i'=index / 'modeArray' new array so we can target each [i] elem
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
