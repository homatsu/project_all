import React, { Component } from "react";

import SearchMovie from "../movie/SearchMovie";

import "./Event.css";

const apiV3 = "a93381c257c75c2dd9c57ea257b78da3";
//const apiV4 =
// "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTMzODFjMjU3Yzc1YzJkZDljNTdlYTI1N2I3OGRhMyIsInN1YiI6IjVjNjk2MzM1YzNhMzY4NzQ1ZWUzYzlmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C_1Ki_L7iy5dSWuehCue6N4hQ2GIWjhl3yiBUYKR5pw";

export class Movie extends Component {
  state = {
    searchBox: "",
    results: []
  };

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });

    let newQuerry = e.target.value;
    if (newQuerry && newQuerry.length > 1) {
      fetch(
        `https://api.themoviedb.org/3/search/multi?api_key=${apiV3}&query=${newQuerry}`
      )
        .then(response => response.json())
        .then(myResponse => {
          this.setState({ results: myResponse.results });
          console.log(myResponse);
        });
    } else this.setState({ results: [] });
  };

  render() {
    const { searchBox, results } = this.state;
    return (
      <div className="categoryPanelDiv">
        <h4>Movies</h4>
        <form>
          <input
            type="text"
            value={searchBox}
            onChange={this.onInputChange}
            name="searchBox"
            autoComplete="off"
          />
        </form>
        {results && results.length ? (
          <SearchMovie resultsList={results} />
        ) : null}
      </div>
    );
  }
}

export default Movie;
