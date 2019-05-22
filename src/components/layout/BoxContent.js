import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import BoxFrame from "./BoxFrame";

import Event from "./../panels/Event";
import Category from "./../panels/Category";
import Game from "./../panels/Game";

import { addFrame } from "./../../actions/appActions";

class BoxContent extends Component {
  componentDidMount() {
    let frame1 = {
      title: "Pierszy",
      content: "Event"
    };

    let frame2 = {
      title: "Drugi",
      content: "Game"
    };

    this.props.addFrame(frame1);
    //this.props.addFrame(frame2);
  }

  choiceContent = (content, id) => {
    switch (content) {
      case "AddEvent":
        return <Event />;
      case "Category":
        return <Category />;
      case "Game":
        return <Game />;
      default:
        return <Event frameId={id} />;
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
          title={frame.title}
        >
          {this.choiceContent(frame.content, frame.id)}
        </BoxFrame>
      );
    });
  };

  addMore = () => {
    let frame = {
      title: "Added",
      content: "Event"
    };

    this.props.addFrame(frame);
  };
  render() {
    return (
      <div style={{ width: "100%" }}>
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
