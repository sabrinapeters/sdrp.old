import Link from "next/link";
import classNames from "@sindresorhus/class-names";

const gradient = "bg-gradient-to-r from-purple-500 via-pink-500 to-red-400";

export const PageHeader: React.FC = () => {
  return (
    <header className="container mx-auto py-2 lg:py-8 px-2 grid grid-cols-12 gap-2 lg:gap-8 border-b border-gray-400">
      <div className="col-span-12 lg:col-span-4">
        <h1
          className={classNames(
            gradient,
            "text-transparent bg-clip-text font-black font-serif text-2xl"
          )}
        >
          Sabrina Reyes-Peters
        </h1>
      </div>

      <nav className="col-span-8 font-bold">
        <ul className="w-full">
          <li className="inline-block mr-8 text-lg">
            <Link href="/">
              <a className="text-purple-500 hover:text-purple-900">Home</a>
            </Link>
          </li>
          <li className="inline-block mr-8 text-lg">
            <Link href="/blog">
              <a className="text-purple-500 hover:text-purple-900">Blog</a>
            </Link>
          </li>
          <li className="inline-block text-lg">
            <Link href="/archive">
              <a className="text-purple-500 hover:text-purple-900">Archive</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
