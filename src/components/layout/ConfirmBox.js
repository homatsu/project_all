import React, { Component } from "react";
import PropTypes from "prop-types";

import "./layout.css";

class ConfirmBox extends Component {
  //TODO: Add on agree func
  render() {
    if (!this.props.show) return null;
    return (
      <div className="confirmBoxOverlay">
        <div className="confirmBoxDiv">
          <div className="confirmBoxTopbar">
            <h3>{this.props.title}</h3>
            <i
              className="fas fa-times confrimBoxTopbarCross"
              onClick={this.props.onToggle}
            />
          </div>
          <div className="confirmBoxBody">{this.props.children}</div>
          <div className="confirmBoxControls">
            <button className="confirmBoxCancel" onClick={this.props.onToggle}>
              Nie
            </button>
            <button className="confirmBoxYes">Tak</button>
          </div>
        </div>
      </div>
    );
  }
}

ConfirmBox.propTypes = {
  onAgree: PropTypes.func,
  onDisagree: PropTypes.func,
  title: PropTypes.string,
  show: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired
};

export default ConfirmBox;
