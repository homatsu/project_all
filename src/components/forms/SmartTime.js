import React, { Component } from "react";

import SmartCalendar from "./calendar/SmartCalendar";
import SmartClock from "./SmartClock";

export class SmartTime extends Component {
  state = {
    selectedDate: true
  };

  render() {
    const { selectedDate } = this.state;
    let dateBtnClass = "smartTimeBtn";
    let timeBtnClass = "smartTimeBtn";
    if (selectedDate) dateBtnClass += " smartTimeSelected";
    else timeBtnClass += " smartTimeSelected";

    return (
      <div className="smartTimeDiv">
        <div className="smartTimeButtons">
          <button
            className={dateBtnClass}
            onClick={() => this.setState({ selectedDate: true })}
          >
            Date
          </button>
          <button
            className={timeBtnClass}
            onClick={() => this.setState({ selectedDate: false })}
          >
            Time
          </button>
        </div>
        {selectedDate ? <SmartCalendar /> : <SmartClock />}
      </div>
    );
  }
}

export default SmartTime;
