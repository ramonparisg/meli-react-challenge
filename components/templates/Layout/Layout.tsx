import React from "react";
import Navbar from "@components/organism/Navbar/Navbar";
import Body from "@components/organism/Body/Body";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC = ({ children }: Props) => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Body>{children}</Body>
      </main>
    </>
  );
};

export default Layout;
