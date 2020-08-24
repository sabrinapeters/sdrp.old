import { NextPage } from "next";
import Link from "next/link";
import { NextSeo } from "next-seo";
import classNames from "@sindresorhus/class-names";

const IndexPage: NextPage = () => {
  const gradient = "bg-gradient-to-r from-purple-500 via-pink-500 to-red-400";
  return (
    <div className="container py-4 mx-auto grid grid-cols-12 gap-8">
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
      <aside className="col-span-12 lg:col-start-2 lg:col-span-5">
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
      <article className="z-10 -mt-32 bg-gray-100 col-span-12 lg:col-start-7 lg:col-span-6 md:mt-0">
        <header className="py-16 lg:py-32">
          <p
            className={classNames(
              gradient,
              "font-serif text-4xl font-black text-transparent bg-clip-text"
            )}
          >
            Theologian, Podcaster, Writer.
          </p>
          <p className="mb-4 font-serif text-2xl">
            Stomping the kyriarchy with ordinary words.
          </p>
        </header>
        <section className="">
          <p className="font-mono text-lg mb-4">
            Sabrina reads lots of books (mostly comics and theology books
            lately), drinks lots of tea, pretends to be smart on Twitter, and
            ponder how to destroy the kyriarchy.
          </p>
          <p className="font-mono text-lg mb-4">
            She lives in the passive-aggressive, beautiful Seattle, with her
            spouse and their mostly clever, somewhat corny jokes. She currently
            serves as a Eucharistic minister at a local Episcopal church, and is
            re-exploring her vocational direction, dusting off the MDiv she
            earned six years ago. For the personality junkies out there, she is
            most likely a 5w6, and every MBTI test ever taken has been
            inconclusive, save for the “I” for “introvert”.
          </p>
          <p className="font-mono text-lg mb-4">
            I'm a bibliophile, MDiv, and gentle agitator, working on dismantling
            the{" "}
            <Link href="/[...slug]" as="/2018/01/04/kyriarchy/">
              <a className="text-purple-700">kyriarchy</a>
            </Link>
            .
          </p>
          <p className="font-mono text-lg mb-4">
            I have a passion and knack for shepherding people toward the
            information they need, due to my years of experience in libraries
            and bookstores. Vocationally, this has me starting on the long path
            toward ordination (or chaplaincy?). You can join me as I attempt to
            chronicle this journey, think through theology, dismantle the
            kyriarchy, and read books.
          </p>
        </section>
      </article>
    </div>
  );
};

export default IndexPage;
