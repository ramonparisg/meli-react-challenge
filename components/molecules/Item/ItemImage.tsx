import React from "react";
import Image, { ImageProps } from "@components/atoms/Image/index";
import Link from "next/link";

type ImageItemProps = ImageProps & { link?: string };
const ItemImage: React.FC<ImageItemProps> = (props) => {
  const { src, link, width = 90, height = 90 } = props;
  if (link) {
    return (
      <Link href={link}>
        <Image src={src} width={width} height={height} />
      </Link>
    );
  }

  return <Image src={src} width={width} height={height} />;
};

ItemImage.displayName = "ItemImage";
export default ItemImage;
