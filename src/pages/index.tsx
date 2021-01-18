import { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import Parser from "rss-parser";
import Link from "next/link";
import { NextSeo } from "next-seo";
import classNames from "@sindresorhus/class-names";
import { AudioBox } from "../components/audio";

export const getStaticProps: GetStaticProps<{
  currentEpisode: Parser.Item;
}> = async () => {
  const p = new Parser();

  let feed = await p.parseURL("https://anchor.fm/s/11018c34/podcast/rss");
  let currentEpisode = feed.items![0];

  return {
    props: {
      currentEpisode,
    },
  };
};

const IndexPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (
  props
) => {
  const gradient = "bg-gradient-to-r from-purple-500 via-pink-500 to-red-400";
  return (
    <div
      className="container py-4 mx-auto grid grid-cols-12 gap-8"
      style={{ gridTemplateRows: "auto 1fr" }}
    >
      <NextSeo title="Home" titleTemplate="%s | Sabrina Peters" />

      <NextSeo
        title="Home"
        titleTemplate="%s | Sabrina Reyes-Peters"
        canonical="https://sdrp.me/"
        openGraph={{
          title: "Sabrina Reyes-Peters",
          description: "A blog post from Sabrina Reyes-Peters",
          url: "https://sdrp.me/",
          images: [
            {
              url: "https://sdrp.me/assets/images/tea-1920.jpg",
            },
          ],
        }}
        twitter={{
          handle: "@sdrp",
          cardType: "summary_large_image",
        }}
      />
      <aside className="col-span-12 col-start-1 lg:col-start-2 lg:col-span-5">
        <figure className={gradient}>
          <picture
            className="block w-full opacity-75"
            style={{
              filter: "grayscale(50%)",
            }}
          >
            <img
              srcSet="assets/images/tea-2400.jpg 1024w, assets/images/tea-1920.jpg 641w"
              src="assets/images/tea-640.jpg"
              alt="tea on a table image"
            />
          </picture>
        </figure>
      </aside>

      <article className=" bg-gray-100 col-span-12 lg:col-start-7 lg:row-span-2 lg:col-span-6 md:mt-0">
        <header className="py-16 lg:py-16">
          <p
            className={classNames(
              gradient,
              "font-serif text-4xl font-black text-transparent bg-clip-text"
            )}
          >
            Amateur Theologian, <br />
            Podcaster, <br />
            Writer.
          </p>
          <p className="mb-4 font-serif text-2xl">
            Stomping the{" "}
            <Link href="/[...slug]" as="/2018/01/04/kyriarchy/">
              <a className="text-purple-700">kyriarchy</a>
            </Link>{" "}
            with ordinary words.
          </p>
        </header>
        <section className="">
          <p className="font-mono text-lg mb-4">
            Sabrina reads lots of books (mostly comics and theology books
            lately), drinks lots of tea, pretends to be smart on Twitter,
            ponders how to destroy the kyriarchy, and produces content for{" "}
            <a href="https://seminary.show" className="text-purple-700">
              Seminary for the Rest of Us
            </a>
            .
          </p>
          <p className="font-mono text-lg mb-4">
            She lives in the passive-aggressive, beautiful Seattle, with her
            spouse and their mostly clever, somewhat corny jokes. She currently
            serves as an occasional preacher and Eucharistic minister at an
            Episcopal church, and is re-exploring her vocational direction,
            dusting off the MDiv she earned seven years ago. She is most likely
            a 5w6, and every MBTI test ever taken has been inconclusive, save
            for the “I” for “introvert”.
          </p>
        </section>
      </article>
      <aside className="col-span-12 lg:col-span-5 lg:col-start-2 lg:row-start-2 ">
        <figure className="">
          <h3 className="font-serif mb-4 text-lg">
            Latest Episode of{" "}
            <i className="font-bold text-pink-500">
              Seminary for the Rest of Us
            </i>
          </h3>
          <div className="bg-purple-800 bg-gradient-to-tr from-purple-500 via-pink-500 to-red-400 text-gray-100 p-4 rounded-lg shadow-xl text-center mb-4">
            <p className="py-4 text-xl font-bold font-serif">
              {props.currentEpisode.title}
            </p>
            <AudioBox src={props.currentEpisode.enclosure!.url} />
          </div>
          <p className="font-mono">
            You can find all the episodes{" "}
            <a href="https://seminary.show/" className="text-purple-700">
              here
            </a>
            .
          </p>
        </figure>
      </aside>
    </div>
  );
};

export default IndexPage;
