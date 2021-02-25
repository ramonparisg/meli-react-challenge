import React, { FunctionComponent, useState } from "react";
import Image from "@components/atoms/Image";
import SearchBar from "@components/molecules/SearchBar";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar: FunctionComponent = () => {
  const router = useRouter();

  const [value, setValue] = useState((router.query.search as string) || "");

  return (
    <div className={`p-1 bg-yellow`}>
      <div
        className={
          "container justify-content-space-between align-items-center w-75 center-div"
        }
      >
        <div className={"item"}>
          <Link href={"/"} passHref>
            <a>
              <Image
                src={"/logo.png"}
                width={134}
                height={34}
                alt={"Mercado Libre logo"}
              />
            </a>
          </Link>
        </div>
        <div className={"item grow"}>
          <SearchBar
            value={value}
            onSubmit={(e) => {
              router
                .push({
                  pathname: "/items",
                  query: { search: value },
                })
                .then((r) => console.log("pushed", r));
              e.preventDefault();
            }}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
