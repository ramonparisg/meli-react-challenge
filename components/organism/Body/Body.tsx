import React from "react";

type Props = {
  children: React.ReactNode;
};

const Body: React.FC = ({ children }: Props) => {
  return <div className={"p-4"}>{children}</div>;
};

export default Body;
