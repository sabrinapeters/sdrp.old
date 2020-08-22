import { NextPage } from "next";

const IndexPage: NextPage = () => {
  return (
    <div className="container mx-auto px-2 py-4 grid grid-cols-12 gap-4">
      <article className="col-span-8 col-start-3">
        <p className="font-serif text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500 mb-4">
          Seminarian, Podcaster, Writer.
        </p>
        <p className="text-3xl font-mono font-light mb-4">
          Stomping the kyriarchy with ordinary words.
        </p>
        <p className="font-serif text-lg">
          Sabrina reads lots of books (mostly comics and theology books lately),
          drinks lots of tea, pretends to be smart on Twitter, and ponder how to
          destroy the kyriarchy. She lives in the passive-aggressive, beautiful
          Seattle, with her spouse and his mostly clever, somewhat corny jokes.
          She currently serves as a Eucharistic minister at a local Episcopal
          church, and is re-exploring her vocational direction, dusting off the
          MDiv she earned six years ago. For the personality junkies out there,
          she is most likely a 5w6, and every MBTI test ever taken has been
          inconclusive, save for the “I” for “introvert”.
        </p>
      </article>
    </div>
  );
};

export default IndexPage;
