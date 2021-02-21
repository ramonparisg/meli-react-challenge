import React from "react";

type Props = {
  children: React.ReactNode;
};

const Body: React.FC = ({ children }: Props) => {
  return <div className={"p-2 box"}>{children}</div>;
};

export default Body;
