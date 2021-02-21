import React from "react";
import Text from "@components/atoms/Text/Text";
import Button from "@components/atoms/Buttons/Button";
import Currency from "@components/atoms/Text/Currency";

type Detail = {
  condition: string;
  sold_quantity: number;
  title: string;
  price: number;
  decimals: number;
  description: string;
};

const Card: React.FC<Detail> = (props: Detail) => {
  return (
    <div className={"container"}>
      <div className={"item w-100"}>
        <Text>{props.condition}</Text> -{" "}
        <Text>{props.sold_quantity + " vendidos"}</Text>
      </div>
      <div className={"item w-100 medium-weight"}>
        <Text size={"big"}>{props.title}</Text>
      </div>
      <div className={"item w-100 mb-4 mt-2"}>
        <Currency size={"xl"}>{props.price}</Currency>
      </div>
      <div className={"item w-100 mt-5"}>
        <Button>Comprar</Button>
      </div>
    </div>
  );
};

export default Card;
