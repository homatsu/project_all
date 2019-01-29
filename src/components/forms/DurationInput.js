import React, { Component } from "react";
import PropTypes from "prop-types";

class DurationInput extends Component {
  render() {
    return (
      <div className="durationInputDiv">
        <input
          type="range"
          min={0}
          max={120}
          step={5}
          value={this.props.duration}
          onChange={this.props.onChange}
          className="durationInputRange"
        />
        <input
          type="number"
          min={0}
          value={this.props.duration}
          onChange={this.props.onChange}
          className="hourInputNumber"
        />
      </div>
    );
  }
}

DurationInput.propTypes = {
  duration: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default DurationInput;
