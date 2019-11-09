import React, { Component } from "react";
import PropTypes from "prop-types";

import AddTask from "../task/AddTask";
import AddSummary from "../task/AddSummary";

import "../task/task.css";

class TaskPanel extends Component {
  state = {
    title: "This is some simple title for couple of events ;D",
    date: new Date(),
    days: [true, false, true, false, true, false, false],
    error: {}
  };

  handleTextChange = e => this.setState({ [e.target.name]: e.target.value });

  handleFormSubmit = e => {
    e.preventDefault();
  };

  handleDateChange = newDate => {
    this.setState({ date: newDate });
  };

  handleDaysChange = newDays => {
    this.setState({ days: newDays });
    // console.log(newDays);
  };

  render() {
    return (
      <div className="taskPanel_container">
        <AddTask
          frameId={this.props.frameId}
          handleTextChange={this.handleTextChange}
          handleFormSubmit={this.handleFormSubmit}
          handleDateChange={this.handleDateChange}
          handleDaysChange={this.handleDaysChange}
          data={{
            title: this.state.title,
            date: this.state.date,
            days: this.state.days,
            error: this.state.error
          }}
        />

        {/* Test data to send */}
        <AddSummary
          dateStart={this.state.date}
          dateEnd={new Date("2019-10-28")}
          days={this.state.days}
        />
      </div>
    );
  }
}

TaskPanel.propTypes = {
  frameId: PropTypes.string.isRequired
};

export default TaskPanel;
