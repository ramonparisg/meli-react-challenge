import React from "react";
import InputText from "@components/atoms/Inputs/InputText";
import IconButton from "@components/atoms/Buttons/IconButton";

interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const Index: React.FC<SearchBarProps> = (props) => {
  const { onChange, value, onSubmit } = props;

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className={"container border-dark-gray"}>
          <div className={"grow"}>
            <InputText
              placeholder={"Nunca dejes de buscar"}
              value={value}
              onChange={onChange}
            />
          </div>
          <div style={{ width: "50px" }}>
            <IconButton icon={"🔍"} />
          </div>
        </div>
      </form>
    </>
  );
};

export default Index;
