import React from "react";
import style from "./Button.module.scss";

type Colors = "blue";

type Props = {
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  color?: Colors;
};

const Button: React.FC<Props> = ({
  children,
  onClick,
  color = "blue",
}: Props) => {
  return (
    <button
      onClick={onClick}
      className={`w-100 borderless h-100 pt-2 pb-2 big-font ${style[color]} ${style.button}`}
    >
      {children}
    </button>
  );
};

export default Button;
