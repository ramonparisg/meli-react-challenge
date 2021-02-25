import React, { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
};

const IconButton: React.FC<ButtonProps> = ({ children }: ButtonProps) => {
  return (
    <button className={"w-100 h-100 borderless bg-light-gray"}>
      {children}
    </button>
  );
};

export default IconButton;
