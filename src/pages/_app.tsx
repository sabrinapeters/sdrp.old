import { AppProps } from "next/app";
import { PageHeader } from "../components/header";
import "../styles.css";

const CustomApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className="">
      <PageHeader />
      <Component {...pageProps} />
    </div>
  );
};

export default CustomApp;
