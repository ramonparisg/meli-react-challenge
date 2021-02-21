import React from "react";
import { AppProps } from "next/app";
import "styles/globals.css";
import Layout from "@components/templates/Layout/Layout";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
};

export default MyApp;
