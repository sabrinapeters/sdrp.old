import Link from "next/link";

export const PageHeader: React.FC = () => {
  return (
    <header className="container mx-auto py-8 px-2 grid grid-cols-12 gap-4 border-b border-gray-400">
      <div className="col-span-4">
        <h1 className="font-black font-serif text-2xl">Sabrina Peters</h1>
      </div>

      <nav className="col-span-8">
        <ul className="w-full mt-2">
          <li className="inline-block mr-8">
            <Link href="/">
              <a className="text-blue-500 hover:text-blue-900">Home</a>
            </Link>
          </li>
          <li className="inline-block">
            <Link href="/archive">
              <a className="text-blue-500 hover:text-blue-900">Archive</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
