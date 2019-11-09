import React, { Component } from "react";
import uuid from "uuid";
import PropTypes from "prop-types";

import SmartCalendar from "./SmartCalendar";

import "./smartCalendar.css";

const validateRange = (min, max, value) => {
  if (value < min) return min;
  else if (value > max) return max;

  return value;
};

class SmartInput extends Component {
  state = {
    label: {
      day: 0,
      month: 0,
      year: 0
    },
    date: this.props.date,
    showCalendar: false
  };

  componentWillMount() {
    const { date } = this.props;
    this.setState({
      label: {
        day: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear()
      }
    });
  }

  handle = e => e.target.select();

  handleInputChange = e => {
    let newValue;
    console.log(e.target.name);
    if (e.target.name === "day")
      newValue = validateRange(1, 31, e.target.value);
    else if (e.target.name === "month")
      newValue = validateRange(1, 12, e.target.value);
    else if (e.target.name === "year")
      newValue = validateRange(1, 3000, e.target.value);

    this.setState({
      label: { ...this.state.label, [e.target.name]: newValue }
    });
  };

  toggleSmartCalendar = () => {
    this.setState({ showCalendar: !this.state.showCalendar });
  };

  handleDateChange = (day, month, year) => {
    let newDate = this.props.date;
    newDate.setFullYear(year);
    newDate.setMonth(month);
    newDate.setDate(day);

    this.props.handleDate(newDate);
    this.setState({
      label: {
        day,
        month,
        year
      }
    });
  };

  render() {
    const { day, month, year } = this.state.label;
    let generateId = uuid();
    return (
      <div className="smartInput_container">
        <input
          type="number"
          autoComplete="off"
          value={day}
          name="day"
          onFocus={this.handle}
          onChange={this.handleInputChange}
          className="smartInput_numberInput"
        />
        /
        <input
          type="number"
          autoComplete="off"
          value={month}
          name="month"
          onFocus={this.handle}
          onChange={this.handleInputChange}
          className="smartInput_numberInput"
        />
        /
        <input
          type="number"
          autoComplete="off"
          value={year}
          name="year"
          onFocus={this.handle}
          onChange={this.handleInputChange}
          className="smartInput_numberInput"
        />
        <i
          onClick={this.toggleSmartCalendar}
          data-id={generateId}
          className="fas fa-caret-down smartCal_toggle"
        />
        {"                  "}
        {this.state.showCalendar && (
          <SmartCalendar
            toggleCalendar={this.toggleSmartCalendar}
            handleDateChange={this.handleDateChange}
            arrowId={generateId}
          />
        )}
      </div>
    );
  }
}

SmartInput.defaultProps = {
  date: new Date(),
  handleDate: () => {
    console.log("jej");
  }
};

SmartInput.propTypes = {
  date: PropTypes.object,
  handleDate: PropTypes.func
};

export default SmartInput;
