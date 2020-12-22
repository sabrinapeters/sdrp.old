import Head from "next/head";

const CustomHead = ({ titlePre = "" }) => {
  return (
    <header>
      <Head>
        <title>{titlePre ? `${titlePre} |` : ""} Blog</title>
        <meta
          name="description"
          content="personal blog of Sabrina Reyes-Peters"
        />
        <meta name="og:title" content="Blog | Sabrina Reyes-Peters" />
        <meta
          property="og:image"
          content="https://sdrp.me/assets/images/tea-1920.jpg"
        />
        <meta name="twitter:site" content="@sdrp_" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://sdrp.me/assets/images/tea-1920.jpg"
        />
      </Head>
    </header>
  );
};

export default CustomHead;
