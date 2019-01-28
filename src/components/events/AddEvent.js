import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { addMemory, updateMemory } from "./../../actions/appActions";

class AddEvent extends Component {
  state = {
    test: "Takie testowy content          ",
    test2: " i taki         ",
    frameId: this.props.frameId
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

  render() {
    return (
      <div>
        <h2>AddEvent</h2>
        <form>
          <label htmlFor="name">Nazwa</label>
          <input type="name" name="name" />

          <label htmlFor="desc">Opis</label>
          <input type="text" name="desc" />

          <label htmlFor="desc">Data</label>
          <input type="date" name="desc" />

          <label htmlFor="desc">Godzina</label>
          <input type="time" name="desc" />
          {this.state.test}
          {"Some default values: duration, category, type"}

          {this.state.test2}
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
