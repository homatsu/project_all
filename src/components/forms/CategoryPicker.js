import React, { Component } from "react";
import PropTypes from "prop-types";

class Category extends Component {
  state = {
    expanded: false
  };

  generateChildren = () => {
    return this.props.data.children.map((category, index) => {
      return (
        <Category
          key={"category_" + index}
          data={category}
          level={this.props.level + 1}
        />
      );
    });
  };
  render() {
    const { title } = this.props.data;
    let classNames = "fas fa-angle-right nestedAngleCategory";
    let showAngle = false;
    let nameMargin = 10;

    if (
      this.props.data.hasOwnProperty("children") &&
      this.props.data.children.length &&
      this.state.expanded
    )
      classNames = "fas fa-angle-down nestedAngleCategory";

    if (
      this.props.data.hasOwnProperty("children") &&
      this.props.data.children.length
    ) {
      showAngle = true;
      nameMargin = 0;
    }

    return (
      <React.Fragment>
        <div
          className="categoryPickerLabel"
          style={{ paddingLeft: this.props.level * 20 }}
        >
          <i />
          {showAngle && (
            <i
              className={classNames}
              onClick={() => this.setState({ expanded: !this.state.expanded })}
            />
          )}
          <span style={{ marginLeft: nameMargin }}>{" " + title}</span>
        </div>
        {showAngle && this.state.expanded && this.generateChildren()}
      </React.Fragment>
    );
  }
}

class CategoryPicker extends Component {
  state = {
    categoryData: [
      {
        title: "Wybrane zajęcia",
        color: "#ff0000",
        expanded: false,
        id: 1,
        children: [
          {
            title: "Wybrane zajęcia - children 1",
            color: "#ff0000",
            expanded: false,
            id: 5
          },
          {
            title: "Wybrane zajęcia - children 2",
            color: "#ff0000",
            expanded: false,
            id: 6,
            children: [
              {
                title: "dziecko 3 1",
                color: "#ff0000",
                expanded: false,
                id: 9
              },
              {
                title: "dziecko 3-1",
                color: "#ff0000",
                expanded: false,
                id: 10
              }
            ]
          }
        ]
      },
      {
        title: "Wybrane zajęcia2",
        color: "#ff0000",
        expanded: false,
        id: 2
      },
      {
        title: "Wybrane zajęcia 3",
        color: "#ff0000",
        expanded: false,
        id: 3,
        children: [
          {
            title: "Wybrane zajęcia3 - children 1",
            color: "#ff0000",
            expanded: false,
            id: 5
          },
          {
            title: "Wybrane zajęcia3 - children 2",
            color: "#ff0000",
            expanded: false,
            id: 6
          }
        ]
      },
      {
        title: "Wybrane zajęcia 4",
        color: "#ff0000",
        expanded: false,
        id: 4
      }
    ],
    containerHeight: 0
  };

  componentDidMount() {
    let height = 0;
    height += this.state.categoryData.length * 40;
    this.setState({ containerHeight: height });
  }

  generateList = () => {
    return this.state.categoryData.map((category, index) => {
      return <Category key={"category_" + index} data={category} level={1} />;
    });
  };

  render() {
    return (
      <div className="categoryPickerDiv">
        <div className="categoryPickerTopBar">
          Wybierz kategorię
          <input type="checkbox" />
        </div>
        <div
          style={{ height: this.state.containerHeight }}
          className="categoryPickerList"
        >
          {this.generateList()}
        </div>
      </div>
    );
  }
}

export default CategoryPicker;

Category.propTypes = {
  data: PropTypes.object,
  level: PropTypes.number.isRequired
};
