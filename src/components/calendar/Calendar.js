import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Event from './Event';

class Calendar extends Component {
  render() {
    const { calendarDate, events, displayType } = this.props;

    const daysName = [
      'Poniedziałek',
      'Wtorek',
      'Środa',
      'Czwartek',
      'Piątek',
      'Sobota',
      'Niedziela'
    ];

    let daysNamesDiv = daysName.map((name, index) => {
      return <div key={index}>{name}</div>;
    });

    let arrayDayInMonth = [];
    const dayInMonth = new Date(
      calendarDate.getFullYear(),
      calendarDate.getMonth() + 1,
      0
    ).getDate();
    const tempDate = new Date(
      calendarDate.getFullYear(),
      calendarDate.getMonth(),
      1
    );

    let firstMonthDay = tempDate.getDay();
    if (firstMonthDay === 0) firstMonthDay = 7;

    const allCells = dayInMonth + firstMonthDay - 1;

    for (let i = 0; i < firstMonthDay - 1; i++)
      arrayDayInMonth.push(
        <div key={'empty-' + i} className="calendarEmptyDay">
          {' '}
        </div>
      );

    for (let i = firstMonthDay - 1; i < allCells; i++) {
      let dayNumber = i - firstMonthDay + 2;
      let arrayEvents = events.filter(
        event =>
          event.date.getDate() === dayNumber && displayType.includes(event.type)
      );
      arrayDayInMonth.push(
        <div key={'day-' + dayNumber} className="calendar-day">
          <div className="dayTopPanel">{dayNumber}</div>
          {arrayEvents.length ? (
            <div className="dayEventPanel">
              {arrayEvents.map(event => (
                <Event id={event.id} name={event.name} key={event.id} />
              ))}
            </div>
          ) : null}
        </div>
      );
    }
    return (
      <div className="calendarMonth">
        <div className="calendarHeader">{daysNamesDiv}</div>

        <div className="calendarTable">{arrayDayInMonth}</div>
      </div>
    );
  }
}

Calendar.propTypes = {
  date: PropTypes.object.isRequired,
  calendarDate: PropTypes.object.isRequired,
  displayType: PropTypes.array.isRequired,
  events: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  date: state.calendar.date,
  calendarDate: state.calendar.calendarDate,
  displayType: state.calendar.displayType,
  events: state.event.events
});

export default connect(mapStateToProps)(Calendar);
