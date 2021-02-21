import React from "react";
import style from "@components/atoms/Text/Text.module.css";

type Sizes = "small" | "medium" | "big" | "xl";

type Props = {
  children: number;
  size?: Sizes;
};

const Currency: React.FC<Props> = ({ children, size = "small" }: Props) => {
  return (
    <span className={style[size]}>
      {new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS",
      }).format(children)}
    </span>
  );
};
export default Currency;
