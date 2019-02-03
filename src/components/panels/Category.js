import React, { Component } from "react";

import CategoryGroup from "../category/CategoryGroup";
import CategoryForm from "../category/CategoryForm";

import "./Event.css";

export class Category extends Component {
  state = {
    mainCategories: [
      {
        title: "Wybrane zajęcia",
        color: "#ff0000",
        expanded: false,
        id: 1,
        parentId: null
      },
      {
        title: "Gry",
        color: "#0000ff",
        expanded: false,
        id: 2,
        parentId: null
      },
      {
        title: "BabJaha",
        color: "#00ff00",
        expanded: false,
        id: 3,
        parentId: null
      },
      {
        title: "Gry2",
        color: "#00ff00",
        expanded: false,
        id: 4,
        parentId: 2
      },
      {
        title: "Gry3",
        color: "#00ff00",
        expanded: false,
        id: 5,
        parentId: 4
      },
      { id: null, title: "Grupy główne" }
    ],
    categoryParent: null,
    categoryLevel: [{ id: null, title: "Grupy główne" }],
    title: "",
    description: "",
    color: "",
    id: null
  };

  handleSaveState = formData => this.setState({ ...formData });

  handleFormSubmit = formData => {
    this.setState({
      mainCategories: [
        ...this.state.mainCategories,
        { ...formData, parentId: this.state.categoryParent }
      ]
    });
  };

  handleChangeLevel = id => {
    const { categoryLevel, mainCategories } = this.state;

    let findCategory = mainCategories.find(element => element.id === id);

    let isIndex = categoryLevel.findIndex(element => element.id === id);
    if (isIndex === -1)
      this.setState({ categoryLevel: [...categoryLevel, findCategory] });
    else {
      let array = [...categoryLevel];
      array.splice(isIndex + 1, 99);
      this.setState({
        categoryLevel: array
      });
    }

    this.setState({ categoryParent: id });
  };

  render() {
    return (
      <div className="categoryPanelDiv">
        <h4>Category</h4>
        <CategoryGroup
          data={this.state.mainCategories.filter(
            category => category.parentId === this.state.categoryParent
          )}
          levelChange={this.handleChangeLevel}
          categoryLevel={this.state.categoryLevel}
        />
        <CategoryForm
          handleUnmount={this.handleSaveState}
          handleSubmit={this.handleFormSubmit}
        />
      </div>
    );
  }
}

export default Category;
