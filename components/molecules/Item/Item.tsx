import React from "react";
import ItemImage from "@components/molecules/Item/ItemImage";
import findByType from "@components/utils/ChildrenComponentFinder";
import ItemTitle from "@components/molecules/Item/ItemTitle";
import ItemDescription from "@components/molecules/Item/ItemDescription";
import ItemBadge from "@components/molecules/Item/ItemBadge";
import ItemSubtitle from "@components/molecules/Item/ItemSubtitle";

export interface ItemListProps extends React.FC {
  Image: typeof ItemImage;
  Title: typeof ItemTitle;
  Description: typeof ItemDescription;
  Badge: typeof ItemBadge;
  Subtitle: typeof ItemSubtitle;
}

const Item: ItemListProps = (props) => {
  const { children } = props;

  const image = findByType(children, ItemImage);
  const title = findByType(children, ItemTitle);
  const description = findByType(children, ItemDescription);
  const badge = findByType(children, ItemBadge);
  const subtitle = findByType(children, ItemSubtitle);

  return (
    <div className={"container w-100 pt-2 pb-2 "}>
      <div className={"item mr-2"}>{image}</div>
      <div className={"item grow mr-2"}>
        <div>
          {title}
          {badge && <span className={"ml-2"}>{badge}</span>}
        </div>
        <div className={"mt-2"}>{description}</div>
      </div>
      <div className={"item w-25 center-text"}>{subtitle}</div>
    </div>
  );
};

Item.Image = ItemImage;
Item.Title = ItemTitle;
Item.Description = ItemDescription;
Item.Badge = ItemBadge;
Item.Subtitle = ItemSubtitle;

export default Item;
