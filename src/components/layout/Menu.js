import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../css/Menu.css';

class Menu extends Component {
  render() {
    return (
      <div className="appMenu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/event/add">AddEvent</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;
