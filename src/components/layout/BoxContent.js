import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import BoxFrame from "./BoxFrame";

import AddEvent from "./../events/AddEvent";
import { addFrame } from "./../../actions/appActions";

class BoxContent extends Component {
  componentDidMount() {
    let frame1 = {
      title: "Pierszy",
      content: "AddEvent"
    };

    let frame2 = {
      title: "Drugi",
      content: "AddEvent"
    };

    this.props.addFrame(frame1);
    this.props.addFrame(frame2);
  }

  choiceContent = (content, id) => {
    switch (content) {
      case "AddEvent":
        return <AddEvent frameId={id} />;
      default:
        return <AddEvent frameId={id} />;
    }
  };

  generateFrames = () => {
    const { frames } = this.props;

    return frames.map((frame, index) => {
      let showBody = false;
      if (index + 1 === frames.length) showBody = true;
      return (
        <BoxFrame
          key={"frame_" + frame.id}
          showBody={showBody}
          frameId={frame.id}
        >
          {this.choiceContent(frame.content, frame.id)}
        </BoxFrame>
      );
    });
  };

  addMore = () => {
    let frame = {
      title: "Added",
      content: "AddEvent"
    };

    this.props.addFrame(frame);
  };
  render() {
    return (
      <div>
        <h1 onClick={this.addMore.bind(this)}>AddMore</h1>
        {this.generateFrames()}
      </div>
    );
  }
}

BoxContent.propTypes = {
  frames: PropTypes.array,
  addFrame: PropTypes.func
};

const mapStateToProps = state => ({
  frames: state.app.frames
});

export default connect(
  mapStateToProps,
  { addFrame }
)(BoxContent);
