import React from "react";
import Image from "@components/atoms/Image/index";
import Link from "next/link";

type ImageItemProps = { src: string; link?: string };
const ItemImage: React.FC<ImageItemProps> = (props) => {
  const { src, link } = props;
  const content = <Image src={src} width={90} height={90} />;
  if (link) {
    return (
      <Link href={link} passHref>
        <a>{content}</a>
      </Link>
    );
  }

  return content;
};

ItemImage.displayName = "ItemImage";
export default ItemImage;
