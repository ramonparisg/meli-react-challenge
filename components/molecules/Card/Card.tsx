import React from "react";
import findByType from "@components/utils/ChildrenComponentFinder";
import CardHeader from "@components/molecules/Card/CardHeader";
import CardTitle from "@components/molecules/Card/CardTitle";
import CardPrice from "@components/molecules/Card/CardPrice";
import CardAction from "@components/molecules/Card/CardAction";


export interface CardComponent extends React.FC {
  Header: typeof CardHeader;
  Title: typeof CardTitle;
  Price: typeof CardPrice;
  Action: typeof CardAction;
}

const Card: CardComponent = (props) => {
  const { children } = props;

  const header = findByType(children, CardHeader);
  const title = findByType(children, CardTitle);
  const price = findByType(children, CardPrice);
  const action = findByType(children, CardAction);

  return (
    <div className={"container"}>
      <div className={"item w-100"}>{header}</div>
      <div className={"item w-100 medium-weight lh-4"}>{title}</div>
      <div className={"item w-100 mb-4 mt-2"}>{price}</div>
      <div className={"item w-100 mt-5"}>{action}</div>
    </div>
  );
};

Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Price = CardPrice;
Card.Action = CardAction;

export default Card;
