import React from "react";
import PropTypes from "prop-types";

import "./Forms.css";

const TextInput = ({
  label,
  name,
  placeholder,
  value,
  type,
  onChange,
  error,
  showLabel
}) => {
  return (
    <div className="textInputDiv">
      {showLabel ? <label htmlFor={name}>{label}</label> : null}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="textInput"
      />
      {error && <div className="textInputError">{error}</div>}
    </div>
  );
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  showLabel: PropTypes.bool.isRequired
};

TextInput.defaultProps = {
  type: "text",
  showLabel: true
};
export default TextInput;
