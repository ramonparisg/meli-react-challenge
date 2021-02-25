import React from "react";
import Text from "@components/atoms/Text/Text";

type CardHeaderProps = { children: string };

const CardHeader: React.FC<CardHeaderProps> = (props) => {
  const { children } = props;
  return <Text size={"small"}>{children}</Text>;
};

CardHeader.displayName = "CardHeader";
export default CardHeader;
