import React from "react";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

import { getDateStr } from "../../lib/blog-helpers";
import { PostSharingUrl } from "../../components/sharing";
import { getSdk, IFullPostBySlugQuery } from "../../lib/storyblok-sdk";
import { GraphQLClient } from "graphql-request";
import RichTextResolver from "storyblok-js-client/dist/rich-text-resolver.cjs";

interface IPageProps {
  preview: boolean;
  redirect: boolean;
  query: IFullPostBySlugQuery & { html: string | null };
}

export const getStaticProps: GetStaticProps<
  IPageProps,
  { slug: string }
> = async ({ params, preview }) => {
  const client = new GraphQLClient("https://gapi.storyblok.com/v1/api", {
    headers: {
      Token: "iKCAUcE4okyfep10vaGr3Att",
      Version: "published",
    },
  });

  const data = await getSdk(client).FullPostBySlug({
    // TODO: full_slug vs slug
    slug: "posts/".concat(params?.slug!),
  });

  console.log(data);

  return {
    props: {
      preview: !!preview,
      redirect: false,
      query: {
        ...data,
        html: data.PostItem?.content?.long_text
          ? new RichTextResolver().render(data.PostItem?.content.long_text)
          : null,
      },
    },
    revalidate: 10,
  };
};

// Return our list of blog posts to prerender
export async function getStaticPaths() {
  const client = new GraphQLClient("https://gapi.storyblok.com/v1/api", {
    headers: {
      Token: "iKCAUcE4okyfep10vaGr3Att",
      Version: "published",
    },
  });
  const allPosts = await getSdk(client).PostsWithSlug();
  console.log(allPosts.PostItems?.items);
  return {
    paths:
      allPosts.PostItems?.items?.map((post) => `/blog/${post?.slug}`) || [],
    fallback: true,
  };
}

const RenderPost: React.FC<IPageProps> = (props) => {
  const router = useRouter();
  const post = props.query?.PostItem;
  // useEffect(() => {
  //   if (redirect && !post) {
  //     router.replace(redirect);
  //   }
  // }, [props.redirect, post]);

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  // if you don't have a post at this point, and are not
  // loading one from fallback then redirect back to the index
  console.log(post);
  if (!post) {
    return (
      <div>
        <p>
          Woops! didn't find that post, redirecting you back to the blog index
        </p>
      </div>
    );
  }

  const url = "https://sdrp.me/" + props.query?.PostItem?.slug;
  const { content } = post;
  return (
    <article className="grid grid-cols-12 gap-8 container mx-auto mb-8">
      <NextSeo
        title={content?.title!}
        titleTemplate="%s | Sabrina Reyes-Peters"
        canonical="https://sdrp.me/"
        openGraph={{
          title: content?.title!,
          description:
            content?.intro || "A blog post from Sabrina Reyes-Peters",
          url,
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
      <header className="col-span-12 py-32 border-t-0">
        <h1 className="text-4xl font-black font-serif">{content?.title!}</h1>
      </header>

      <aside className="col-span-12 lg:col-span-4 font-mono divide-y divide-gray-400">
        {props.query.PostItem?.published_at && (
          <div className="posted uppercase block tracking-widest opacity-50 py-4">
            {getDateStr(props.query.PostItem.published_at)}
          </div>
        )}
        {content?.author && (
          <div className="italic font-mono py-4">By {content?.author.name}</div>
        )}
        {/* <ul className="flex flex-wrap justify-start py-4">
          {post.Tags &&
            post.Tags.split(",").map((tag: string) => {
              return (
                <li
                  key={tag}
                  className="bg-purple-300 mr-2 mb-2 p-1 rounded text-xs"
                >
                  {tag}
                </li>
              );
            })}
        </ul> */}

        <PostSharingUrl
          title={content?.title || ""}
          link={"https://sdrp.me".concat(router.asPath)}
          className="py-4"
        />
      </aside>

      <section className="col-span-12 lg:col-span-8 py-4">
        <div
          className="prose lg:prose-xl font-serif"
          dangerouslySetInnerHTML={{ __html: props.query.html! }}
        />
      </section>

      <footer className="col-span-12 font-mono py-4 text-center border-t border-gray-400">
        <i className="text-sm">Comments are closed</i>
      </footer>
    </article>
  );
};

export default RenderPost;
