import React from "react";
import Item from "@components/molecules/Item/Item";
import style from "./List.module.css";

export interface ItemListProps {
  link?: string;
  srcImage: string;
  title: string;
  description: string;
  subtitle?: string;
  badge?: boolean;
}

interface ListProps {
  items: Array<ItemListProps>;
}

const List: React.FC<ListProps> = ({ items }: ListProps) => {
  return (
    <>
      {items.map((c, i) => (
        <div key={i} className={style.item}>
          <Item>
            <Item.Image src={c.srcImage} link={c.link} />
            <Item.Title link={c.link}>{c.title}</Item.Title>
            <Item.Description>{c.description}</Item.Description>
            {c.badge && <Item.Badge />}
            <Item.Subtitle>{c.subtitle}</Item.Subtitle>
          </Item>
        </div>
      ))}
    </>
  );
};

export default List;
