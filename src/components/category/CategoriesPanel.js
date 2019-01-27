import React, { Component } from "react";
import SortableTree from "react-sortable-tree";
//

import CategoryListElement from "./CategoryListElement";

class CategoriesPanel extends Component {
  //TODO: Add axios for dowload from Api
  state = {
    categoryList: [
      {
        title: "Zajęcia",
        color: "ff0000",
        expanded: false,
        children: [
          {
            title: "Wf",
            color: "00ff00",
            expanded: true,
            children: []
          },
          {
            title: "Matematyka",
            color: "FFFFFF"
          }
        ]
      },
      {
        title: "Gry",
        color: "0000ff",
        expanded: true,
        children: [
          {
            title: "Akcji",
            color: "00ff00",
            expanded: true,
            children: []
          },
          {
            title: "MMORPG",
            color: "FFFFFF",
            expanded: true,
            children: [
              {
                title: "Wow",
                color: "aaaaaa",
                expanded: true,
                children: []
              }
            ]
          }
        ]
      }
    ],
    error: null,
    isLoaded: true
  };

  generateList = () => {
    const { categoryList } = this.state;

    return categoryList.map((element, index) => {
      return (
        <CategoryListElement key={"categoryItem-" + index} category={element} />
      );
    });
  };

  render() {
    const { error, isLoaded, categoryList } = this.state;
    let listContent = null;

    if (error) return <div>Błąd</div>;
    //FIXME: Object error to switch
    else if (!isLoaded) return <div>Loading...</div>; //FIXME: Loading effect

    if (!categoryList.length) {
      return <div>Brak kategorii</div>;
    }

    return (
      <div style={{ height: 500 }}>
        <h1>Category Panel</h1>
        {/* {this.generateList()} */}
        <SortableTree
          treeData={this.state.categoryList}
          onChange={categoryList => this.setState({ categoryList })}
        />
      </div>
    );
  }
}

export default CategoriesPanel;
