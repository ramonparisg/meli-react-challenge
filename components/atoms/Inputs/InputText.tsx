import React, { FunctionComponent } from "react";

type InputProps = {
  placeholder?: string;
};

const InputText: FunctionComponent<InputProps> = ({
  placeholder,
}: InputProps) => {
  return (
    <input
      type={"text"}
      placeholder={placeholder}
      className={"w-100 h-100 p-2 borderless"}
    />
  );
};

export default InputText;
