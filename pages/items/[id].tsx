import React from "react";
import { GetServerSideProps } from "next";
import adapter from "@infrastructure/http/BaseApi/BaseApiAdapter";
import ProductDetailTemplate from "@components/templates/ProductDetailTemplate/ProductDetailTemplate";

interface Props {
  categories: string[];
  item: {
    condition: string;
    sold_quantity: number;
    title: string;
    price: number;
    decimals: number;
    description: string;
    picture: string;
  };
}

const ItemDetailPage: React.FC<Props> = (props) => {
  const { categories, item } = props;

  return <ProductDetailTemplate breadcrumbs={categories} item={item} />;
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  params,
}) => {
  const id = params.id;
  if (!id) {
    return {
      props: undefined,
    };
  }

  const { item, categories } = await adapter.findItemById(id as string);

  return {
    props: {
      categories,
      item: {
        price: item.price.amount,
        decimals: item.price.decimals,
        condition: item.condition,
        sold_quantity: item.sold_quantity,
        title: item.title,
        description: item.description,
        picture: item.picture,
      },
    },
  };
};

export default ItemDetailPage;
