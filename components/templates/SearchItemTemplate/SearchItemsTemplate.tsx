import React from "react";
import Breadcrumb from "@components/molecules/Breacumb/Breadcrumb";
import List, { ItemListProps } from "@components/organism/List/List";

type Props = {
  items: Array<ItemListProps>;
  breadcrumbs: Array<string>;
};

const SearchItemsTemplate: React.FC<Props> = ({
  items,
  breadcrumbs,
}: Props) => {
  return (
    <div className={"container"}>
      <div className={"item w-100 mb-2"}>
        <Breadcrumb links={breadcrumbs} />
      </div>
      <div className={"item w-100 bg-white"}>
        <List items={items} />
      </div>
    </div>
  );
};

export default SearchItemsTemplate;
