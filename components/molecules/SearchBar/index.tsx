import React, { FunctionComponent } from "react";
import InputText from "@components/atoms/Inputs/InputText";
import IconButton from "@components/atoms/Buttons/IconButton";

const Index: FunctionComponent = () => {
  return (
    <>
      <div className={"container border-dark-gray"}>
        <div className={"grow"}>
          <InputText placeholder={"Nunca dejes de buscar"} />
        </div>
        <div style={{ width: "50px" }} className={""}>
          <IconButton icon={"🔍"} />
        </div>
      </div>
    </>
  );
};

export default Index;
