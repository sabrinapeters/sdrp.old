import { GraphQLClient } from 'graphql-request';
import { print } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BlockScalar: any;
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: any;
  JsonScalar: any;
};

export type IAlternate = {
  __typename?: 'Alternate';
  fullSlug: Scalars['String'];
  id: Scalars['Int'];
  isFolder: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  parentId: Maybe<Scalars['Int']>;
  published: Scalars['Boolean'];
  slug: Scalars['String'];
};

export type IAsset = {
  __typename?: 'Asset';
  alt: Maybe<Scalars['String']>;
  copyright: Maybe<Scalars['String']>;
  filename: Scalars['String'];
  focus: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  name: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
};

export type IAuthorComponent = {
  __typename?: 'AuthorComponent';
  _editable: Maybe<Scalars['String']>;
  _uid: Maybe<Scalars['String']>;
  component: Maybe<Scalars['String']>;
  picture: Maybe<IAsset>;
};

export type IAuthorItem = {
  __typename?: 'AuthorItem';
  alternates: Maybe<Array<Maybe<IAlternate>>>;
  content: Maybe<IAuthorComponent>;
  created_at: Maybe<Scalars['String']>;
  first_published_at: Maybe<Scalars['String']>;
  full_slug: Maybe<Scalars['String']>;
  group_id: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
  is_startpage: Maybe<Scalars['Boolean']>;
  lang: Maybe<Scalars['String']>;
  meta_data: Maybe<Scalars['JsonScalar']>;
  name: Maybe<Scalars['String']>;
  parent_id: Maybe<Scalars['Int']>;
  path: Maybe<Scalars['String']>;
  position: Maybe<Scalars['Int']>;
  published_at: Maybe<Scalars['String']>;
  release_id: Maybe<Scalars['Int']>;
  slug: Maybe<Scalars['String']>;
  sort_by_date: Maybe<Scalars['String']>;
  tag_list: Maybe<Array<Maybe<Scalars['String']>>>;
  translated_slugs: Maybe<Array<Maybe<ITranslatedSlug>>>;
  uuid: Maybe<Scalars['String']>;
};

export type IAuthorItems = {
  __typename?: 'AuthorItems';
  items: Maybe<Array<Maybe<IAuthorItem>>>;
  total: Maybe<Scalars['Int']>;
};


export type IContentItem = {
  __typename?: 'ContentItem';
  alternates: Maybe<Array<Maybe<IAlternate>>>;
  content: Maybe<Scalars['JsonScalar']>;
  content_string: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['String']>;
  first_published_at: Maybe<Scalars['String']>;
  full_slug: Maybe<Scalars['String']>;
  group_id: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
  is_startpage: Maybe<Scalars['Boolean']>;
  lang: Maybe<Scalars['String']>;
  meta_data: Maybe<Scalars['JsonScalar']>;
  name: Maybe<Scalars['String']>;
  parent_id: Maybe<Scalars['Int']>;
  path: Maybe<Scalars['String']>;
  position: Maybe<Scalars['Int']>;
  published_at: Maybe<Scalars['String']>;
  release_id: Maybe<Scalars['Int']>;
  slug: Maybe<Scalars['String']>;
  sort_by_date: Maybe<Scalars['String']>;
  tag_list: Maybe<Array<Maybe<Scalars['String']>>>;
  translated_slugs: Maybe<Array<Maybe<ITranslatedSlug>>>;
  uuid: Maybe<Scalars['String']>;
};

export type IContentItems = {
  __typename?: 'ContentItems';
  items: Maybe<Array<Maybe<IContentItem>>>;
  total: Maybe<Scalars['Int']>;
};

export type IDatasource = {
  __typename?: 'Datasource';
  id: Scalars['Int'];
  name: Scalars['String'];
  slug: Scalars['String'];
};

export type IDatasourceEntries = {
  __typename?: 'DatasourceEntries';
  items: Array<IDatasourceEntry>;
  total: Scalars['Int'];
};

export type IDatasourceEntry = {
  __typename?: 'DatasourceEntry';
  dimensionValue: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  value: Scalars['String'];
};

export type IDatasources = {
  __typename?: 'Datasources';
  items: Array<IDatasource>;
};

export type IFilterQueryOperations = {
  /** Matches exactly one value */
  in: Maybe<Scalars['String']>;
  /** Matches all without the given value */
  not_in: Maybe<Scalars['String']>;
  /** Matches exactly one value with a wildcard search using * */
  like: Maybe<Scalars['String']>;
  /** Matches all without the given value */
  not_like: Maybe<Scalars['String']>;
  /** Matches any value of given array */
  in_array: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Must match all values of given array */
  all_in_array: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Greater than date (Exmples: 2019-03-03 or 2020-03-03T03:03:03) */
  gt_date: Maybe<Scalars['ISO8601DateTime']>;
  /** Less than date (Format: 2019-03-03 or 2020-03-03T03:03:03) */
  lt_date: Maybe<Scalars['ISO8601DateTime']>;
  /** Greater than integer value */
  gt_int: Maybe<Scalars['Int']>;
  /** Less than integer value */
  lt_int: Maybe<Scalars['Int']>;
  /** Matches exactly one integer value */
  in_int: Maybe<Scalars['Int']>;
  /** Greater than float value */
  gt_float: Maybe<Scalars['Float']>;
  /** Less than float value */
  lt_float: Maybe<Scalars['Float']>;
};



export type ILinkEntries = {
  __typename?: 'LinkEntries';
  items: Array<ILinkEntry>;
};

export type ILinkEntry = {
  __typename?: 'LinkEntry';
  id: Maybe<Scalars['Int']>;
  isFolder: Maybe<Scalars['Boolean']>;
  isStartpage: Maybe<Scalars['Boolean']>;
  name: Maybe<Scalars['String']>;
  parentId: Maybe<Scalars['Int']>;
  position: Maybe<Scalars['Int']>;
  published: Maybe<Scalars['Boolean']>;
  slug: Maybe<Scalars['String']>;
  uuid: Maybe<Scalars['String']>;
};

export type IPageComponent = {
  __typename?: 'PageComponent';
  _editable: Maybe<Scalars['String']>;
  _uid: Maybe<Scalars['String']>;
  body: Maybe<Scalars['BlockScalar']>;
  component: Maybe<Scalars['String']>;
};

export type IPageItem = {
  __typename?: 'PageItem';
  alternates: Maybe<Array<Maybe<IAlternate>>>;
  content: Maybe<IPageComponent>;
  created_at: Maybe<Scalars['String']>;
  first_published_at: Maybe<Scalars['String']>;
  full_slug: Maybe<Scalars['String']>;
  group_id: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
  is_startpage: Maybe<Scalars['Boolean']>;
  lang: Maybe<Scalars['String']>;
  meta_data: Maybe<Scalars['JsonScalar']>;
  name: Maybe<Scalars['String']>;
  parent_id: Maybe<Scalars['Int']>;
  path: Maybe<Scalars['String']>;
  position: Maybe<Scalars['Int']>;
  published_at: Maybe<Scalars['String']>;
  release_id: Maybe<Scalars['Int']>;
  slug: Maybe<Scalars['String']>;
  sort_by_date: Maybe<Scalars['String']>;
  tag_list: Maybe<Array<Maybe<Scalars['String']>>>;
  translated_slugs: Maybe<Array<Maybe<ITranslatedSlug>>>;
  uuid: Maybe<Scalars['String']>;
};

export type IPageItems = {
  __typename?: 'PageItems';
  items: Maybe<Array<Maybe<IPageItem>>>;
  total: Maybe<Scalars['Int']>;
};

export type IPostComponent = {
  __typename?: 'PostComponent';
  _editable: Maybe<Scalars['String']>;
  _uid: Maybe<Scalars['String']>;
  author: Maybe<IStory>;
  component: Maybe<Scalars['String']>;
  image: Maybe<Scalars['String']>;
  intro: Maybe<Scalars['String']>;
  long_text: Maybe<Scalars['JsonScalar']>;
  title: Maybe<Scalars['String']>;
};


export type IPostComponentAuthorArgs = {
  fields: Maybe<Array<Maybe<Scalars['String']>>>;
  language: Maybe<Scalars['String']>;
};

export type IPostFilterQuery = {
  title: Maybe<IFilterQueryOperations>;
  author: Maybe<IFilterQueryOperations>;
};

export type IPostItem = {
  __typename?: 'PostItem';
  alternates: Maybe<Array<Maybe<IAlternate>>>;
  content: Maybe<IPostComponent>;
  created_at: Maybe<Scalars['String']>;
  first_published_at: Maybe<Scalars['String']>;
  full_slug: Maybe<Scalars['String']>;
  group_id: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
  is_startpage: Maybe<Scalars['Boolean']>;
  lang: Maybe<Scalars['String']>;
  meta_data: Maybe<Scalars['JsonScalar']>;
  name: Maybe<Scalars['String']>;
  parent_id: Maybe<Scalars['Int']>;
  path: Maybe<Scalars['String']>;
  position: Maybe<Scalars['Int']>;
  published_at: Maybe<Scalars['String']>;
  release_id: Maybe<Scalars['Int']>;
  slug: Maybe<Scalars['String']>;
  sort_by_date: Maybe<Scalars['String']>;
  tag_list: Maybe<Array<Maybe<Scalars['String']>>>;
  translated_slugs: Maybe<Array<Maybe<ITranslatedSlug>>>;
  uuid: Maybe<Scalars['String']>;
};

export type IPostItems = {
  __typename?: 'PostItems';
  items: Maybe<Array<Maybe<IPostItem>>>;
  total: Maybe<Scalars['Int']>;
};

export type IQueryType = {
  __typename?: 'QueryType';
  AuthorItem: Maybe<IAuthorItem>;
  AuthorItems: Maybe<IAuthorItems>;
  ContentNode: Maybe<IContentItem>;
  ContentNodes: Maybe<IContentItems>;
  DatasourceEntries: Maybe<IDatasourceEntries>;
  Datasources: Maybe<IDatasources>;
  Links: Maybe<ILinkEntries>;
  PageItem: Maybe<IPageItem>;
  PageItems: Maybe<IPageItems>;
  PostItem: Maybe<IPostItem>;
  PostItems: Maybe<IPostItems>;
  Space: Maybe<ISpace>;
  Tags: Maybe<ITags>;
};


export type IQueryTypeAuthorItemArgs = {
  id: Scalars['ID'];
  find_by: Maybe<Scalars['String']>;
  from_release: Maybe<Scalars['Int']>;
  resolve_links: Maybe<Scalars['String']>;
  resolve_relations: Maybe<Scalars['String']>;
  language: Maybe<Scalars['String']>;
};


export type IQueryTypeAuthorItemsArgs = {
  first_published_at_gt: Maybe<Scalars['String']>;
  first_published_at_lt: Maybe<Scalars['String']>;
  published_at_gt: Maybe<Scalars['String']>;
  published_at_lt: Maybe<Scalars['String']>;
  starts_with: Maybe<Scalars['String']>;
  by_slugs: Maybe<Scalars['String']>;
  excluding_slugs: Maybe<Scalars['String']>;
  fallback_lang: Maybe<Scalars['String']>;
  by_uuids: Maybe<Scalars['String']>;
  by_uuids_ordered: Maybe<Scalars['String']>;
  excluding_ids: Maybe<Scalars['String']>;
  excluding_fields: Maybe<Scalars['String']>;
  resolve_links: Maybe<Scalars['String']>;
  resolve_relations: Maybe<Scalars['String']>;
  from_release: Maybe<Scalars['String']>;
  sort_by: Maybe<Scalars['String']>;
  search_term: Maybe<Scalars['String']>;
  is_startpage: Maybe<Scalars['String']>;
  language: Maybe<Scalars['String']>;
  with_tag: Maybe<Scalars['String']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter_query: Maybe<Scalars['JsonScalar']>;
};


export type IQueryTypeContentNodeArgs = {
  id: Scalars['ID'];
  find_by: Maybe<Scalars['String']>;
  from_release: Maybe<Scalars['Int']>;
  resolve_links: Maybe<Scalars['String']>;
  resolve_relations: Maybe<Scalars['String']>;
  language: Maybe<Scalars['String']>;
};


export type IQueryTypeContentNodesArgs = {
  first_published_at_gt: Maybe<Scalars['String']>;
  first_published_at_lt: Maybe<Scalars['String']>;
  published_at_gt: Maybe<Scalars['String']>;
  published_at_lt: Maybe<Scalars['String']>;
  starts_with: Maybe<Scalars['String']>;
  by_slugs: Maybe<Scalars['String']>;
  excluding_slugs: Maybe<Scalars['String']>;
  fallback_lang: Maybe<Scalars['String']>;
  by_uuids: Maybe<Scalars['String']>;
  by_uuids_ordered: Maybe<Scalars['String']>;
  excluding_ids: Maybe<Scalars['String']>;
  excluding_fields: Maybe<Scalars['String']>;
  resolve_links: Maybe<Scalars['String']>;
  resolve_relations: Maybe<Scalars['String']>;
  from_release: Maybe<Scalars['String']>;
  sort_by: Maybe<Scalars['String']>;
  search_term: Maybe<Scalars['String']>;
  is_startpage: Maybe<Scalars['String']>;
  language: Maybe<Scalars['String']>;
  with_tag: Maybe<Scalars['String']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter_query: Maybe<Scalars['JsonScalar']>;
};


export type IQueryTypeDatasourceEntriesArgs = {
  datasource: Maybe<Scalars['String']>;
  dimension: Maybe<Scalars['String']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
};


export type IQueryTypeDatasourcesArgs = {
  search: Maybe<Scalars['String']>;
  by_ids: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type IQueryTypeLinksArgs = {
  starts_with: Maybe<Scalars['String']>;
  paginated: Maybe<Scalars['Boolean']>;
};


export type IQueryTypePageItemArgs = {
  id: Scalars['ID'];
  find_by: Maybe<Scalars['String']>;
  from_release: Maybe<Scalars['Int']>;
  resolve_links: Maybe<Scalars['String']>;
  resolve_relations: Maybe<Scalars['String']>;
  language: Maybe<Scalars['String']>;
};


export type IQueryTypePageItemsArgs = {
  first_published_at_gt: Maybe<Scalars['String']>;
  first_published_at_lt: Maybe<Scalars['String']>;
  published_at_gt: Maybe<Scalars['String']>;
  published_at_lt: Maybe<Scalars['String']>;
  starts_with: Maybe<Scalars['String']>;
  by_slugs: Maybe<Scalars['String']>;
  excluding_slugs: Maybe<Scalars['String']>;
  fallback_lang: Maybe<Scalars['String']>;
  by_uuids: Maybe<Scalars['String']>;
  by_uuids_ordered: Maybe<Scalars['String']>;
  excluding_ids: Maybe<Scalars['String']>;
  excluding_fields: Maybe<Scalars['String']>;
  resolve_links: Maybe<Scalars['String']>;
  resolve_relations: Maybe<Scalars['String']>;
  from_release: Maybe<Scalars['String']>;
  sort_by: Maybe<Scalars['String']>;
  search_term: Maybe<Scalars['String']>;
  is_startpage: Maybe<Scalars['String']>;
  language: Maybe<Scalars['String']>;
  with_tag: Maybe<Scalars['String']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter_query: Maybe<Scalars['JsonScalar']>;
};


export type IQueryTypePostItemArgs = {
  id: Scalars['ID'];
  find_by: Maybe<Scalars['String']>;
  from_release: Maybe<Scalars['Int']>;
  resolve_links: Maybe<Scalars['String']>;
  resolve_relations: Maybe<Scalars['String']>;
  language: Maybe<Scalars['String']>;
};


export type IQueryTypePostItemsArgs = {
  first_published_at_gt: Maybe<Scalars['String']>;
  first_published_at_lt: Maybe<Scalars['String']>;
  published_at_gt: Maybe<Scalars['String']>;
  published_at_lt: Maybe<Scalars['String']>;
  starts_with: Maybe<Scalars['String']>;
  by_slugs: Maybe<Scalars['String']>;
  excluding_slugs: Maybe<Scalars['String']>;
  fallback_lang: Maybe<Scalars['String']>;
  by_uuids: Maybe<Scalars['String']>;
  by_uuids_ordered: Maybe<Scalars['String']>;
  excluding_ids: Maybe<Scalars['String']>;
  excluding_fields: Maybe<Scalars['String']>;
  resolve_links: Maybe<Scalars['String']>;
  resolve_relations: Maybe<Scalars['String']>;
  from_release: Maybe<Scalars['String']>;
  sort_by: Maybe<Scalars['String']>;
  search_term: Maybe<Scalars['String']>;
  is_startpage: Maybe<Scalars['String']>;
  language: Maybe<Scalars['String']>;
  with_tag: Maybe<Scalars['String']>;
  page: Maybe<Scalars['Int']>;
  per_page: Maybe<Scalars['Int']>;
  filter_query: Maybe<Scalars['JsonScalar']>;
  filter_query_v2: Maybe<IPostFilterQuery>;
};


export type IQueryTypeTagsArgs = {
  starts_with: Maybe<Scalars['String']>;
};

export type ISpace = {
  __typename?: 'Space';
  domain: Scalars['String'];
  id: Scalars['Int'];
  languageCodes: Array<Maybe<Scalars['String']>>;
  name: Scalars['String'];
  version: Scalars['Int'];
};

export type IStory = {
  __typename?: 'Story';
  alternates: Maybe<Array<Maybe<IAlternate>>>;
  content: Maybe<Scalars['JsonScalar']>;
  createdAt: Maybe<Scalars['String']>;
  firstPublishedAt: Maybe<Scalars['String']>;
  fullSlug: Maybe<Scalars['String']>;
  groupId: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
  isStartpage: Maybe<Scalars['Boolean']>;
  lang: Maybe<Scalars['String']>;
  metaData: Maybe<Scalars['JsonScalar']>;
  name: Maybe<Scalars['String']>;
  parentId: Maybe<Scalars['Int']>;
  path: Maybe<Scalars['String']>;
  position: Maybe<Scalars['Int']>;
  publishedAt: Maybe<Scalars['String']>;
  releaseId: Maybe<Scalars['Int']>;
  slug: Maybe<Scalars['String']>;
  sortByDate: Maybe<Scalars['String']>;
  tagList: Maybe<Array<Maybe<Scalars['String']>>>;
  translatedSlugs: Maybe<Array<Maybe<ITranslatedSlug>>>;
  uuid: Maybe<Scalars['String']>;
};

export type ITag = {
  __typename?: 'Tag';
  name: Scalars['String'];
  taggingsCount: Scalars['Int'];
};

export type ITags = {
  __typename?: 'Tags';
  items: Array<ITag>;
};

export type ITranslatedSlug = {
  __typename?: 'TranslatedSlug';
  lang: Scalars['String'];
  name: Maybe<Scalars['String']>;
  path: Maybe<Scalars['String']>;
};

export type IFullPostBySlugQueryVariables = Exact<{
  slug: Scalars['ID'];
}>;


export type IFullPostBySlugQuery = (
  { __typename?: 'QueryType' }
  & { PostItem: Maybe<(
    { __typename?: 'PostItem' }
    & Pick<IPostItem, 'slug' | 'published_at' | 'first_published_at' | 'id'>
    & { content: Maybe<(
      { __typename?: 'PostComponent' }
      & Pick<IPostComponent, 'long_text' | 'intro' | 'title' | 'image'>
      & { author: Maybe<(
        { __typename?: 'Story' }
        & Pick<IStory, 'name' | 'content'>
      )> }
    )> }
  )>, PostItems: Maybe<(
    { __typename?: 'PostItems' }
    & { items: Maybe<Array<Maybe<(
      { __typename?: 'PostItem' }
      & Pick<IPostItem, 'slug' | 'published_at' | 'first_published_at'>
      & { content: Maybe<(
        { __typename?: 'PostComponent' }
        & Pick<IPostComponent, 'long_text' | 'intro' | 'title' | 'image'>
        & { author: Maybe<(
          { __typename?: 'Story' }
          & Pick<IStory, 'name' | 'content'>
        )> }
      )> }
    )>>> }
  )> }
);

export type IAllPostsHomeQueryVariables = Exact<{ [key: string]: never; }>;


export type IAllPostsHomeQuery = (
  { __typename?: 'QueryType' }
  & { PostItems: Maybe<(
    { __typename?: 'PostItems' }
    & { items: Maybe<Array<Maybe<(
      { __typename?: 'PostItem' }
      & Pick<IPostItem, 'slug' | 'published_at' | 'first_published_at'>
      & { content: Maybe<(
        { __typename?: 'PostComponent' }
        & Pick<IPostComponent, 'long_text' | 'intro' | 'title' | 'image'>
        & { author: Maybe<(
          { __typename?: 'Story' }
          & Pick<IStory, 'name' | 'content'>
        )> }
      )> }
    )>>> }
  )> }
);

export type IPostsWithSlugQueryVariables = Exact<{ [key: string]: never; }>;


export type IPostsWithSlugQuery = (
  { __typename?: 'QueryType' }
  & { PostItems: Maybe<(
    { __typename?: 'PostItems' }
    & { items: Maybe<Array<Maybe<(
      { __typename?: 'PostItem' }
      & Pick<IPostItem, 'slug'>
    )>>> }
  )> }
);

export type IPostBySlugQueryVariables = Exact<{
  slug: Scalars['ID'];
}>;


export type IPostBySlugQuery = (
  { __typename?: 'QueryType' }
  & { PostItem: Maybe<(
    { __typename?: 'PostItem' }
    & Pick<IPostItem, 'slug'>
  )> }
);


export const FullPostBySlugDocument = gql`
    query FullPostBySlug($slug: ID!) {
  PostItem(id: $slug) {
    slug
    published_at
    first_published_at
    id
    content {
      long_text
      intro
      title
      image
      author {
        name
        content
      }
    }
  }
  PostItems(per_page: 3, sort_by: "first_published_at:desc") {
    items {
      slug
      published_at
      first_published_at
      content {
        long_text
        intro
        title
        image
        author {
          name
          content
        }
      }
    }
  }
}
    `;
export const AllPostsHomeDocument = gql`
    query AllPostsHome {
  PostItems(sort_by: "first_published_at:desc") {
    items {
      slug
      published_at
      first_published_at
      content {
        long_text
        intro
        title
        image
        author {
          name
          content
        }
      }
    }
  }
}
    `;
export const PostsWithSlugDocument = gql`
    query PostsWithSlug {
  PostItems {
    items {
      slug
    }
  }
}
    `;
export const PostBySlugDocument = gql`
    query PostBySlug($slug: ID!) {
  PostItem(id: $slug) {
    slug
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    FullPostBySlug(variables: IFullPostBySlugQueryVariables): Promise<IFullPostBySlugQuery> {
      return withWrapper(() => client.request<IFullPostBySlugQuery>(print(FullPostBySlugDocument), variables));
    },
    AllPostsHome(variables?: IAllPostsHomeQueryVariables): Promise<IAllPostsHomeQuery> {
      return withWrapper(() => client.request<IAllPostsHomeQuery>(print(AllPostsHomeDocument), variables));
    },
    PostsWithSlug(variables?: IPostsWithSlugQueryVariables): Promise<IPostsWithSlugQuery> {
      return withWrapper(() => client.request<IPostsWithSlugQuery>(print(PostsWithSlugDocument), variables));
    },
    PostBySlug(variables: IPostBySlugQueryVariables): Promise<IPostBySlugQuery> {
      return withWrapper(() => client.request<IPostBySlugQuery>(print(PostBySlugDocument), variables));
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;