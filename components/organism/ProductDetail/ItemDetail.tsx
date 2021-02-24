import React from "react";
import Image from "@components/atoms/Image/index";
import Text from "@components/atoms/Text/Text";
import Card from "@components/molecules/Card/Card";

type Detail = {
  condition: string;
  sold_quantity: number;
  title: string;
  price: number;
  decimals: number;
  description: string;
};

type Props = {
  srcImage: string;
  details: Detail;
};

const ItemDetail: React.FC<Props> = ({ srcImage, details }: Props) => {
  return (
    <div className={"container p-3"}>
      <div className={"item w-75 mh-75"}>
        <Image src={srcImage} height={"100%"} width={"100%"} />
      </div>
      <div className={"item w-25 center-div"}>
        <Card {...details} />
      </div>
      <div className={"w-75 mt-4"}>
        <div className={"medium-weight"}>
          <Text size={"big"}>Descripción del producto</Text>
        </div>
        <div className={"light-weight mt-4 justify-text lh-5"}>
          <Text size={"medium"}>{details.description}</Text>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
