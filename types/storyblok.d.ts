declare module "storyblok-js-client/dist/rich-text-resolver.es" {
  import { Richtext, RichtextInstance } from "storyblok-js-client/types";
  class RichTextResolver implements RichtextInstance {
    constructor() {}
    render(data: Richtext): string;
  }
  export default RichTextResolver;
}

declare module "storyblok-js-client/dist/rich-text-resolver.cjs" {
  import { Richtext, RichtextInstance } from "storyblok-js-client/types";
  class RichTextResolver implements RichtextInstance {
    constructor() {}
    render(data: Richtext): string;
  }
  export default RichTextResolver;
}

declare module "storyblok-js-client/dist/rich-text-resolver.standalone" {
  import { Richtext, RichtextInstance } from "storyblok-js-client/types";
  class RichTextResolver implements RichtextInstance {
    constructor() {}
    render(data: Richtext): string;
  }
  export default RichTextResolver;
}
