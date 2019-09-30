import React, { Component } from "react";

import AddList from "../task/AddList";

export class TaskPanel extends Component {
  render() {
    return (
      <div>
        <AddList />
      </div>
    );
  }
}

export default TaskPanel;
