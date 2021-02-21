import React from "react";
import style from "./Text.module.css";

type Sizes = "small" | "medium" | "big";

type Props = {
  children: string | number;
  size?: Sizes;
};

const Text: React.FC<Props> = ({ children, size = "small" }: Props) => {
  return <span className={style[size]}>{children}</span>;
};

export default Text;
