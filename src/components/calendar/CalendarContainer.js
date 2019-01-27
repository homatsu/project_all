import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Calendar from './Calendar';
import Dropdown from '../layout/Dropdown';
import { updateCalendarMonth } from '../../actions/calendarActions';

import '../css/Calendar.css';

class CalendarContainer extends Component {
  onMonthChangeClik = value => {
    const { calendarDate, updateCalendarMonth } = this.props;

    let newDate = new Date(
      calendarDate.getFullYear(),
      calendarDate.getMonth() + value,
      2
    );
    updateCalendarMonth(newDate);
  };

  render() {
    const { calendarDate, events } = this.props;
    let monthNames = [
      'Styczeń',
      'Luty',
      'Marzec',
      'Kwiecień',
      'Maj',
      'Czerwiec',
      'Lipiec',
      'Sierpień',
      'Wrzesień',
      'Październik',
      'Listopad',
      'Grudzień'
    ];

    return (
      <div className="appCalendar">
        <div className="calendarTopbar">
          <span className="dayName">Poniedziałek 15</span>
          <div className="calendarTopbarCenter">
            <span
              className="monthButton"
              onClick={this.onMonthChangeClik.bind(this, -1)}
            >
              {'<'}
            </span>
            <span className="monthName">
              {monthNames[calendarDate.getMonth()]}
            </span>
            <span
              className="monthButton"
              onClick={this.onMonthChangeClik.bind(this, 1)}
            >
              {'>'}
            </span>
          </div>
          <span className="yearNumber">{calendarDate.getFullYear()}</span>

          <Dropdown />
        </div>
        <div className="calendarMonthDiv">
          Month
          {events.map(event => (
            <div key={event.id}>{event.name}</div>
          ))}
        </div>
        <div className="calendarWeekDiv">Week</div>
        <Calendar />
      </div>
    );
  }
}

CalendarContainer.propTypes = {
  calendarDate: PropTypes.object.isRequired,
  events: PropTypes.array.isRequired,
  updateCalendarMonth: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  calendarDate: state.calendar.calendarDate,
  events: state.event.timeEvents
});

export default connect(
  mapStateToProps,
  { updateCalendarMonth }
)(CalendarContainer);
