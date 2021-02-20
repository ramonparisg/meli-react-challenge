import React, { FunctionComponent } from "react";
import PropTypes from "prop-types";

type InputProps = {
  placeholder: string;
};

const InputText: FunctionComponent<InputProps> = ({ placeholder }) => {
  return <input type={"text"} placeholder={placeholder} />;
};

InputText.propTypes = {
  placeholder: PropTypes.string,
};

export default InputText;
