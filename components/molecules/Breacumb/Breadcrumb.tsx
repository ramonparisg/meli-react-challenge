import React from "react";
import Text from "@components/atoms/Text/Text";
import style from "./Breadcrumb.module.css";

type Props = {
  links: string[];
};

const Breadcrumb: React.FC<Props> = ({ links }: Props) => {
  return (
    <>
      {links.map((l, i) => (
        <span key={i} className={style.color}>
          <Text>{l}</Text>
        </span>
      ))}
    </>
  );
};

export default Breadcrumb;
