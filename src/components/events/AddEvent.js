import React, { Component } from 'react';

class AddEvent extends Component {
  render() {
    return (
      <div>
        <h2>AddEvent</h2>
        <form>
          <label htmlfor="name">Nazwa</label>
          <input type="name" name="name" />

          <label htmlfor="desc">Opis</label>
          <input type="text" name="desc" />

          <label htmlfor="desc">Data</label>
          <input type="date" name="desc" />

          <label htmlfor="desc">Godzina</label>
          <input type="time" name="desc" />
          {'Some default values: duration, category, type'}
          <input type="submit" value="Wyśli" />
        </form>
      </div>
    );
  }
}

export default AddEvent;
