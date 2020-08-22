import { AppProps } from "next/app";
import { PageHeader } from "../components/header";
import "../styles.css";

const CustomApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className="bg-gray-100 min-h-full">
      <PageHeader />
      <Component {...pageProps} />
    </div>
  );
};

export default CustomApp;
