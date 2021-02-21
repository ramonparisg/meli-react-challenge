import React from "react";
import ItemList from "@components/molecules/ItemList/ItemList";
import style from "./List.module.css";

type Props = {
  children: Array<{
    srcImage: string;
    title: string;
    description: string;
    subtitle?: string;
    badge?: boolean;
  }>;
};

const List: React.FC = ({ children }: Props) => {
  return (
    <>
      {children.map((c, i) => (
        <div key={i} className={style.item}>
          <ItemList
            srcImage={c.srcImage}
            description={c.description}
            title={c.title}
            subtitle={c.subtitle}
            badge={c.badge}
          />
        </div>
      ))}
    </>
  );
};

export default List;
