import { NextPage } from "next";
import classNames from "@sindresorhus/class-names";

const IndexPage: NextPage = () => {
  const gradient = "bg-gradient-to-r from-purple-500 via-pink-500 to-red-400";
  return (
    <div className="container px-2 py-4 mx-auto grid grid-cols-12 gap-8">
      <aside className="col-span-12 lg:col-span-6">
        <figure className={gradient}>
          <picture
            className="block w-full opacity-75"
            style={{
              filter: "grayscale(50%)"
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
      <article className="z-10 -mt-32 bg-gray-100 col-span-12 lg:col-span-6 lg:col-start-7 md:mt-0">
        <p
          className={classNames(
            gradient,
            "font-serif text-5xl font-black text-transparent bg-clip-text"
          )}
        >
          Seminarian, Podcaster, Writer.
        </p>
        <p className="mb-4 font-serif text-3xl">
          Stomping the kyriarchy with ordinary words.
        </p>
        <p className="font-mono text-lg mb-4">
          Sabrina reads lots of books (mostly comics and theology books lately),
          drinks lots of tea, pretends to be smart on Twitter, and ponder how to
          destroy the kyriarchy.
        </p>
        <p className="font-mono text-lg">
          She lives in the passive-aggressive, beautiful Seattle, with her
          spouse and their mostly clever, somewhat corny jokes. She currently
          serves as a Eucharistic minister at a local Episcopal church, and is
          re-exploring her vocational direction, dusting off the MDiv she earned
          six years ago. For the personality junkies out there, she is most
          likely a 5w6, and every MBTI test ever taken has been inconclusive,
          save for the “I” for “introvert”.
        </p>
      </article>
    </div>
  );
};

export default IndexPage;
