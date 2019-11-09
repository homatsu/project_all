import React, { Component } from "react";
import PropTypes from "prop-types";

import cover from "../../img/svg/cover.svg";
//import spinner from "../../img/svg/spinner.svg";

class Results extends Component {
  render() {
    let results = this.props.data.map(row => {
      let coverUrl;
      if (!row.hasOwnProperty("cover")) coverUrl = cover;
      else
        coverUrl = `https://images.igdb.com/igdb/image/upload/t_cover_small/${row.cover.image_id}.jpg`;
      return (
        <li key={row.id} className="resultsItem">
          <div className="resultsItemImage">
            <img src={coverUrl} alt={`Cover for ${row.name}`} />
          </div>
          <div className="resultsItemDescription">{row.name}</div>
        </li>
      );
    });
    if (results.length)
      return <ul className="resultsContainerList">{results}</ul>;
    return null;
  }
}

Results.propTypes = {
  data: PropTypes.array.isRequired,
  typing: PropTypes.bool.isRequired
};

export default Results;
