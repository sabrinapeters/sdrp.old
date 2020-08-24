import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";

export const PageFooter: React.FC = () => {
  return (
    <footer className="container mx-auto py-2 lg:py-8 px-2 border-t border-gray-400 flex items-center justify-between font-mono">
      <div className="text-sm opacity-50">
        <p>&copy; Copyright {new Date().getFullYear()} Sabrina Reyes-Peters.</p>
        <p>All Rights Reserved.</p>
      </div>
      <div>
        <ul className="mb-0">
          <li className="inline-block ml-2 align-middle">
            <a href="https://twitter.com/sdrp_" className="block">
              <AiOutlineTwitter
                size={24}
                className="fill-current text-purple-700"
              />
            </a>
          </li>
          <li className="inline-block ml-2 align-middle">
            <a href="https://instagram.com/__sdrp__" className="block">
              <AiOutlineInstagram
                size={24}
                className="fill-current text-purple-700"
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
