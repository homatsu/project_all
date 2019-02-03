import React from "react";
import PropTypes from "prop-types";

const MainCategory = ({ category, handleCircleClick }) => {
  const { title, color, id } = category;
  return (
    <div className="mainCategoryDiv">
      <div
        className="mainCategoryCircle"
        style={{ backgroundColor: color }}
        onClick={handleCircleClick.bind(this, id)}
      />
      {/* <div className="mainCategoryDetails"> */}
      <span className="mainCategoryTitle">{title}</span>
      <span className="mainCategoryDesc">Taki opisik</span>
      {/* </div> */}
    </div>
  );
};

MainCategory.propTypes = {
  category: PropTypes.object.isRequired,
  handleCircleClick: PropTypes.func.isRequired
};

export default MainCategory;
