import React from "react";
import Text, { TextProps } from "@components/atoms/Text/Text";

type ItemTitleProps = TextProps;

const ItemTitle: React.FC<ItemTitleProps> = (props) => {
  const { children } = props;
  return <Text size={"big"}>{children}</Text>;
};

ItemTitle.displayName = "ItemTitle";
export default ItemTitle;
