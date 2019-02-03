import React, { Component } from "react";
import PropTypes from "prop-types";

import MainCategory from "./MainCategory";

import "./Category.css";

export class CategoryGroup extends Component {
  generateCategories = () => {
    const { data } = this.props;

    return data.map((category, index) => {
      return (
        <MainCategory
          category={category}
          key={"main_category_" + index}
          handleCircleClick={this.props.levelChange}
        />
      );
    });
  };

  generateTitles = () => {
    return this.props.categoryLevel.map((category, index) => {
      return (
        <span
          onClick={this.props.levelChange.bind(this, category.id)}
          key={"categoryTitle_" + index}
        >
          {" -> " + category.title}
        </span>
      );
    });
  };
  render() {
    return (
      <div className="mainCategoriesGrup">
        <div className="mainCategoriesTitle">{this.generateTitles()}</div>
        {this.generateCategories()}
      </div>
    );
  }
}

CategoryGroup.propTypes = {
  data: PropTypes.array.isRequired,
  levelChange: PropTypes.func.isRequired,
  categoryLevel: PropTypes.array.isRequired
};

export default CategoryGroup;
