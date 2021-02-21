import React, { FunctionComponent } from "react";
import Image from "next/image";

type ImageProps = {
  src: string;
  width: string | number;
  height: string | number;
};

const Index: FunctionComponent<ImageProps> = ({
  src,
  width,
  height,
}: ImageProps) => {
  if (width === "100%" && height === "100%") {
    return (
      <Image src={src} layout={"responsive"} width={"80%"} height={"50%"} />
    );
  }
  return <Image src={src} width={width} height={height} />;
};

export default Index;
