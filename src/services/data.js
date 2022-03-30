import { gql, request } from "graphql-request";

const graphqlAPI = process.env.GRAPHCMS_API;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      posts {
        slug
        title
        createdAt
        content {
          markdown
        }
        id
        publishedAt
        excerpt
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result;
};

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        title
        excerpt
        content {
          markdown
          text
          raw
        }
        id
        createdAt
        publishedAt
        author {
          biography
          name
          picture {
            url
          }
        }
        tags
        coverImage {
          url
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result;
};
