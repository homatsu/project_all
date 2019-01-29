import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import TextInput from "./../forms/TextInput";
import TimePicker from "./../forms/TimePicker";
import DurationInput from "./../forms/DurationInput";
import { addMemory, updateMemory } from "./../../actions/appActions";

class AddEvent extends Component {
  state = {
    frameId: this.props.frameId,
    name: "",
    description: "",
    errors: {},
    date: new Date(),
    duration: 60
  };

  componentWillMount() {
    const { addMemory, frameId, framesMemory } = this.props;

    let oldMemory = framesMemory.find(element => element.frameId === frameId);

    if (oldMemory) {
      this.setState(oldMemory);
    } else {
      addMemory(this.state);
    }
  }

  componentWillUnmount() {
    this.props.updateMemory(this.state);
  }

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

  render() {
    const { name, description, errors, date } = this.state;

    return (
      <div style={{ backgroundColor: "white" }}>
        <h2>AddEvent</h2>
        <form onSubmit={this.onSubmit}>
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
          <input type="submit" value="Wyśli" />
        </form>
      </div>
    );
  }
}

AddEvent.propTypes = {
  addMemory: PropTypes.func,
  updateMemory: PropTypes.func,
  frameId: PropTypes.string,
  framesMemory: PropTypes.array
};

const mapStateToProps = state => ({
  framesMemory: state.app.framesMemory
});

export default connect(
  mapStateToProps,
  { addMemory, updateMemory }
)(AddEvent);
