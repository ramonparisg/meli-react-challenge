import React, { FunctionComponent } from "react";
import ProductsTemplate from "@components/templates/ProductsTemplate/ProductsTemplate";
import List from "@components/organism/List/List";

const Items: FunctionComponent = () => {
  return (
    <>
      <ProductsTemplate breadcrumbs={["text1", "text2", "text 3"]}>
        <List
          items={[
            {
              srcImage: "/logo.png",
              title: "Title",
              description: "description",
              subtitle: "subtitle",
              badge: true,
            },
            {
              srcImage: "/logo.png",
              title: "Title",
              description: "description",
            },
            {
              srcImage: "/logo.png",
              title: "Title",
              description: "description",
            },
            {
              srcImage: "/logo.png",
              title: "Title",
              description: "description",
            },
          ]}
        />
      </ProductsTemplate>
    </>
  );
};

export default Items;
