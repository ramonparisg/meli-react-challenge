import React, { FunctionComponent } from "react";
import Image from "@components/atoms/Image";
import SearchBar from "@components/molecules/SearchBar";

const Navbar: FunctionComponent = () => {
  return (
    <div className={`p-1 bg-yellow`}>
      <div
        className={
          "container justify-content-space-between align-items-center w-75 center-div"
        }
      >
        <div className={"item"}>
          <Image src={"/logo.png"} width={134} height={34} />
        </div>
        <div className={"item grow"}>
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
