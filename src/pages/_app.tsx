import { AppProps } from "next/app";
import { PageHeader } from "../components/page-header";
import { PageFooter } from "../components/page-footer";
import "../styles.css";

const CustomApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className="px-2 min-h-full">
      <PageHeader />
      <Component {...pageProps} />
      <PageFooter />
    </div>
  );
};

export default CustomApp;
