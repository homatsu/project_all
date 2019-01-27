import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import EventDetails from '../calendar/EventDetails';
import { hideContextMenu } from '../../actions/appActions';

class ContextMenu extends Component {
  constructor(props) {
    super(props);

    this.wrapperRef = React.createRef();
  }

  setDimensions = () => {
    setTimeout(() => {
      const clickX = this.props.contextMenuLocation[0];
      const clickY = this.props.contextMenuLocation[1];
      const screenW = window.innerWidth;
      const screenH = window.innerHeight;
      const rootW = this.wrapperRef.current.offsetWidth;
      const rootH = this.wrapperRef.current.offsetHeight;

      const right = screenW - clickX > rootW;
      const left = !right;
      const top = screenH - clickY > rootH;
      const bottom = !top;

      if (right) {
        this.wrapperRef.current.style.left = `${clickX + 5}px`;
      }

      if (left) {
        this.wrapperRef.current.style.left = `${clickX - rootW - 5}px`;
      }

      if (top) {
        this.wrapperRef.current.style.top = `${clickY + 5}px`;
      }

      if (bottom) {
        this.wrapperRef.current.style.top = `${clickY - rootH - 5}px`;
      }

      this.wrapperRef.current.style.opacity = 1;
    });
  };
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = event => {
    if (
      this.props.contextMenuToggle &&
      !this.wrapperRef.current.contains(event.target)
    ) {
      this.props.hideContextMenu();
    }
  };

  render() {
    const { contextMenuToggle, contextMenuContent } = this.props;
    return contextMenuToggle ? (
      <div className="contextMenuDiv" ref={this.wrapperRef}>
        {contextMenuContent.includes('eventDetails') ? <EventDetails /> : 'Nic'}
        {this.setDimensions()}
      </div>
    ) : null;
  }
}

ContextMenu.propTypes = {
  contextMenuToggle: PropTypes.bool.isRequired,
  hideContextMenu: PropTypes.func.isRequired,
  contextMenuLocation: PropTypes.array.isRequired,
  contextMenuContent: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  contextMenuToggle: state.app.contextMenuToggle,
  contextMenuLocation: state.app.contextMenuLocation,
  contextMenuContent: state.app.contextMenuContent
});
export default connect(
  mapStateToProps,
  { hideContextMenu }
)(ContextMenu);
