import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import store from "./store";
import Menu from "./components/layout/Menu";
import CalendarContainer from "./components/calendar/CalendarContainer";
// import SubMenu from './components/layout/SubMenu';
import AddEvent from "./components/events/AddEvent";
import CategoriesPanel from "./components/category/CategoriesPanel";
import ContextMenu from "./components/layout/ContextMenu";

import "./App.css";
import "react-sortable-tree/style.css";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <ContextMenu />
            <Menu />
            <CalendarContainer />
            {/* <SubMenu /> */}
            <div className="appDisplayPanel">
              <Switch>
                <Route exact path="/" component={CategoriesPanel} />
                <Route exact path="/event/add" component={AddEvent} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
