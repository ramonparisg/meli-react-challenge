import React, { FunctionComponent } from "react";
import ProductsTemplate from "@components/templates/ProductsTemplate/ProductsTemplate";
import ItemDetail from "@components/organism/ProductDetail/ItemDetail";

const ItemDetailPage: FunctionComponent = () => {
  return (
    <>
      <ProductsTemplate breadcrumbs={["text", "text2", "text3"]}>
        <ItemDetail
          details={{
            description: "Descriptions",
            condition: "Nuevo",
            decimals: 0,
            price: 2000.5,
            title: "Title",
            sold_quantity: 200,
          }}
          srcImage={"/logo.png"}
        />
      </ProductsTemplate>
    </>
  );
};

export default ItemDetailPage;
