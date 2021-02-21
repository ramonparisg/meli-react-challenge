import React from "react";

type Props = {
  children: string;
};

const Button: React.FC<Props> = ({ children }: Props) => {
  return (
    <button
      className={"w-100 bg-blue white borderless h-100 pt-2 pb-2 big-font"}
    >
      {children}
    </button>
  );
};

export default Button;
