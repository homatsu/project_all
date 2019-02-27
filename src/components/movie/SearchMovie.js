import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Movie.css";

class SearchElement extends Component {
  render() {
    const { title, year, pathUrl } = this.props;
    return (
      <div className="searchElementContainer">
        <img
          src={`https://image.tmdb.org/t/p/w200${pathUrl}`}
          alt={`Poster for ${title}`}
          className="searchElementImage"
        />
        <div className="searchElementText">{title + "(" + year + ")"} </div>
      </div>
    );
  }
}
SearchElement.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  pathUrl: PropTypes.string
};

class SearchMovie extends Component {
  makeList = () => {
    const { resultsList } = this.props;
    let fullList = [];

    let tvs = resultsList.filter(element => element.media_type === "tv");
    fullList = [
      ...fullList,
      tvs.map((obj, index) => {
        return (
          <SearchElement
            title={obj.original_name}
            key={index}
            pathUrl={obj.poster_path}
          />
        );
      })
    ];

    let movies = resultsList.filter(obj => obj.media_type === "movie");

    fullList = [
      ...fullList,
      movies.map((obj, index) => {
        return (
          <SearchElement
            title={obj.original_title}
            key={index}
            year={obj.release_date}
            pathUrl={obj.poster_path}
          />
        );
      })
    ];

    return fullList;
  };

  render() {
    return <div>{this.makeList()}</div>;
  }
}

SearchMovie.propTypes = {
  resultsList: PropTypes.array.isRequired
};
export default SearchMovie;
