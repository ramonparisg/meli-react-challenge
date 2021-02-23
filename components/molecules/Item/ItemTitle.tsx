import React from "react";
import Text from "@components/atoms/Text/Text";
import Link from "next/link";
import Currency from "@components/atoms/Text/Currency";

type ItemTitleProps = {
  children: string | number;
  link?: string;
};

const ItemTitle: React.FC<ItemTitleProps> = (props) => {
  const { children, link } = props;

  let content = <Text size={"big"}>{children}</Text>;
  if (!Number.isNaN(children)) {
    content = (
      <Currency size={"big"} minDecimals={0}>
        {children as number}
      </Currency>
    );
  }

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
