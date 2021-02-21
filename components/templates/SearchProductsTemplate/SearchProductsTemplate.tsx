import React from "react";
import List from "@components/organism/List/List";

const SearchProductsTemplate: React.FC = () => {
  return (
    <div className={"box container test-border"}>
      <div className={"item w-100 mb-2"}>Breadcumb</div>
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
