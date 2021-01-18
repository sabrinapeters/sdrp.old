import { useEffect } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import Router from "next/router";
import * as Fathom from "fathom-client";
import { PageHeader } from "../components/page-header";
import { PageFooter } from "../components/page-footer";
import "../styles.css";

Router.events.on("routeChangeComplete", () => {
  Fathom.trackPageview();
});

const SITE_ID: string = "ATJLMRRS";

const CustomApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      Fathom.load(SITE_ID, {
        includedDomains: ["sdrp.me"],
      });
    }
  }, []);

  return (
    <div className="px-2 min-h-full">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <PageHeader />
      <Component {...pageProps} />
      <PageFooter />
    </div>
  );
};

export default CustomApp;
