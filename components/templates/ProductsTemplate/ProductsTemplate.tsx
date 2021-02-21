import React, { ReactNode } from "react";
import Breadcrumb from "@components/molecules/Breacumb/Breadcrumb";

type Props = {
  children: ReactNode;
  breadcrumbs: string[];
};

const ProductsTemplate: React.FC<Props> = ({
  children,
  breadcrumbs,
}: Props) => {
  return (
    <div className={"container"}>
      <div className={"item w-100 mb-2"}>
        <Breadcrumb links={breadcrumbs} />
      </div>
      <div className={"item w-100 bg-white"}>{children}</div>
    </div>
  );
};

export default ProductsTemplate;
