import React, { Component } from "react";
import PropTypes from "prop-types";

class SmartCalendar extends Component {
  state = {
    date: new Date(),
    dateNow: new Date()
  };

  generateTitle = () => {
    const { date } = this.state;
    let monthNames = [
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

    return (
      <React.Fragment>
        {monthNames[date.getMonth()] + " "}
        {date.getFullYear()}
      </React.Fragment>
    );
  };
  generateHeader = () => {
    let dayNames = ["Pon", "Wto", "Śro", "Czw", "Pią", "Sob", "Nie"];

    return dayNames.map((day, index) => {
      return (
        <div className="smartCalDayName" key={"hederDay_" + index}>
          {day}
        </div>
      );
    });
  };

  generateTable = () => {
    const { date, dateNow } = this.state;
    // let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    let daysInMonth = new Date(year, month + 1, 0).getDate();

    let firstMonthDay = new Date(year, month, 1).getDay() - 1;
    let allDays = daysInMonth + firstMonthDay - 1;

    let response = [];

    let dayToday = null;
    if (month === dateNow.getMonth() && year === dateNow.getFullYear())
      dayToday = dateNow.getDate();

    for (let i = 0; i <= allDays; i++) {
      let classNames = "smartCalDay";
      let text = i - firstMonthDay + 1;
      if (i < firstMonthDay) {
        classNames = "smartCalEmpty";
        text = "";
      }

      if (dayToday && text >= dayToday) classNames += " smartCalDayAfter";
      if (dayToday && text === dayToday) classNames += " smartCalDayToday";

      response.push(
        <div
          key={"day_" + i}
          className={classNames}
          onClick={this.handleDayClick.bind(this, i)}
        >
          {text}
        </div>
      );
    }
    return response;
  };

  handleDayClick = (day, e) => {
    console.log(day);
    this.props.handleDateChange(
      day,
      this.state.date.getMonth(),
      this.state.date.getFullYear()
    );
  };

  handleClickOutside = e => {
    if (
      !this.node.contains(e.target) &&
      e.target.dataset.id !== this.props.arrowId
    ) {
      this.props.toggleCalendar(e);
    }
  };
  componentWillMount() {
    document.addEventListener("mousedown", this.handleClickOutside, false);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside, false);
  }

  render() {
    return (
      <div className="smartCalContainer" ref={test => (this.node = test)}>
        <div className="smartCalHead">
          <i
            className="far fa-arrow-alt-circle-left"
            onClick={() => {
              let newDate = this.state.date;
              newDate.setMonth(newDate.getMonth() - 1);
              this.setState({
                date: newDate
              });
            }}
          />
          <div className="smartCalTitle">{this.generateTitle()}</div>
          <i
            className="far fa-arrow-alt-circle-right"
            onClick={() => {
              let newDate = this.state.date;
              newDate.setMonth(newDate.getMonth() + 1);
              this.setState({
                date: newDate
              });
            }}
          />
        </div>
        <div className="smartCalBody">
          <div className="smartCalBodyHeader">{this.generateHeader()}</div>
          <div className="smartCalBodyTable">{this.generateTable()}</div>
        </div>
        <button className="smartCalendarSave">Zapisz</button>
      </div>
    );
  }
}

SmartCalendar.propTypes = {
  toggleCalendar: PropTypes.func.isRequired,
  handleDateChange: PropTypes.func.isRequired,
  arrowId: PropTypes.string.isRequired
};

export default SmartCalendar;
