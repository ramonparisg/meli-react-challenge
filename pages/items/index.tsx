import React from "react";
import ProductsTemplate from "@components/templates/ProductsTemplate/ProductsTemplate";
import List, { ItemListProps } from "@components/organism/List/List";
import { GetServerSideProps, NextPage } from "next";
import adapter from "@infrastructure/http/BaseApi/BaseApiAdapter";

interface Props {
  items: Array<ItemListProps>;
  categories: Array<string>;
}

const Items: NextPage<Props> = ({ categories, items }) => {
  return (
    <>
      <ProductsTemplate breadcrumbs={categories}>
        <List items={items} />
      </ProductsTemplate>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  query,
}) => {
  if (!query.search) {
    return {
      props: {
        categories: [],
        items: [],
      },
    };
  }
  const { categories, items } = await adapter.search(query.search as string);

  return {
    props: {
      categories,
      items: items?.map((item) => ({
        srcImage: item.picture,
        badge: item.free_shipping,
        description: item.title,
        title: item.price.amount.toString(),
      })),
    },
  };
};

export default Items;
