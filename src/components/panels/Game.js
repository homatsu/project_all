import React, { Component } from "react";

import SearchInput from "../forms/search/SearchInput";
import GameInfo from "../game/GameInfo";
import GameList from "../game/GameList";

import "./Event.css";

export class Game extends Component {
  state = {
    searchBox: "",
    results: []
  };
  render() {
    const { searchBox, results } = this.state;
    return (
      <div className="categoryPanelDiv">
        <h4>Gry</h4>
        <SearchInput />
        <GameInfo />
        <GameList />
      </div>
    );
  }
}

export default Game;
