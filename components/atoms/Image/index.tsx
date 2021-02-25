import React, { FunctionComponent } from "react";
import Image from "next/image";

export interface ImageProps {
  src: string;
  width: string | number;
  height: string | number;
  alt: string;
}

const Index: FunctionComponent<ImageProps> = ({
  src,
  width,
  height,
  alt,
}: ImageProps) => {
  if (width === "100%" && height === "100%") {
    return (
      <Image
        src={src}
        layout={"responsive"}
        width={"80%"}
        height={"50%"}
        alt={alt}
      />
    );
  }
  return <Image src={src} width={width} height={height} alt={alt} />;
};

export default Index;
