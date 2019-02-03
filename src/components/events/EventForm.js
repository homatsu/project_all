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
    this.setState({
      [e.target.name]: e.target.value,
      errors: { [e.target.name]: "" }
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const { name } = this.state;

    if (name === "") {
      this.setState({ errors: { name: "Nazwa wymagana" } });
      return;
    }
  };

  onDateChange = newDate => this.setState({ date: newDate });
  onRangeChange = e =>
    this.setState({ duration: parseInt(e.target.value, 10) });

  generateForm = () => {
    const { name, description, errors, date, id } = this.state;
    return (
      <form onSubmit={this.onSubmit} className="formAddEvent">
        <TextInput
          label="Nazwa"
          showLabel={false}
          name="name"
          placeholder="Nazwa"
          value={name}
          onChange={this.onChange}
          error={errors.name}
        />
        <TextInput
          label="Opis"
          showLabel={false}
          name="description"
          placeholder="Opis"
          value={description}
          onChange={this.onChange}
          error={errors.description}
        />

        <TimePicker date={date} onDateChange={this.onDateChange} />
        <DurationInput
          duration={this.state.duration}
          onChange={this.onRangeChange}
        />
        <input type="submit" value={id ? "Update" : "Send"} />
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
  showForm: PropTypes.bool,
  titleWidth: PropTypes.number.isRequired
};

EventForm.defaultProps = {
  showForm: true
};

export default EventForm;
