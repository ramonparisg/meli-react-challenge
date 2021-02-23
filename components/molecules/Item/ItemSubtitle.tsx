import React from "react";
import Text, { TextProps } from "@components/atoms/Text/Text";

type ItemSubtitleProps = TextProps;

const ItemSubtitle: React.FC<ItemSubtitleProps> = (props) => {
  const { children } = props;
  return <Text size={"small"}>{children}</Text>;
};

ItemSubtitle.displayName = "ItemSubtitle";
export default ItemSubtitle;
