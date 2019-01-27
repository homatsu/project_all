import React, { Component, Fragment } from "react";

import styles from "./Category.css";

class CategoryListElement extends Component {
  state = {
    showChildren: true
  };

  generateChildrenList = list => {
    return list.map((element, index) => {
      return <CategoryListElement category={element} />;
    });
  };

  showCategory = () => {
    const { name, color } = this.props.category;
    return (
      <div
        style={{ backgroundColor: "#" + color }}
        onClick={() =>
          this.setState({ showChildren: !this.state.showChildren })
        }
      >
        {name}
      </div>
    );
  };

  render() {
    const { category } = this.props;
    let childrenList = null;

    if (
      category.hasOwnProperty("children") &&
      this.state.showChildren &&
      Array.isArray(category.children) &&
      category.children.length
    ) {
      childrenList = (
        <div className={styles.childrenGrup}>
          {this.generateChildrenList(category.children)}
        </div>
      );
    }
    return (
      <Fragment>
        {this.showCategory()}
        {childrenList}
      </Fragment>
    );
  }
}

export default CategoryListElement;
