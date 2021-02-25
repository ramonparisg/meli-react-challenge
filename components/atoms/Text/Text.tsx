import React from "react";
import style from "./Text.module.css";

type Sizes = "xs" | "small" | "medium" | "big";

export interface TextProps {
  children: string | number;
  size?: Sizes;
}

const Text: React.FC<TextProps> = ({ children, size = "small" }: TextProps) => {
  return <span className={style[size]}>{children}</span>;
};

export default Text;
