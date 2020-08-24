import dynamic from "next/dynamic";
import ExtLink from "./ext-link";

const components = {
  // default tags
  ol: "ol",
  ul: "ul",
  li: "li",
  p: "p",
  blockquote: "blockquote",
  a: ExtLink,

  Code: dynamic(() => import("./code")),
};

export default components;
