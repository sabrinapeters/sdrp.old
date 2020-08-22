import { AppProps } from "next/app";
import "../styles.css";

const CustomApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className="">
      <Component {...pageProps} />
    </div>
  );
};

export default CustomApp;
