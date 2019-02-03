import React, { Component } from "react";

import DailyPlan from "../events/DailyPlan";
import EventForm from "../events/EventForm";

import "./Event.css";

export class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      formData: [
        {
          name: "",
          date: new Date(),
          description: "",
          duration: 60,
          title: "Nowe wydarzenie"
        }
      ],
      containerWidth: 0
    };
    this.refFormContainer = React.createRef();
  }

  generateNewForm = params => {
    this.setState({ formData: [...this.state.formData, params] });
  };

  componentDidMount() {
    let widthContainer = this.refFormContainer.current.offsetWidth;
    this.setState({ containerWidth: widthContainer });
  }

  generateForms = () => {
    const { formData, containerWidth } = this.state;

    if (containerWidth) {
      let quantityForms = formData.length;
      let titleWidth = (containerWidth - 100) / quantityForms;
      return formData.map((event, index) => {
        let show = false;
        if (index + 1 === this.state.formData.length) show = true;
        return (
          <EventForm
            data={event}
            key={event + "_" + index}
            showForm={show}
            titleWidth={titleWidth}
          />
        );
      });
    }
    return null;
  };
  render() {
    return (
      <div className="eventContainer">
        <DailyPlan
          date={this.state.date}
          createNewForm={this.generateNewForm}
        />
        <div className="eventMenuContainer" ref={this.refFormContainer}>
          {this.generateForms()}
        </div>
      </div>
    );
  }
}

export default Event;
