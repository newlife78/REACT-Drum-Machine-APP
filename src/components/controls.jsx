import React, { Component } from "react";
import "../App.css";

class Controls extends Component {
  render() {
    const { onChangePower, onChangeMode, volume, volumeControl, display } =
      this.props;

    return (
      <div id="container-controls">
        <div id="container-subcontrols">
          <div id="power-control">
            <p>Power</p>
            <div className="switch-container">
              <input
                id="switch-power"
                type="checkbox"
                onChange={onChangePower}
              />
              <div className="switch-color-power"></div>
              <label htmlFor="switch-power"></label>
              <i className="switch-on-off"></i>
            </div>
          </div>
          <div id="mode-control">
            <p>Mode</p>
            <div className="switch-container">
              <input
                id="switch-mode"
                type="checkbox"
                onChange={onChangeMode}
                disabled
              />
              <div className="switch-color-mode"></div>
              <label htmlFor="switch-mode"></label>
            </div>
          </div>
        </div>
        <div class="volume-container">
          <i class="fas fa-volume-down" id="vol-icon" />
          <input
            type="range"
            id="vol-slider"
            min="0"
            max="100"
            step="1"
            value={volume}
            onChange={volumeControl}
          />
          <i class="fas fa-volume-up" id="vol-icon" />
        </div>
        <div id="display">{display}</div>
      </div>
    );
  }
}

export default Controls;
