import React from "react";
import Currency from "@components/atoms/Text/Currency";

type CardPriceProps = { children: number };

const CardPrice: React.FC<CardPriceProps> = (props) => {
  const { children } = props;
  return <Currency size={"xl"}>{children}</Currency>;
};

CardPrice.displayName = "CardPrice";
export default CardPrice;
