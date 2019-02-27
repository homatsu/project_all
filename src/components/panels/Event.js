import React, { Component } from "react";

import DailyPlan from "../events/DailyPlan";
import EventForm from "../events/EventForm";
import MoreOptions from "../events/MoreOptions";

import "./Event.css";

export class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "asd",
      description: "",
      date: new Date(),
      duration: 60,
      title: "Nowe wydarzenie",
      id: null
    };
  }

  onTextChange = e => this.setState({ [e.target.name]: e.target.value });
  onTimeChange = newDate => this.setState({ date: newDate });
  onRangeChange = e =>
    this.setState({ duration: parseInt(e.target.value, 10) });

  render() {
    return (
      <div className="eventContainer">
        <DailyPlan date={this.state.date} />
        <div className="eventMenuContainer" ref={this.refFormContainer}>
          <EventForm
            data={{
              name: this.state.name,
              description: this.state.description,
              date: this.state.date,
              duration: this.state.duration,
              title: this.state.title,
              id: this.state.id
            }}
            handleTextChange={this.onTextChange}
            handleTimeChange={this.onTimeChange}
            handleRangeChange={this.onRangeChange}
          />
          <MoreOptions />
        </div>
      </div>
    );
  }
}

export default Event;
