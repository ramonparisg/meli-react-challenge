import React from "react";

// eslint-disable-next-line
const findByType = (children: any, component: any) => {
  const result = [];
  const type = [component.displayName] || [component.name];

  React.Children.forEach(children, (child) => {
    const childType =
      child && child.type && (child.type.displayName || child.type.name);
    if (type.includes(childType)) {
      result.push(child);
    }
  });

  return result[0];
};
export default findByType;
