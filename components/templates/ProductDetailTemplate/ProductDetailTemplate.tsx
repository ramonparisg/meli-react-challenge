import React from "react";
import Breadcrumb from "@components/molecules/Breacumb/Breadcrumb";
import Image from "@components/atoms/Image";
import Card from "@components/molecules/Card/Card";
import Text from "@components/atoms/Text/Text";

type Detail = {
  condition: string;
  sold_quantity: number;
  title: string;
  price: number;
  decimals: number;
  description: string;
  picture: string;
};

type Props = {
  item: Detail;
  breadcrumbs: string[];
};

const ProductDetailTemplate: React.FC<Props> = (props) => {
  const { item, breadcrumbs } = props;
  const headerText = `${item.condition} - ${item.sold_quantity} vendidos`;

  return (
    <div className={"container"}>
      <div className={"item w-100 mb-2"}>
        <Breadcrumb links={breadcrumbs} />
      </div>
      <div className={"item w-100 bg-white"}>
        <div className={"container p-3"}>
          <div className={"item w-75 mh-75"}>
            <Image src={item.picture} height={"100%"} width={"100%"} />
          </div>
          <div className={"item w-25 center-div"}>
            <Card {...item}>
              <Card.Header>{headerText}</Card.Header>
              <Card.Title>{item.title}</Card.Title>
              <Card.Price>{item.price}</Card.Price>
              <Card.Action onClick={() => alert("Not implemented yet :)")} />
            </Card>
          </div>
          <div className={"w-75 mt-4"}>
            <div className={"medium-weight"}>
              <Text size={"big"}>Descripción del producto</Text>
            </div>
            <div
              className={"light-weight mt-4 justify-text lh-5"}
              style={{ whiteSpace: "pre-line" }}
            >
              <Text size={"medium"}>{item.description}</Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailTemplate;
