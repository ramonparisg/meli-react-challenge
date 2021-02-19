import React from "react";
import PropTypes from "prop-types";

const InputText = ({ placeholder }) => {
  return <input type={"text"} placeholder={placeholder} />;
};

InputText.propTypes = {
  placeholder: PropTypes.string,
};

export default InputText;
