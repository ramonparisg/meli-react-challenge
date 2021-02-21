import React from "react";
import Image from "@components/atoms/Image/index";
import Text from "@components/atoms/Text/Text";

type Props = {
  srcImage: string;
  title: string;
  description: string;
  subtitle?: string;
  badge?: boolean;
};

const ItemList: React.FC<Props> = ({
  srcImage,
  title,
  description,
  subtitle,
  badge = false,
}: Props) => {
  return (
    <div className={"container w-100 pt-2 pb-2 "}>
      <div className={"item mr-2"}>
        <Image src={srcImage} height={90} width={90} />
      </div>
      <div className={"item grow mr-2"}>
        <div>
          <Text size={"big"}>{title}</Text>
          {badge && (
            <span className={"ml-2"}>
              <Text size={"medium"}>🚛</Text>
            </span>
          )}
        </div>
        <div className={"mt-2"}>
          <Text size={"medium"}>{description}</Text>
        </div>
      </div>
      <div className={"item w-25"} style={{ textAlign: "center" }}>
        <Text size={"small"}>{subtitle}</Text>
      </div>
    </div>
  );
};

export default ItemList;
