import React from "react";
import Button from "@components/atoms/Buttons/Button";

type CardActionProps = { onClick: React.MouseEventHandler<HTMLButtonElement> };

const CardAction: React.FC<CardActionProps> = (props) => {
  const { onClick } = props;
  return <Button onClick={onClick}>Comprar</Button>;
};

CardAction.displayName = "CardAction";
export default CardAction;
