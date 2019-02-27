import React, { Component } from "react";
import PropTypes from "prop-types";

class Event extends Component {
  state = {
    height: 0,
    width: 0
  };

  render() {
    const { duration, height, start, value } = this.props.position;
    let className = "eventLabelProgressUp";
    if (height === "bottom") className = "eventLabelProgressDown";
    return (
      <div
        style={{
          width: duration,
          left: start
        }}
        className={className}
      >
        <div
          style={{
            right: value
          }}
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
      </div>
    );
  }
}

Event.propTypes = {
  name: PropTypes.string.isRequired,
  dateStart: PropTypes.object.isRequired,
  dateEnd: PropTypes.object.isRequired,
  position: PropTypes.object.isRequired,
  onToggle: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};

export default Event;
