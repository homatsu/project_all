import React, { Component } from "react";

export class SmartCalendar extends Component {
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
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    let daysInMonth = new Date(year, month + 1, 0).getDate();

    let firstMonthDay = new Date(year, month, 1).getDay();
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
        <div key={"day_" + i} className={classNames}>
          {text}
        </div>
      );
    }
    return response;
  };

  render() {
    return (
      <div className="smartCalContainer">
        <div className="smartCalHead">
          <i className="far fa-arrow-alt-circle-left" />
          <div className="smartCalTitle">{this.generateTitle()}</div>
          <i
            className="far fa-arrow-alt-circle-right"
            onClick={() =>
              this.setState({
                date: this.state.data.setMonth(2)
              })
            }
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

export default SmartCalendar;
