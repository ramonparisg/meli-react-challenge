import React from "react";
import Item from "@components/molecules/Item/Item";
import style from "./List.module.css";

type Props = {
  items: Array<{
    srcImage: string;
    title: string;
    description: string;
    subtitle?: string;
    badge?: boolean;
  }>;
};

const List: React.FC<Props> = ({ items }: Props) => {
  return (
    <>
      {items.map((c, i) => (
        <div key={i} className={style.item}>
          <Item>
            <Item.Image src={c.srcImage} link={"/items/1"} />
            <Item.Title link={"/items/1"}>{c.title}</Item.Title>
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
