import React from "react";
import Text, { TextProps } from "@components/atoms/Text/Text";

type ItemSubtitleProps = TextProps;

const ItemSubtitle: React.FC<ItemSubtitleProps> = (props) => {
  const { children } = props;
  return (
    <span className={"dark-gray"}>
      <Text size={"xs"}>{children}</Text>
    </span>
  );
};

ItemSubtitle.displayName = "ItemSubtitle";
export default ItemSubtitle;
