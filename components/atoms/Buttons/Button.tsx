import React from "react";

type Props = {
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<Props> = ({ children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={"w-100 bg-blue white borderless h-100 pt-2 pb-2 big-font"}
    >
      {children}
    </button>
  );
};

export default Button;
