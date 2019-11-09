import React, { Component } from "react";
import PropTypes from "prop-types";

import TextInput from "../forms/TextInput";
import SmartInput from "../forms/calendar/SmartInput";
import DurationPicker from "../forms/DurationPicker";
import DaySelection from "../forms/DaySelection";
import CategoryPicker from "../forms/CategoryPicker";

class AddTask extends Component {
  render() {
    const { title, date, days, error } = this.props.data;
    return (
      <form className="AddTask_form" onSubmit={this.props.handleFormSubmit}>
        <TextInput
          label="title"
          name="title"
          placeholder="Wpisz tytuł"
          value={title}
          onChange={this.props.handleTextChange}
          error={error.title}
          showLabel={false}
        />
        <div className="AddTask_dates">
          <span className="AddTask_datesSpans">Początek wydarzeń</span>
          <SmartInput date={date} handleDate={this.props.handleDateChange} />
          <span className="AddTask_datesSpans">Koniec</span>
          <DurationPicker />
        </div>
        <DaySelection
          handleDaysChange={this.props.handleDaysChange}
          days={days}
        />
        <CategoryPicker />

        <input className="addEvebtFormButton" type="submit" value="Wyśli" />
      </form>
    );
  }
}

AddTask.propTypes = {
  frameId: PropTypes.string.isRequired,
  handleTextChange: PropTypes.func.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
  handleDateChange: PropTypes.func.isRequired,
  handleDaysChange: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

export default AddTask;
