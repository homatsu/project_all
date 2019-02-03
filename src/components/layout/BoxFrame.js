import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { removeFrame } from "./../../actions/appActions";

import styles from "./BoxContent.css";

class BoxFrame extends Component {
  closeFrame = () => {
    this.props.removeFrame(this.props.frameId);
  };

  render() {
    return (
      <div className={styles.frame}>
        <div className={styles.frameHead}>
          {this.props.title}
          <i className="fas fa-times" onClick={this.closeFrame.bind(this)} />
        </div>
        {this.props.showBody ? (
          <div className={styles.frameBody}>{this.props.children}</div>
        ) : null}
      </div>
    );
  }
}

BoxFrame.propTypes = {
  showBody: PropTypes.bool,
  frameId: PropTypes.string,
  removeFrame: PropTypes.func,
  title: PropTypes.string
};

BoxFrame.defaultProps = {
  title: "Kolejne okono"
};

export default connect(
  null,
  { removeFrame }
)(BoxFrame);
