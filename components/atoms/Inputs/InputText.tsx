import React, { FunctionComponent } from "react";

const InputText: FunctionComponent<React.HTMLProps<HTMLInputElement>> = (
  props
) => {
  const { placeholder, onChange, value } = props;
  return (
    <input
      type={"text"}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      className={"w-100 h-100 p-2 borderless small-font"}
    />
  );
};

export default InputText;
