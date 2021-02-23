import React from "react";

type ButtonProps = {
  icon: string;
};

const IconButton: React.FC<ButtonProps> = ({ icon }: ButtonProps) => {
  return (
    <button
      className={"w-100 h-100 borderless bg-light-gray"}
      style={{ fontSize: "16px" }}
    >
      {icon}
    </button>
  );
};

export default IconButton;
