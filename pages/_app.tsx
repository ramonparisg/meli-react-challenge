import React from "react";
import { AppProps } from "next/app";
import "styles/globals.css";
import Layout from "@components/templates/Layout/Layout";
import Head from "next/head";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>MeLi React Challenge</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name={"description"}
          content={"Desafío tecnológico de Mercado Libre hecho por Ramón París"}
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
