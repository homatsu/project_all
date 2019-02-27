import React, { Component } from "react";
import PropTypes from "prop-types";

import TextInput from "../forms/TextInput";
import ColorPicker from "../forms/ColorPicker";

export class CategoryForm extends Component {
  state = {
    title: "Testowy",
    description: "Też",
    color: "#ffe220",
    id: null,
    error: {}
  };

  componentWillUnmount() {
    const { title, description, color, id } = this.state;
    this.props.handleUnmount({ title, description, color, id });
  }

  handleTextChange = e => this.setState({ [e.target.name]: e.target.value });

  handleColorChange = color => this.setState({ color });

  onSubmit = e => {
    e.preventDefault();
    const { title, description, color } = this.state;

    if (title === "") {
      this.setState({ error: { title: "Tytuł wymagany" } });
      return;
    }

    //TODO: Send To BACKEND
    //TODO: Sooner then letter spin sspis spis it lul WOW
    this.props.handleSubmit({
      title,
      description,
      color,
      id: parseInt(Math.random() * (20000 - 1) + 1, 10),
      parentId: null
    });

    this.setState({
      error: {},
      title: "",
      description: "",
      color: "#ffffff",
      id: null
    });
  };

  render() {
    const { title, description, id, color, error } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <TextInput
          label="title"
          name="title"
          placeholder="Wpisz tytuł"
          value={title}
          onChange={this.handleTextChange}
          error={error.title}
          showLabel={false}
        />
        <TextInput
          label="description"
          name="description"
          placeholder="Wpisz opis"
          value={description}
          onChange={this.handleTextChange}
          error={error.description}
          showLabel={false}
        />
        <ColorPicker color={color} handleChange={this.handleColorChange} />
        <input type="submit" value={id ? "Update" : "Send"} />
      </form>
    );
  }
}

CategoryForm.propTypes = {
  handleUnmount: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default CategoryForm;
