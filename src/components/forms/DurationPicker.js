import React, { Component, Fragment } from "react";

import SmartInput from "./calendar/SmartInput";

class DurationPicker extends Component {
  state = {
    menu_option: 2,
    selected: "week"
  };

  handleChange = id => {
    this.setState({ menu_option: id });
  };

  showInside = () => {
    switch (this.state.menu_option) {
      case 0:
        return (
          <Fragment>
            <div
              className="DurationPicker_choice"
              onClick={e => this.handleChange(1, e)}
            >
              Data
            </div>
            <div
              className="DurationPicker_choice"
              onClick={e => this.handleChange(2, e)}
            >
              Okres
            </div>
          </Fragment>
        );
      case 1:
        return <SmartInput />;

      case 2:
        return this.renderIntervals();
    }
  };

  renderIntervals = () => {
    let weekClass =
      this.state.selected === "week" ? "durationPicker_selected" : "";
    let monthClass =
      this.state.selected === "month" ? "durationPicker_selected" : "";
    return (
      <Fragment>
        <div
          className={"durationPicker_intervals " + weekClass}
          onClick={() => this.setState({ selected: "week" })}
        >
          Week
        </div>
        <div
          className={"durationPicker_intervals " + monthClass}
          onClick={() => this.setState({ selected: "month" })}
        >
          Month
        </div>
      </Fragment>
    );
  };

  render() {
    return (
      <div className="durationPicker_container">
        {this.showInside()}
        {this.state.menu_option ? (
          <i
            className="fas fa-undo durationPicker_back"
            onClick={() => this.setState({ menu_option: 0, selected: "none" })}
          />
        ) : null}
      </div>
    );
  }
}

export default DurationPicker;
