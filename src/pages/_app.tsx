import { useEffect } from "react";
import { AppProps } from "next/app";
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
        includedDomains: ["seminary.show"],
      });
    }
  }, []);

  return (
    <div className="px-2 min-h-full">
      <PageHeader />
      <Component {...pageProps} />
      <PageFooter />
    </div>
  );
};

export default CustomApp;
