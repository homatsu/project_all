import React, { Component } from "react";
import PropTypes from "prop-types";

class DateInput extends Component {
  state = {
    monthType: "text"
  };

  handleFocus = e => {
    this.setState({
      monthType: "number"
    });
    e.target.select();
  };

  showCalendar = e => {
    e.preventDefault();
    alert("click");
  };
  render() {
    const { monthType } = this.state;
    const { day, month, year, onChange } = this.props;
    const monthName = [
      "Styczeń",
      "Luty",
      "Marzec",
      "Kwiecień",
      "Maj",
      "Czerwiec",
      "Lipiec",
      "Sierpień",
      "Wrzesień",
      "Październik",
      "Listopad",
      "Grudzień"
    ];

    let monthValue =
      monthType === "text" ? monthName[month] : parseInt(month, 10) + 1;

    return (
      <div className="dateInputDiv">
        <input
          type="number"
          name="day"
          className="dateInputNumber"
          value={day}
          onFocus={e => e.target.select()}
          onChange={onChange}
        />
        <input
          type={monthType}
          name="month"
          className="dateInputMonth"
          value={monthValue}
          min={1}
          max={12}
          onClick={e => alert("jej")}
          onFocus={this.handleFocus}
          onBlur={e => this.setState({ monthType: "text" })}
          onChange={onChange}
        />

        {/* <div className="dateInputMonth" onClick={() => alert("sad")}>
          {monthName[month]}
        </div> */}
        <input
          type="number"
          name="year"
          className="dateInputNumber"
          value={year}
          onFocus={e => e.target.select()}
          onChange={onChange}
        />
      </div>
    );
  }
}

DateInput.propTypes = {
  day: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default DateInput;
