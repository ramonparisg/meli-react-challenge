import React from "react";
import List from "@components/organism/List/List";
import Breadcrumb from "@components/molecules/Breacumb/Breadcrumb";

const SearchProductsTemplate: React.FC = () => {
  return (
    <div className={"box container"}>
      <div className={"item w-100 mb-2"}>
        <Breadcrumb links={["texto 1", "texto 2", "texto 3"]} />
      </div>
      <div className={"item w-100 bg-white"}>
        <List>
          {[
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
            {
              srcImage: "/logo.png",
              title: "Title",
              description: "description",
            },
          ]}
        </List>
      </div>
    </div>
  );
};

export default SearchProductsTemplate;
