import React from "react";
import Currency from "@components/atoms/Text/Currency";

type CardPriceProps = { int: number; decimal: number };

const CardPrice: React.FC<CardPriceProps> = (props) => {
  const { children, int, decimal } = props;
  return (
    <Currency size={"xl"} int={int} decimal={decimal}>
      {children}
    </Currency>
  );
};

CardPrice.displayName = "CardPrice";
export default CardPrice;
