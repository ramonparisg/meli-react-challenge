import React from "react";
import style from "./Badge.module.css";

type Sizes = "small" | "big";
type Colors = "green";

type Props = {
  size: Sizes;
  color: Colors;
};

const Badge: React.FC<Props> = (props) => {
  const { size, color } = props;
  return (
    <div className={"container-inline align-items-center"}>
      <div className={`${style.badge} ${style[color]} ${style[size]}`} />
    </div>
  );
};

export default Badge;
