import React, { Component } from "react";
import PropTypes from "prop-types";

class Event extends Component {
  state = {
    height: 0,
    top: 0
  };

  componentWillMount() {
    const { parentHeight, dateStart, dateEnd } = this.props;
    let hourAmonut = 20;
    let minuteSize = parentHeight / hourAmonut / 60;
    let dateZero = new Date(
      dateStart.getFullYear(),
      dateStart.getMonth(),
      dateStart.getDate(),
      4,
      0
    );

    let duration = (dateEnd - dateStart) / 60000;
    let start = (dateStart - dateZero) / 60000;

    let top = minuteSize * start;
    let height = minuteSize * duration;

    this.setState({ height, top });
  }
  render() {
    return (
      <div
        style={{ height: this.state.height, top: this.state.top }}
        className="eventLabelDiv"
        tabIndex={0}
      >
        {this.props.name.slice(0, 20) + " "}
        {this.props.dateStart.getHours() +
          ":" +
          this.props.dateStart.getMinutes()}
        <div className="eventMenuDiv">
          <i
            className="fas fa-trash eventLabelMenuIcon"
            title="Usuń wydarzenie"
            onClick={this.props.onToggle}
          />
          <i
            className="fas fa-edit eventLabelMenuIcon"
            title="Edytuj wydarzenie"
            onClick={this.props.onEdit.bind(this, this.props.id)}
          />
        </div>
      </div>
    );
  }
}

Event.propTypes = {
  name: PropTypes.string.isRequired,
  dateStart: PropTypes.object.isRequired,
  dateEnd: PropTypes.object.isRequired,
  parentHeight: PropTypes.number.isRequired,
  onToggle: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};

export default Event;
