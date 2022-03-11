import React, { Component } from "react";
import Pad from "./components/pad";
import Controls from "./components/controls";
import "./App.css";

// See: https://forum.freecodecamp.org/t/drum-machine-sound-urls/231516/2
const modeOne = [
  {
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    keyTrigger: "S",
    id: "Heater-6",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    keyTrigger: "D",
    id: "Dsc_Oh",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    keyTrigger: "Z",
    id: "Kick_n_Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    keyTrigger: "X",
    id: "RP4_KICK_1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    keyTrigger: "C",
    id: "Cev_H2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

const modeTwo = [
  {
    keyTrigger: "Q",
    id: "Chord_1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
  },
  {
    keyTrigger: "W",
    id: "Chord_2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
  },
  {
    keyTrigger: "E",
    id: "Chord_3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
  },
  {
    keyTrigger: "A",
    id: "Give_us_a_light",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
  },
  {
    keyTrigger: "S",
    id: "Dry_Ohh",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
  },
  {
    keyTrigger: "D",
    id: "Bld_H1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
  },
  {
    keyTrigger: "Z",
    id: "punchy_kick_1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
  },
  {
    keyTrigger: "X",
    id: "side_stick_1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
  },
  {
    keyTrigger: "C",
    id: "Brk_Snr",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      powerOn: false,
      mode: modeOne,
      modeDescription: "Heater",
      display: "",
      volume: 10,
    };
    this.handleSwitchPower = this.handleSwitchPower.bind(this);
    this.handleSwitchMode = this.handleSwitchMode.bind(this);
    this.updateDisplayInfo = this.updateDisplayInfo.bind(this);
    this.clearDisplay = this.clearDisplay.bind(this);
    this.handleVolumeControl = this.handleVolumeControl.bind(this);
  }

  handleSwitchPower() {
    this.setState({
      powerOn: !this.state.powerOn,
    });
    this.state.powerOn
      ? (document.getElementById("switch-mode").disabled = true)
      : (document.getElementById("switch-mode").disabled = false);
  }

  handleSwitchMode() {
    if (this.state.powerOn) {
      if (this.state.mode === modeOne) {
        this.setState({
          mode: modeTwo,
          modeDescription: "Smooth Piano",
        });
      } else {
        this.setState({
          mode: modeOne,
          modeDescription: "Heater",
        });
      }
    }
    this.updateDisplayInfo(this.state.modeDescription);
  }

  updateDisplayInfo(info) {
    if (this.state.powerOn) {
      this.setState({
        display: info,
      });
      setTimeout(() => this.clearDisplay(), 1500);
    }
  }

  clearDisplay() {
    this.setState({
      display: "",
    });
  }

  handleVolumeControl(vol) {
    if (this.state.powerOn) {
      this.setState({
        volume: vol.target.value,
        display: "Vol" + vol.target.value,
      });
    }
    this.updateDisplayInfo(this.state.display);
  }

  render() {
    return (
      <div id="container-app">
        <header id="main-title">Drum Machine</header>
        <div id="drum-machine">
          <Pad
            powerOn={this.state.powerOn}
            mode={this.state.mode}
            updateDisplay={this.updateDisplayInfo}
          />
          <Controls
            onChangePower={this.handleSwitchPower}
            onChangeMode={this.handleSwitchMode}
            display={this.state.display}
            volume={this.state.volume}
            volumeControl={this.handleVolumeControl}
          />
        </div>
        <footer>
          <a href="https://codepen.io/new_life/full/wvebydP" target="_blank">
            &copy; Developed by Paulo Fidalgo
          </a>
        </footer>
      </div>
    );
  }
}

export default App;
