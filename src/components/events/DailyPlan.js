import React, { Component } from "react";
import PropTypes from "prop-types";
import uuid from "uuid";

import EventLabel from "./EventLabel";
import ConfirmBox from "../layout/ConfirmBox";

import "./events.css";

class DailyPlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: "Pierwsze zadanie",
          dateStart: new Date(2019, 0, 30, 8, 30),
          dateEnd: new Date(2019, 0, 30, 9, 30),
          description: "",
          id: uuid()
        },
        {
          name: "Trzecie zadanie",
          dateStart: new Date(2019, 0, 30, 10, 30),
          dateEnd: new Date(2019, 0, 30, 10, 45),
          description: "asd",
          id: uuid()
        },
        {
          name:
            "Może drugie to zadanie ale jest ciekawe zobaczymy co z tego wyjdzie zadanie",
          dateStart: new Date(2019, 0, 30, 22, 45),
          dateEnd: new Date(2019, 0, 30, 23, 30),
          description: "fasda",
          id: uuid()
        },
        {
          name: "Pierwsze zadanie 3",
          dateStart: new Date(2019, 0, 30, 13, 15),
          dateEnd: new Date(2019, 0, 30, 17, 45),
          description: "aaa",
          id: uuid()
        },
        {
          name: "Pierwsze zadanie 2",
          dateStart: new Date(2019, 0, 30, 18, 0),
          dateEnd: new Date(2019, 0, 30, 18, 30),
          description: "123",
          id: uuid()
        }
      ],
      height: 0,
      showConfirm: false
    };
    this.planRef = React.createRef();
  }

  componentDidMount() {
    this.setState({
      height: this.planRef.current.offsetHeight,
      data: this.state.data.sort((a, b) => a.dateStart - b.dateStart)
    });

    this.handleEditClick(this.state.data[2].id);
  }

  toggleConfirmBox = index => {
    console.log(index);
    this.setState({ showConfirm: !this.state.showConfirm });
  };

  handleEditClick = id => {
    let selectedEvent = this.state.data.filter(event => event.id === id)[0];
    let duration = (selectedEvent.dateEnd - selectedEvent.dateStart) / 60000;
    let formState = {
      name: selectedEvent.name,
      title: selectedEvent.name,
      id,
      date: selectedEvent.dateStart,
      description: selectedEvent.description,
      duration
    };

    this.props.createNewForm(formState);
  };

  generateEvents = () => {
    return this.state.data.map((event, index) => {
      return (
        <EventLabel
          name={event.name}
          dateStart={event.dateStart}
          dateEnd={event.dateEnd}
          key={"event_" + index}
          parentHeight={this.state.height}
          onToggle={this.toggleConfirmBox.bind(this, index)}
          id={event.id}
          onEdit={this.handleEditClick}
        />
      );
    });
  };
  render() {
    return (
      <div className="dailyPlanDiv" ref={this.planRef}>
        <ConfirmBox
          title="Usuwanie wydarzenia"
          show={this.state.showConfirm}
          onToggle={this.toggleConfirmBox.bind(this, null)}
        >
          Czy chesz usunąć to wydarzenie?
        </ConfirmBox>
        <h4>Plan In Here man</h4>
        {this.state.height !== 0 ? this.generateEvents() : null}
      </div>
    );
  }
}

DailyPlan.propTypes = {
  date: PropTypes.object.isRequired,
  createNewForm: PropTypes.func.isRequired
};

export default DailyPlan;
