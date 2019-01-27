import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { updateDisplayTypeSelect } from '../../actions/calendarActions';
class Dropdown extends Component {
  state = {
    listOpen: false,
    headerTitle: 'Wszystko'
  };

  handleClickOutside() {
    this.setState({
      listOpen: false
    });
  }

  toggleList = () => {
    this.setState({
      listOpen: !this.state.listOpen
    });
  };

  handleListClick = (id, title) => {
    this.props.updateDisplayTypeSelect(id);
    this.setState({
      headerTitle: title
    });
  };
  render() {
    const { list } = this.props;
    const { listOpen, headerTitle } = this.state;
    return (
      <div className="dropdown-container">
        <div className="dropdown-header" onClick={this.toggleList}>
          <div className="dropdown-title">
            {headerTitle}
            {'  '}
            {listOpen ? (
              <i className="fas fa-angle-up" />
            ) : (
              <i className="fas fa-angle-down" />
            )}
          </div>
        </div>
        {listOpen && (
          <ul className="dropdown-list">
            {list.map(item => (
              <li
                key={item.id}
                className="dropdown-list-item"
                onClick={this.handleListClick.bind(this, item.id, item.title)}
              >
                {item.title}{' '}
                {item.selected ? <i className="fas fa-check" /> : null}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

Dropdown.propTypes = {
  list: PropTypes.array.isRequired,
  updateDisplayTypeSelect: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  list: state.calendar.displayTypeList
});

export default connect(
  mapStateToProps,
  { updateDisplayTypeSelect }
)(Dropdown);
