import React from "react";
import Text from "@components/atoms/Text/Text";

type ItemDescriptionProps = {
  children: string | number;
};

const ItemDescription: React.FC<ItemDescriptionProps> = (props) => {
  const { children } = props;
  return <Text size={"medium"}>{children}</Text>;
};

ItemDescription.displayName = "ItemDescription";
export default ItemDescription;
