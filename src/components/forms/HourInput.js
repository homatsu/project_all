import React, { Component } from "react";
import PropTypes from "prop-types";

class HourInput extends Component {
  render() {
    const { hour, minute, onChange } = this.props;
    return (
      <div className="hourInputDiv">
        <input
          type="number"
          name="hour"
          className="hourInputNumber"
          min={4}
          max={23}
          placeholder="--"
          value={hour}
          onChange={onChange}
        />
        <input
          type="number"
          name="minute"
          className="hourInputNumber"
          min={0}
          max={59}
          placeholder="--"
          value={minute}
          onChange={onChange}
        />
      </div>
    );
  }
}

HourInput.propTypes = {
  hour: PropTypes.number.isRequired,
  minute: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default HourInput;
