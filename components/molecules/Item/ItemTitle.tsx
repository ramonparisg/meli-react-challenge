import React from "react";
import Text from "@components/atoms/Text/Text";
import Link from "next/link";

type ItemTitleProps = {
  children: string | number;
  link?: string;
};

const ItemTitle: React.FC<ItemTitleProps> = (props) => {
  const { children, link } = props;

  const content = <Text size={"big"}>{children}</Text>;

  if (link) {
    return (
      <Link href={link} passHref>
        <a>{content}</a>
      </Link>
    );
  }

  return content;
};

ItemTitle.displayName = "ItemTitle";
export default ItemTitle;
