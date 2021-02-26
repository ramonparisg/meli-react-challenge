import React from "react";
import style from "@components/atoms/Text/Text.module.css";

type Sizes = "small" | "medium" | "big" | "xl";

type Props = {
  int: number;
  decimal?: number;
  size?: Sizes;
  minDecimals?: number;
};

const Currency: React.FC<Props> = ({
  int,
  decimal,
  size = "small",
  minDecimals = 0,
}: Props) => {
  return (
    <>
      <span className={style[size]}>
        {new Intl.NumberFormat("es-AR", {
          style: "currency",
          currency: "ARS",
          minimumFractionDigits: minDecimals,
        }).format(int)}
        <sup>{decimal === 0 ? "00" : decimal}</sup>
      </span>
    </>
  );
};
export default Currency;
