import React from "react";
import Text from "@components/atoms/Text/Text";

type CardTitleProps = { children: string };

const CardTitle: React.FC<CardTitleProps> = (props) => {
  const { children } = props;
  return <Text size={"big"}>{children}</Text>;
};

CardTitle.displayName = "CardTitle";
export default CardTitle;
