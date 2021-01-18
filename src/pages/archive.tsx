import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Link from "next/link";
import { NextSeo } from "next-seo";
import fs from "fs";
import glob from "fast-glob";
import format from "date-fns/format";
import matter from "gray-matter";

type JekyllItem = {
  title: string;
  slug: string;
  date: string;
  year: string;
};

type PostsByYear = Record<string | number, JekyllItem[]>;

export const getStaticProps: GetStaticProps<{
  sortedByYear: PostsByYear;
}> = async () => {
  const files = await glob("_posts/*.md", { absolute: false });

  const slugs = files.map(
    (file: string): JekyllItem => {
      const fileContents = fs.readFileSync(file, "utf8");
      const {
        data: { date, title },
      } = matter(fileContents);
      const f = file.split("/")[1].replace(/\.md$/, "");

      const [year, month, day, ...postname] = f.split("-");
      return {
        date: new Date(date).toString(),
        title: title || "",
        year,
        slug: [year, month, day, postname.join("-")].join("/"),
      };
    }
  );

  return {
    props: {
      sortedByYear: slugs.reduce<PostsByYear>(
        (acc, currentValue: JekyllItem) => {
          if (acc[currentValue.year]) {
            acc[currentValue.year].push(currentValue);
          } else {
            acc[currentValue.year] = [currentValue];
          }

          return acc;
        },
        {}
      ),
    },
  };
};

type ArchivePageType = NextPage<InferGetStaticPropsType<typeof getStaticProps>>;

const ArchivePage: ArchivePageType = (props) => {
  return (
    <article className="container py-16 mx-auto font-mono">
      <NextSeo title="Archives" titleTemplate="%s | Sabrina Peters" />
      <header>
        <h1 className="font-mono text-4xl mb-4">Archive</h1>
      </header>
      <section>
        {Object.keys(props.sortedByYear)
          .sort((a, b) => parseInt(b) - parseInt(a))
          .map((year) => {
            return (
              <div key={year}>
                <h3 className="mb-8 text-2xl  text-purple-400">{year}</h3>

                <ul className="mb-32 grid gap-8 grid-cols-12">
                  {props.sortedByYear[year].map((archiveItem, i) => {
                    return (
                      <li key={i} className="col-span-6 lg:col-span-4">
                        <Link href="/[...slug]" as={archiveItem.slug}>
                          <a className="block">
                            <time
                              dateTime={archiveItem.date}
                              className="block text-sm tracking-widest uppercase opacity-50"
                            >
                              {format(
                                new Date(archiveItem.date),
                                "dd MMMM yyyy"
                              )}
                            </time>
                            <span className="block text-lg font-semibold text-purple-700">
                              {archiveItem.title}
                            </span>
                          </a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
      </section>
    </article>
  );
};

export default ArchivePage;
