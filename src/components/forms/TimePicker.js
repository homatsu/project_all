import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import DateInput from "./DateInput";
import HourInput from "./HourInput";

class TimePicker extends Component {
  state = {
    day: this.props.date.getDate(),
    month: this.props.date.getMonth(),
    year: this.props.date.getFullYear(),
    hour: this.props.date.getHours(),
    minute: this.props.date.getMinutes()
  };

  handleDateChange = e => {
    //TODO: FIX walidation
    console.log(e.target.value);
    // let newValue;
    // if (!isNaN(e.target.value) || parseInt(e.target.value) <= 0) newValue = 1;
    // else newValue = e.target.value;
    if (e.target.value === "") e.target.value = 1;
    let value = e.target.name === "month" ? -1 : 0;
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) + value
    });

    const { day, month, year, hour, minute } = this.state;
    this.props.onDateChange(new Date(year, month, day, hour, minute));
  };

  render() {
    const { day, month, year, hour, minute } = this.state;
    return (
      <Fragment>
        <DateInput
          day={day}
          month={month}
          year={year}
          onChange={this.handleDateChange}
        />
        <HourInput
          hour={hour}
          minute={minute}
          onChange={this.handleDateChange}
        />
      </Fragment>
    );
  }
}

TimePicker.propTypes = {
  date: PropTypes.object.isRequired,
  onDateChange: PropTypes.func.isRequired
};

export default TimePicker;
