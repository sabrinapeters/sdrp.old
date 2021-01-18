import { GraphQLClient } from "graphql-request";
import { getSdk } from "./storyblok-sdk";

const StoryblokClient = new GraphQLClient("https://gapi.storyblok.com/v1/api", {
  headers: {
    Token: "iKCAUcE4okyfep10vaGr3Att",
    Version: "published",
  },
});

export const storyBlok = getSdk(StoryblokClient);
