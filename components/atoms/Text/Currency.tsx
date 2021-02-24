import React from "react";
import style from "@components/atoms/Text/Text.module.css";

type Sizes = "small" | "medium" | "big" | "xl";

type Props = {
  children: number;
  size?: Sizes;
  minDecimals?: number;
};

const Currency: React.FC<Props> = ({
  children,
  size = "small",
  minDecimals = 0,
}: Props) => {
  return (
    <span className={style[size]}>
      {new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS",
        minimumFractionDigits: minDecimals,
      }).format(children)}
    </span>
  );
};
export default Currency;
