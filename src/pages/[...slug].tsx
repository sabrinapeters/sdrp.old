import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage
} from "next";
import { NextSeo } from "next-seo";
import fs from "fs";
import glob from "fast-glob";
import format from "date-fns/format";
import matter from "gray-matter";
import { MarkdownAPI } from "@charliewilco/mmm";

type JekyllParams = { slug: string[] };
type JekyllProps = {
  layout: string;
  date: string;
  subtitle?: string;
  title: string;
};

export const getStaticPaths: GetStaticPaths<JekyllParams> = async () => {
  const files = await glob("_posts/*.md", { absolute: false });

  const slugs = files.map((file: string): { params: JekyllParams } => {
    const f = file.split("/")[1].replace(/\.md$/, "");

    const [year, month, day, ...postname] = f.split("-");
    return { params: { slug: [year, month, day, postname.join("-")] } };
  });

  return {
    paths: slugs,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps<
  { data: JekyllProps; content: string },
  JekyllParams
> = async ({ params }) => {
  const m = new MarkdownAPI("_posts");
  const fullPath = "_posts/".concat(params!.slug.join("-")).concat(".md");

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const markdown = await m.markdownToHtml(content);

  return {
    props: {
      data: {
        layout: data.layout,
        title: data.title,
        subtitle: data.subtitle || "",
        date: new Date(data.date).toString()
      },
      content: markdown
    }
  };
};

export const DefaultPage: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = props => {
  return (
    <div className="font-mono">
      <NextSeo title={props.data.title} titleTemplate="%s | Sabrina Peters" />
      <article className="container px-2 py-16 mx-auto grid grid-cols-12 gap-8 row-gap-16 divide-y">
        <header className="col-span-12">
          <time
            dateTime={props.data.date}
            className="tracking-widest uppercase opacity-50 font-xs"
          >
            {format(new Date(props.data.date), "dd MMMM yyyy")}
          </time>
          <h1 className="text-4xl font-bold">{props.data.title}</h1>
          {props.data.subtitle && (
            <h2 className="text-lg font-light">{props.data.subtitle}</h2>
          )}
        </header>

        <div className="col-span-12 lg:col-span-8 lg:col-start-5">
          <section
            className="py-16 prose lg:prose-xl"
            dangerouslySetInnerHTML={{ __html: props.content }}
          />
        </div>
      </article>
    </div>
  );
};

export default DefaultPage;
