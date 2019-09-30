import React, { Component } from "react";

export class TaskPanel extends Component {
  state = {
    showInputs: false
  };

  handleFocus = e => {
    this.setState({
      showInputs: !this.state.showInputs
    });
  };
  showTextPlaceholder = () => {
    return (
      <span onClick={this.handleFocus} autoFocus={true}>
        Dodaj kolejną listę
      </span>
    );
  };

  showInputs = () => {
    return <input type="text" onBlur={this.handleFocus} />;
  };
  render() {
    return (
      <form action="">
        {!this.state.showInputs ? this.showTextPlaceholder() : null}
        {this.state.showInputs ? this.showInputs() : null}
      </form>
    );
  }
}

export default TaskPanel;
