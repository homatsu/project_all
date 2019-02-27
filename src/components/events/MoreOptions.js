import React, { Component } from "react";

import CategoryPicker from "../forms/CategoryPicker";

export class MoreOptions extends Component {
  render() {
    return (
      <div className="moreOptionsContainer">
        <div className="moreOptionsTitle">Więcej opcji</div>
        <CategoryPicker />
      </div>
    );
  }
}

export default MoreOptions;
