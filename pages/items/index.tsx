import React from "react";
import SearchItemsTemplate from "@components/templates/SearchItemTemplate/SearchItemsTemplate";
import { ItemListProps } from "@components/organism/List/List";
import { GetServerSideProps, NextPage } from "next";
import adapter from "@infrastructure/http/BaseApi/BaseApiAdapter";

interface Props {
  items: Array<ItemListProps>;
  categories: Array<string>;
}

const Items: NextPage<Props> = ({ categories, items }) => {
  return <SearchItemsTemplate breadcrumbs={categories} items={items} />;
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
        link: `/items/${encodeURIComponent(item.id)}`,
        subtitle: "random text",
      })),
    },
  };
};

export default Items;
