import React from "react";
import ProductsTemplate from "@components/templates/ProductsTemplate/ProductsTemplate";
import ItemDetail from "@components/organism/ProductDetail/ItemDetail";
import { GetServerSideProps } from "next";
import adapter from "@infrastructure/http/BaseApi/BaseApiAdapter";

interface Props {
  condition: string;
  sold_quantity: number;
  title: string;
  price: number;
  decimals: number;
  description: string;
  categories: string[];
  picture: string;
}

const ItemDetailPage: React.FC<Props> = (props) => {
  const {
    title,
    description,
    condition,
    price,
    categories,
    decimals,
    sold_quantity,
    picture,
  } = props;

  return (
    <>
      <ProductsTemplate breadcrumbs={categories}>
        <ItemDetail
          details={{
            description: description,
            condition: condition,
            decimals: decimals,
            price: price,
            title: title,
            sold_quantity: sold_quantity,
          }}
          srcImage={picture}
        />
      </ProductsTemplate>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  params,
}) => {
  const id = params.id;
  console.log("id", id);
  if (!id) {
    return {
      props: undefined,
    };
  }

  const { item } = await adapter.findItemById(id as string);

  return {
    props: {
      categories: [],
      price: item.price.amount,
      decimals: item.price.decimals,
      condition: item.condition,
      sold_quantity: item.sold_quantity,
      title: item.title,
      description: item.description,
      picture: item.picture,
    },
  };
};

export default ItemDetailPage;
