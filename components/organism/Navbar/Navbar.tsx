import React, { FunctionComponent } from "react";
import Image from "@components/atoms/Image";
import SearchBar from "@components/molecules/SearchBar";

const Navbar: FunctionComponent = () => {
  return (
    <div className={`container justify-content-center p-1 bg-yellow`}>
      <div className={"item"}>
        <Image src={"/logo.png"} width={134} height={34} />
      </div>
      <div className={"item w-50"}>
        <SearchBar />
      </div>
    </div>
  );
};

export default Navbar;
