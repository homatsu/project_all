import React, { Component } from "react";
import PropTypes from "prop-types";

import TextInput from "../forms/TextInput";
import TimePicker from "../forms/TimePicker";
import DurationInput from "../forms/DurationInput";
import "./events.css";

class EventForm extends Component {
  state = {
    errors: {},
    id: null,
    ...this.props.data
  };
  onChange = e => {
    this.setState({ errors: { [e.target.name]: "" } });
    this.props.handleTextChange(e);
  };

  onSubmit = e => {
    e.preventDefault();

    const { name } = this.props.data;

    if (name === "") {
      this.setState({ errors: { name: "Nazwa wymagana" } });
      return;
    }
  };

  generateForm = () => {
    const { name, description, date, id, duration } = this.props.data;
    return (
      <form onSubmit={this.onSubmit} className="formAddEvent">
        <TextInput
          label="Nazwa"
          showLabel={false}
          name="name"
          placeholder="Nazwa"
          value={name}
          onChange={this.onChange}
          error={this.state.errors.name}
        />
        <TextInput
          label="Opis"
          showLabel={false}
          name="description"
          placeholder="Opis"
          value={description}
          onChange={this.props.handleTextChange}
          error={this.state.errors.description}
        />

        <TimePicker date={date} onDateChange={this.props.handleTimeChange} />
        <DurationInput
          duration={duration}
          onChange={this.props.handleRangeChange}
        />
        <input
          className="addEvebtFormButton"
          type="submit"
          value={id ? "Update" : "Send"}
        />
      </form>
    );
  };
  render() {
    const { title } = this.state;
    return (
      <div className="addEventDiv">
        <div
          className="formAddEventTitle"
          style={{ width: this.props.titleWidth }}
        >
          {title}
        </div>
        {this.props.showForm && this.generateForm()}
      </div>
    );
  }
}

EventForm.propTypes = {
  data: PropTypes.object.isRequired,
  handleTextChange: PropTypes.func.isRequired,
  handleTimeChange: PropTypes.func.isRequired,
  handleRangeChange: PropTypes.func.isRequired
};

EventForm.defaultProps = {
  showForm: true
};

export default EventForm;
