import Link from "next/link";
import Header from "../../components/header";

import {
  getBlogLink,
  getDateStr,
  postIsPublished,
} from "../../lib/blog-helpers";
import getNotionUsers from "../../lib/notion/getNotionUsers";
import getBlogIndex from "../../lib/notion/getBlogIndex";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps<any, any> = async ({ preview }) => {
  const postsTable = await getBlogIndex();

  const authorsToGet: Set<string> = new Set();
  const posts: any[] = Object.keys(postsTable)
    .map((slug) => {
      const post = postsTable[slug];
      // remove draft posts in production
      if (!preview && !postIsPublished(post)) {
        return null;
      }
      post.Authors = post.Authors || [];
      for (const author of post.Authors) {
        authorsToGet.add(author);
      }
      return post;
    })
    .filter(Boolean);

  const { users } = await getNotionUsers([...authorsToGet]);

  posts.map((post) => {
    post.Authors = post.Authors.map((id: string) => users[id].full_name);
  });

  return {
    props: {
      preview: preview || false,
      posts,
    },
    revalidate: 10,
  };
};

interface IBlogIndexProps {
  posts: any;
  preview: boolean;
}

const BlogIndex: React.FC<IBlogIndexProps> = ({ posts = [], preview }) => {
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
        {posts.length === 0 && <p>There are no posts yet</p>}
        <div className="grid grid-cols-12 gap-8">
          {posts.map((post: any) => {
            return (
              <div key={post.Slug} className="col-span-12 lg:col-span-4">
                {post.Date && (
                  <div className="block text-sm tracking-widest uppercase opacity-50 font-mono">
                    {getDateStr(post.Date)}
                  </div>
                )}
                <h3 className="font-bold text-xl mb-4">
                  <Link href="/blog/[slug]" as={getBlogLink(post.Slug)}>
                    <a className="text-purple-700">{post.Page}</a>
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
