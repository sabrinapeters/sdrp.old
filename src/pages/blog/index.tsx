import Link from "next/link";
import Header from "../../components/header";
import { getSdk, IAllPostsHomeQuery } from "../../lib/storyblok-sdk";
import { GraphQLClient } from "graphql-request";
import { GetStaticProps } from "next";

interface IBlogIndexProps {
  query: IAllPostsHomeQuery;
  preview: boolean;
}

export const getStaticProps: GetStaticProps<IBlogIndexProps, any> = async ({
  preview,
}) => {
  const client = new GraphQLClient("https://gapi.storyblok.com/v1/api", {
    headers: {
      Token: "iKCAUcE4okyfep10vaGr3Att",
      Version: "published",
    },
  });
  const data = await getSdk(client).AllPostsHome();

  return {
    props: {
      preview: preview || false,
      query: data,
    },
    revalidate: 10,
  };
};

const BlogIndex: React.FC<IBlogIndexProps> = ({ query, preview }) => {
  const posts = query.PostItems?.items;
  return (
    <>
      <Header titlePre="Blog" />
      {preview && (
        <div>
          <div>
            <b>Note:</b>
            {` `}Viewing in preview mode{" "}
            <Link href={`/api/clear-preview`}>
              <button>Exit Preview</button>
            </Link>
          </div>
        </div>
      )}
      <div className="container py-16 mx-auto font-serif">
        <h1 className="font-mono text-4xl mb-4">Blog</h1>
        {posts?.length === 0 && <p>There are no posts yet</p>}
        <div className="grid grid-cols-12 gap-8">
          {posts?.map((post) => {
            return (
              <div key={post?.slug} className="col-span-12 lg:col-span-4">
                {post?.published_at && (
                  <div className="block text-sm tracking-widest uppercase opacity-50 font-mono">
                    {post?.published_at}
                  </div>
                )}
                <h3 className="font-bold text-xl mb-4">
                  <Link href="/blog/[slug]" as={`/blog/${post?.slug}`}>
                    <a className="text-purple-700">{post?.content?.title}</a>
                  </Link>
                </h3>
              </div>
            );
          })}
          ``
        </div>
      </div>
    </>
  );
};

export default BlogIndex;
