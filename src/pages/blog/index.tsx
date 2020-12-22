import Link from "next/link";
import format from "date-fns/format";

import Header from "../../components/header";
import { IAllPostsHomeQuery } from "../../lib/storyblok-sdk";
import { storyBlok } from "../../lib/client";
import { GetStaticProps } from "next";

interface IBlogIndexProps {
  query: IAllPostsHomeQuery;
}

export const getStaticProps: GetStaticProps<IBlogIndexProps> = async () => {
  const data = await storyBlok.AllPostsHome();
  if (data.PostItems?.items) {
    data.PostItems.items = data.PostItems.items.sort((a, b) => {
      const strA = new Date(a?.content?.date!).getTime() || 0;
      const strB = new Date(b?.content?.date!).getTime() || 0;
      return strB - strA;
    });
  }
  return {
    props: {
      query: data,
    },
    revalidate: 10,
  };
};

const BlogIndex: React.FC<IBlogIndexProps> = ({ query }) => {
  const posts = query.PostItems?.items;
  return (
    <>
      <Header titlePre="Blog" />
      <div className="container py-16 mx-auto font-serif">
        <h1 className="font-mono text-4xl mb-4">Blog</h1>
        {posts?.length === 0 && <p>There are no posts yet</p>}
        <div className="grid grid-cols-12 gap-8">
          {posts?.map((post) => {
            return (
              <div key={post?.slug} className="col-span-12 lg:col-span-4">
                {post?.content?.date && (
                  <div className="block text-sm tracking-widest uppercase opacity-50 font-mono">
                    {format(new Date(post.content.date), "dd MMMM yyyy")}
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
        </div>
      </div>
    </>
  );
};

export default BlogIndex;
