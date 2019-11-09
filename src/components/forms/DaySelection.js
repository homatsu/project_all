import React, { Component } from "react";
import PropTypes from "prop-types";

import { shortWeekNames } from "../../data/constants";

class DaySelection extends Component {
  handleDayClick = (clicked, e) => {
    this.props.handleDaysChange(
      this.props.days.map((value, index) => {
        if (index === clicked) return !value;
        else return value;
      })
    );
  };

  handleAllClick = () => {
    let boolValue = this.props.days.some(day => day === false);
    this.props.handleDaysChange(this.props.days.map(day => boolValue));
  };

  render() {
    let classForAll = this.props.days.some(day => day === false)
      ? ""
      : " daySelection_selected";
    // console.log(this.state.days.some(day => day.selected === false));
    return (
      <div className="daySelection_container">
        {this.props.days.map((day, index) => {
          let classList = day ? " daySelection_selected" : "";
          return (
            <div
              className={"daySelection_day" + classList}
              key={index}
              data-id={index}
              onClick={e => this.handleDayClick(index, e)}
            >
              {shortWeekNames[index]}
            </div>
          );
        })}
        <div
          className={"daySelection_day" + classForAll}
          onClick={this.handleAllClick}
        >
          All
        </div>
      </div>
    );
  }
}

DaySelection.propTypes = {
  handleDaysChange: PropTypes.func.isRequired,
  days: PropTypes.array.isRequired
};

export default DaySelection;
