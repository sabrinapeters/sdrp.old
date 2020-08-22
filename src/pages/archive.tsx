import fs from "fs";
import glob from "fast-glob";
import format from "date-fns/format";
import matter from "gray-matter";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

type JekyllItem = {
  title: string;
  slug: string;
  date: string;
};

export const getStaticProps: GetStaticProps<{
  archive: JekyllItem[];
}> = async () => {
  const files = await glob("_posts/*.md", { absolute: false });

  const slugs = files.map(
    (file: string): JekyllItem => {
      const fileContents = fs.readFileSync(file, "utf8");
      const { data } = matter(fileContents);
      const f = file.split("/")[1].replace(/\.md$/, "");

      const [year, month, day, ...postname] = f.split("-");
      return {
        date: new Date(data.date).toString(),
        title: data.title || "",
        slug: [year, month, day, postname.join("-")].join("/")
      };
    }
  );

  return {
    props: {
      archive: slugs
    }
  };
};

const ArchivePage: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = props => {
  return <div><ul>{

    props.archive.map((archiveItem, i) => {

    return <li key={i}>{i + 1}: {archiveItem.title} {archiveItem.date} {archiveItem.slug}</li>

    })

  }</ul></div>;
};

export default ArchivePage;
