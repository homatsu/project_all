import React, { Component, Fragment } from "react";
import axios from "axios";

import Icon from "../../img/svg/SearchSolid";
import Results from "./Results";
import Spinner from "../../img/svg/spinner.svg";

class SearchInput extends Component {
  state = {
    searchInput: "",
    data: [],
    typingTimeout: null,
    typing: false
  };

  getData = string => {
    if (string && string.length > 2) {
      const proxyUrl = "https://cors-anywhere.herokuapp.com/";
      const queryUrl = `https://api-v3.igdb.com/games/?search=${string}&fields=first_release_date,name,cover.image_id&expand=game,covers`;
      axios
        .get(proxyUrl + queryUrl, {
          headers: {
            "user-key": "373b6072e46a0a73e48c10eebc777307",
            Accept: "application/json"
          }
        })
        .then(response => {
          // Do work here
          console.log(response.data);
          this.setState({
            data: response.data,
            typing: false
          });
        })
        .catch(e => {
          console.log("error", e);
        });
    }
  };

  onInputChange = e => {
    if (this.state.typingTimeout) clearTimeout(this.state.typingTimeout);

    let newString = e.target.value;
    this.setState({
      [e.target.name]: e.target.value,
      typingTimeout: setTimeout(() => this.getData(newString), 1000),
      typing: true
    });
  };
  render() {
    return (
      <Fragment>
        <div className="searchInputContainer">
          <input
            className="searchInput"
            type="text"
            name="searchInput"
            placeholder="Szukaj..."
            value={this.state.searchInput}
            onChange={this.onInputChange}
            onFocus={e => e.target.select()}
          />
          {this.state.typing ? (
            <img src={Spinner} alt="Loading data" />
          ) : (
            <Icon fill="rgba(0, 0, 0, 0.5)" className="searchInputIcon" />
          )}
        </div>
        <Results data={this.state.data} typing={this.state.typing} />
      </Fragment>
    );
  }
}

export default SearchInput;
