import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { showContextMenu } from '../../actions/appActions';

class Event extends Component {
  constructor(props) {
    super(props);

    this.rootRef = React.createRef();
  }
  onEventClick = (id, event) => {
    event.preventDefault();
    event.persist();
    const clickX = event.clientX;
    const clickY = event.clientY;
    this.props.showContextMenu({
      location: [clickX, clickY],
      content: 'eventDetails'
    });
  };
  render() {
    const { name } = this.props;
    return (
      <div
        className="simpleLabelEvent"
        onClick={this.onEventClick.bind(this, 1)}
        ref={this.rootRef}
      >
        {name.slice(0, 12)}
        ...
      </div>
    );
  }
}

Event.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  showContextMenu: PropTypes.func.isRequired
};

export default connect(
  null,
  { showContextMenu }
)(Event);
