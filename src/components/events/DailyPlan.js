import React, { Component } from "react";
import PropTypes from "prop-types";
import uuid from "uuid";

import EventLabel from "./EventLabel";
import ConfirmBox from "../layout/ConfirmBox";
import { CalculatePostions } from "./CalculatePostions";

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
      width: 0,
      showConfirm: false,
      positions: []
    };
    this.planRef = React.createRef();
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    this.setState({
      height: this.planRef.current.offsetHeight,
      width: this.planRef.current.offsetWidth,
      data: this.state.data.sort((a, b) => a.dateStart - b.dateStart)
    });

    let newPostions = CalculatePostions(
      this.state.data,
      this.planRef.current.offsetWidth
    );
    this.setState({ positions: newPostions });

    this.handleEditClick(this.state.data[2].id);
  }

  toggleConfirmBox = index => {
    console.log(index);
    this.setState({ showConfirm: !this.state.showConfirm });
  };

  handleEditClick = id => {
    //let selectedEvent = this.state.data.filter(event => event.id === id)[0];
    //let duration = (selectedEvent.dateEnd - selectedEvent.dateStart) / 60000;
    // let formState = {
    //   name: selectedEvent.name,
    //   title: selectedEvent.name,
    //   id,
    //   date: selectedEvent.dateStart,
    //   description: selectedEvent.description,
    //   duration
    // };
    //TODO: HANDLE
  };

  generateEvents = () => {
    const { positions } = this.state;
    console.log(positions);
    return this.state.data.map((event, index) => {
      return (
        <EventLabel
          name={event.name}
          dateStart={event.dateStart}
          dateEnd={event.dateEnd}
          key={"event_" + index}
          position={positions[index]}
          onToggle={this.toggleConfirmBox.bind(this, index)}
          id={event.id}
          onEdit={this.handleEditClick}
        />
      );
    });
  };

  generateAxis = () => {
    const { width, height } = this.state;
    let padding = 20;
    // let centerWidth = width / 2;
    let centerHeight = height / 2;

    let start = 4;
    let end = 23;

    let amountsHour = end - start;
    let perHour = (width - 2 * padding) / (amountsHour + 1);

    let hours = [];
    for (let i = 4; i <= 23; i++) {
      let text = i + ":00";
      hours.push(
        <span
          className="dailyPlanHour"
          style={{
            left: perHour * (i - start),
            width: perHour
          }}
          key={"hour_" + i}
        >
          {text}
        </span>
      );
    }

    return (
      <div
        className="axisDailyPlan"
        style={{
          width: width - 2 * padding,
          top: centerHeight,
          left: padding
        }}
      >
        {hours}
      </div>
    );
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
        {this.state.width && this.generateAxis()}
        {this.state.height && this.generateEvents()}
      </div>
    );
  }
}

DailyPlan.propTypes = {
  date: PropTypes.object.isRequired
};

export default DailyPlan;
