import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import uuid from "uuid";

import { weekNames } from "../../data/constants";

import { addEvents } from "../../actions/eventActions";

class AddSummary extends Component {
  state = {
    eventsList: []
  };

  componentWillMount() {
    weekNames.unshift(weekNames.pop());

    const { dateStart, dateEnd } = this.props;

    let counter = 1;
    let eventsList = [];
    let days = [...this.props.days];
    days.unshift(days.pop());
    let newDate = new Date(dateStart.getTime());
    //console.log(dateStart, dateEnd, days);
    for (; newDate <= dateEnd; newDate.setDate(newDate.getDate() + 1)) {
      let dayInWeek = newDate.getDay();
      if (days[dayInWeek]) {
        eventsList.push({
          id: uuid(),
          date: new Date(newDate.getTime()),
          duration: "50",
          name: "Nowy Event",
          description: "Jej",
          status: 0,
          type: 0
        });
        //console.log(eventsList);
      }

      counter++;
    }
    this.setState({ eventsList: eventsList });
  }

  generateTable = () => {
    const { dateStart, dateEnd } = this.props;

    let counter = 1;
    let rederedContent = [];
    let days = [...this.props.days];
    days.unshift(days.pop());
    let newDate = new Date(dateStart.getTime());
    //console.log(dateStart, dateEnd, days);
    for (; newDate <= dateEnd; newDate.setDate(newDate.getDate() + 1)) {
      //console.log(dateStart.getDate());
      let dayInWeek = newDate.getDay();
      if (days[dayInWeek]) {
        let dayInMonth = newDate.getDate();
        let newContent = (
          <tr key={"tableRow_" + counter}>
            <td>{counter}</td>
            <td>{weekNames[dayInWeek]}</td>
            <td>
              {dayInMonth +
                "-" +
                (newDate.getMonth() + 1) +
                "-" +
                newDate.getFullYear()}
            </td>
            <td></td>
          </tr>
        );

        rederedContent.push(newContent);
        counter++;
      }
    }
    // console.log(rederedContent);
    return rederedContent;
  };

  addEvents = () => {
    this.props.addEvents(this.state.eventsList);
  };
  render() {
    let contentArray = this.generateTable();
    if (contentArray.length !== 0) {
      return (
        <div className="addSummary_container">
          <table className="addSummary_table">
            <thead className="addSummary_thead">
              <tr>
                <th>#</th>
                <th>Dzień</th>
                <th>Data</th>
              </tr>
            </thead>
            <tbody className="addSummary_tbody">{contentArray}</tbody>
          </table>
          <button onClick={this.addEvents}>Dodaj wydarzenia ;D</button>
        </div>
      );
    } else return null;
  }
}

AddSummary.defaultProps = {
  dateEnd: new Date(),
  days: [false, false, false, false, false, false, false]
};

AddSummary.propTypes = {
  dateStart: PropTypes.object.isRequired,
  dateEnd: PropTypes.object,
  days: PropTypes.array
};

export default connect(
  null,
  { addEvents }
)(AddSummary);
